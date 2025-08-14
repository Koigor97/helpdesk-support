"use client";

import Link from "next/link";
import React, {useState} from "react";

import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {
    RiHome5Fill,
    RiMenu3Fill,
    RiTicket2Fill,
    RiGroupFill,
    RiSettings2Fill,
    RiMailFill,
    RiLineChartFill
} from "@remixicon/react";
import {cn} from "@/lib/utils";
import Logo from "@/components/common/logo";
import ThemeToggle from "@/components/common/themeToggle";
import {usePathname} from "next/navigation";


const navigationItems = [
    {id: "/dashboard", name: "Overview", icon: RiHome5Fill},
    {id: "/dashboard/tickets", name: "Tickets", icon: RiTicket2Fill},
    {id: "/dashboard/users", name: "Users", icon: RiGroupFill},
    {id: "/dashboard/messages", name: "Messages", icon: RiMailFill},
    {id: "/dashboard/analytics", name: "Analytics", icon: RiLineChartFill},
    {id: "/dashboard/settings", name: "Settings", icon: RiSettings2Fill},
]


export default function Navigation() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const normalise = (p: string) => (p === "/" ? "/" : p.replace(/\/+$/, ""))

    const NavItems = ()  => {
        const path = normalise(pathname);

        return (
            <>
                {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const id = normalise(item.id)
                    const isActive = id === "/dashboard" ? path === id : (path === id || path.startsWith(id + "/"));

                    return (
                        <Button
                            asChild
                            key={item.id}
                            className={cn(
                                "px-4 py-2 rounded-full" +
                                "text-sm font-medium transition-all duration-200 bg-secondary/10",
                                isActive ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                            )}
                        >
                            <Link href={item.id}
                                  className="flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                <span>{item.name}</span>
                            </Link>
                        </Button>
                    )
                })}
            </>

        )

    }

    return (
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-3">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center">

                    {/* Navigation Items */}
                    <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-full border">
                        <NavItems />
                        <ThemeToggle />
                    </div>

                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Logo showLogoTitle={false} />
                    </div>

                    <ThemeToggle />

                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <RiMenu3Fill className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <div className="flex flex-col gap-4 mt-8">
                                <NavItems />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}
