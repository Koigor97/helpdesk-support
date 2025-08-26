"use client"

import "./globals.css"

import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent} from "@/components/ui/card";
import {Theme} from "@/components/theme";
// Keep the page as a Server Component that renders a small Client bit
export default function NotFound() {
    return (
        <Theme>
            <main className="min-h-screen grid place-items-center px-4">
                <Card className="w-full max-w-md border-none shadow-none">
                    <CardContent className="pt-0">
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="size-12 rounded-full bg-muted grid place-items-center">
                                <span className="text-2xl">😕</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-xl font-semibold">Tenant not found</h1>

                            <TenantDetail />

                            <p className="text-sm text-muted-foreground">
                                The tenant you’re trying to access doesn’t exist, or the URL is misspelled.
                            </p>

                            {/* Actions */}
                            <div className="mt-2 grid gap-2 w-full">
                                <Link href="/" className="w-full">
                                    <Button className="w-full cursor-pointer">Go to homepage</Button>
                                </Link>

                                {/* quick jumper to another tenant */}
                                <QuickTenantJump />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </Theme>

    );
}

/** Shows `Attempted: /{tenant}` if middleware rewrites with ?tenant=slug.
 *  If you don’t pass it, this renders nothing. */

function TenantDetail() {
    const sp = useSearchParams();
    const isTenant = (sp.get("tenant") || "").trim();
    if (!isTenant) return null;
    return (
        <p className="text-sm text-muted-foreground">
            Attempted: <span className="font-mono text-foreground font-black">/{isTenant}</span>
        </p>
    );
}

/** Tiny form: type a tenant slug and jump to /{slug} */
function QuickTenantJump() {
    const router = useRouter();
    const [slug, setSlug] = useState("");

    return (
        <form
            className="flex gap-2"
            onSubmit={(e) => {
                e.preventDefault();
                const s = slug.trim().toLowerCase();
                if (!s) return;
                router.push(`/${s}`);
            }}
        >
            <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="enter-tenant-slug e.g dsti"
                aria-label="Tenant slug"
                autoComplete="off"
            />
            <Button type="submit" variant="outline" className="cursor-pointer">
                Go
            </Button>
        </form>
    );
}