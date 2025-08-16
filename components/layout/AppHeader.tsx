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
import {useEffect} from "react";
import {formatAssigneeName} from "@/lib/globalHelpers";
import {useRouter} from "next/navigation";

interface AppHeaderProps {
    children?: React.ReactNode; // for sidebar trigger or any other element
}

/**
 * Top header with mobile menu and user avatar.
 */
export function AppHeader({children} : AppHeaderProps) {

    const [userName, setUserName] = React.useState<string>("");
    const router = useRouter();

    const supabase = supabaseBrowserClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };


    useEffect(() => {
        const { data: {subscription} } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_OUT") {
                router.push("/");
            }
        })

        return () => subscription.unsubscribe();
    }, []);


    useEffect(() => {
        const getUserName = async () => {
            const { data } = await supabase.auth.getSession()
            if(!data) return;

            const formatedName = formatAssigneeName(data.session?.user.email!)
            setUserName(formatedName);
        }

        getUserName().then();
    }, [])


    return (
        <header
            className="sticky top-0 z-40 flex h-14 items-center
            gap-3 border-b bg-background/80 backdrop-blur px-3 md:px-6 mb-10"
        >
            <div>{children}</div>

          <div className="flex-1" />
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
