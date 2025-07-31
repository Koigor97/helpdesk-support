"use client"

import {useState} from "react";
import Link from "next/link";

import Logo from "@/components/common/logo";
import {mockRecentMessages} from "@/utils/dummyData/recentMessages";
import {truncateContent, formatTimeAgo} from "@/utils/helpers";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    RiUser2Line,
    RiSettings3Line,
    RiLogoutCircleRLine,
    RiNotification2Line,
    RiArrowDownSLine,
    RiMailLine
} from "@remixicon/react";


interface TenantHeaderProps {
    organizationName: string
    organizationLogo: string
    userProfile: {
        name: string
        email: string
        avatar: string
        role: string
    }
}


export default function TenantHeader({organizationName, organizationLogo, userProfile} : TenantHeaderProps) {

    const [notificationCount] = useState(3);
    const [messageCount] = useState(mockRecentMessages.length);

    const getRoleColor = (role: string) => {
        switch (role.toLowerCase()) {
            case "admin":
                return "bg-purple-100 text-purple-800"
            case "agent":
                return "bg-orange-100 text-orange-800"
            case "supervisor":
                return "bg-indigo-100 text-indigo-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }


    return (
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Organization Info */}
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 self-start">
                            <AvatarImage src={organizationLogo || "/placeholder.svg"} alt={organizationName} />
                            <AvatarFallback>{organizationName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-lg font-semibold">{organizationName}</h1>
                            <p className="text-xs text-muted-foreground">Support Dashboard</p>
                        </div>
                    </div>

                    <Logo />

                    {/* User Profile & Actions */}
                    <div className="flex items-center gap-3">
                        {/* Messages */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="relative">
                                    <RiMailLine className="h-6 w-6" />
                                    {messageCount > 0 && (
                                        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary
                                        text-xs text-secondary-foreground flex items-center justify-center">
                      {messageCount}
                    </span>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80">
                                <DropdownMenuLabel>Recent Messages</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <div className="max-h-96 overflow-y-auto">
                                    {mockRecentMessages.slice(0, 6).map((message) => (
                                        <DropdownMenuItem key={message.id} asChild>
                                            <Link
                                                href={`/dashboard/messages?id=${message.id}`}
                                                className="flex flex-col items-start gap-1 p-3 cursor-pointer hover:bg-muted/50"
                                            >
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="font-medium text-sm">{message.sender}</span>
                                                    <span className="text-xs text-muted-foreground">{formatTimeAgo(message.createdAt)}</span>
                                                </div>
                                                <span className="text-sm font-medium">{message.subject}</span>
                                                <span className="text-xs text-muted-foreground leading-relaxed">
                          {truncateContent(message.content)}
                        </span>
                                                {!message.isRead && <div className="h-2 w-2 bg-primary rounded-full ml-auto" />}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/dashboard/messages" className="w-full text-center font-medium">
                                        See all messages
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Notifications */}
                        <Button variant="ghost" size="icon" className="relative">
                            <RiNotification2Line className="h-6 w-6"/>
                            {notificationCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary
                                text-xs text-secondary-foreground flex items-center justify-center">
                                    {notificationCount}
                                </span>
                            )}
                        </Button>

                        {/* User Profile Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2 px-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                                        <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="hidden md:block text-left">
                                        <div className="text-sm font-medium">{userProfile.name}</div>
                                        <div className="text-xs text-muted-foreground">{userProfile.email}</div>
                                    </div>
                                    <RiArrowDownSLine className="h-4 w-4 text-muted-foreground" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium">{userProfile.name}</p>
                                        <p className="text-xs text-muted-foreground">{userProfile.email}</p>
                                        <Badge className={`w-fit text-xs ${getRoleColor(userProfile.role)}`}>{userProfile.role}</Badge>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={'/dashboard/profile'} className={
                                        "flex items-center gap-1"
                                    }>
                                        <RiUser2Line className="h-4 w-4" />
                                        Profile
                                    </Link>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/dashboard/settings'} className={
                                        "flex items-center gap-1"
                                    }>
                                        <RiSettings3Line className="h-4 w-4" />
                                        Settings
                                    </Link>

                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem  className="text-red-600 flex items-center gap-1">
                                    <RiLogoutCircleRLine className="h-4 w-4" />
                                    Sign out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}