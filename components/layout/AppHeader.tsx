"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut } from "lucide-react";
import {supabaseBrowserClient} from "@/lib/supabase-clients/browserClient";
import type {Tables} from "@/utils/supabase-db-types";
import {useEffect} from "react";
import {formatAssigneeName, urlPath} from "@/lib/globalHelpers";
import {useRouter} from "next/navigation";

interface AppHeaderProps {
    children?: React.ReactNode;
    tenant: string ;
}

type TenantRow = Tables<"tenants">

/**
 * Top header with mobile menu and user avatar.
 */
export function AppHeader({children, tenant} : AppHeaderProps) {

    const [userName, setUserName] = React.useState<string>("");
    const [tenantName, setTenantName] = React.useState<string>("");
    const router = useRouter();

    const supabase = supabaseBrowserClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    useEffect(() => {
        // prevent state update after component unmount
        let cancelled = false;

        // Load username + tenant name in parallel
        (async () => {
            try {
                const [{ data: sessionData }, { data: tenantData, error: tenantErr }] = await Promise.all([
                    supabase.auth.getSession(),
                    supabase
                        .from("tenants")
                        .select("name")
                        .eq("id", tenant)
                        .single()
                        .overrideTypes<Pick<TenantRow, "name"> | null>()
                ])

                if (cancelled) return;

                // get username from session email
                const email = sessionData?.session?.user?.email ?? "";
                setUserName(formatAssigneeName(email));

                // get tenant name from DB (fallback to the slug-ish uppercase if missing
                if (!tenantErr && tenantData?.name) {
                    setTenantName(tenantData.name)
                } else {
                    setTenantName(tenant.toUpperCase());
                }

            } catch {
                if (!cancelled) setTenantName(tenant.toUpperCase());
            }
        })();

        // auth state listener: redirect to /{tenant} on sign-out
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_OUT") {
                router.push(urlPath(`/`, tenant));
            }
        });


        return () => {
            cancelled = true;
            subscription.unsubscribe();
        };
    }, [supabase, tenant, router])


    return (
        <header
            className="sticky top-0 z-40 flex h-14 items-center
            gap-3 border-b bg-background/80 backdrop-blur px-3 md:px-6 mb-10"
        >
            <div>{children}</div>

            <div className="flex-1">
                <span>{tenantName}</span>
            </div>
            <Separator orientation="vertical" className="hidden md:block h-6" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        aria-label="Open user menu"
                    >
                        <Avatar>
                            <AvatarFallback>{userName || "user"}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-red-600 focus:text-red-700"
                        onClick={handleLogout}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
  );
}
