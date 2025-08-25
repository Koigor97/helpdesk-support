"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ListChecks, SquarePen, Users } from "lucide-react";
import Logo from "@/components/common/logo";
import {urlPath} from "@/lib/globalHelpers";

/**
 * Sidebar navigation for the dashboard.
 * Highlights the active route; collapses into a Sheet on mobile (handled by AppHeader).
 */
const links = [
  { href: "/tickets", label: "Ticket List", icon: ListChecks },
  { href: "/tickets/new", label: "New Ticket", icon: SquarePen },
  { href: "/tickets/users", label: "Users", icon: Users },
] as const;

export function AppSidebar({tenant}: { tenant?: string | unknown}) {
    const pathname = usePathname();
    const normalize = (s: string) => (s === "/" ? "/" : s.replace(/\/+$/, ""));
    const current = normalize(pathname);

    const isActive = (href: string) => {
        const target = normalize(href);

        // Only highlight Ticket List for the list itself and details pages, not for /tickets/new
        if (target === urlPath("/tickets", tenant)) {
            return current === urlPath("/tickets", tenant) ||
                current.startsWith(urlPath("/tickets/details/", tenant));
        }

        // Default behavior: exact match or nested under the target
        return current === target || current.startsWith(`${target}/`);
    };

    return (
        <Sidebar >
            <SidebarHeader className="py-5 mb-5">
                <Link href={urlPath("/tickets", tenant)} className="font-semibold text-xl tracking-tight">
                    <Logo />
                </Link>
            </SidebarHeader>
            <SidebarContent className="px-2">
                <SidebarMenu>
                    {links.map((link) => {
                        const active = isActive(urlPath(link.href, tenant));
                        const Icon = link.icon;

                        return (
                                <SidebarMenuItem key={link.label}>
                                    <SidebarMenuButton asChild>
                                        <Link href={urlPath(link.href, tenant)}
                                              className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                                                  active
                                                      ? "bg-primary text-primary-foreground"
                                                      : "hover:bg-muted"
                                              )}
                                              aria-current={active ? "page" : undefined}>
                                            <Icon />
                                            <span>{link.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                    })}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
