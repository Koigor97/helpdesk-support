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

interface AppHeaderProps {
    children?: React.ReactNode; // for sidebar trigger or any other element
}

/**
 * Top header with mobile menu and user avatar.
 */
export function AppHeader({children} : AppHeaderProps) {
    const handleLogout = () => {
        // Placeholder: replace with your auth sign-out call
        window.location.assign("/logout");
    };

    return (
        <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b bg-background/80 backdrop-blur px-3 md:px-6"><div>
                {/* Left side content (e.g., sidebar trigger) */}
                {children}

                {/* Spacer */}
            </div>


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
                            <AvatarFallback>YK</AvatarFallback>
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
