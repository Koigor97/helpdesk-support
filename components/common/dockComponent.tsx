"use client";

import {useMemo, useState} from "react";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";

import {useUserProfile} from "@/hooks/useUserProfile";
import {getDockActions} from "@/utils/dockAction";
import DockButton from "@/components/common/dockButton";

import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import {RiAddFill, RiMoreLine} from "@remixicon/react";


const AddUserComp = dynamic(() => import("@/components/users/addUserComp"), {
    ssr: false,
});

export default function BottomDock() {

    const { role, loading } = useUserProfile();

    const dockActions = useMemo(() => getDockActions(AddUserComp), []);

    const actions = useMemo(() => dockActions[role], [dockActions, role]);

    const router = useRouter();

    const [isExpanded, setIsExpanded] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    if (loading) return null;





    return (
        <TooltipProvider>
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                {/* Desktop Dock */}
                <div className="hidden md:flex items-center gap-2 bg-secondary/10 backdrop-blur-sm border rounded-full px-2 py-2 shadow-lg">
                    {actions.map((action) => (
                        <DockButton
                            key={action.id}
                            action={action}
                            showLabel={true}
                            className={
                            "h-12 w-12 rounded-full bg-background backdrop-blur " +
                                "border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" +
                                "hover:bg-background"
                            }
                        />
                    ))}
                </div>

                {/* Mobile Dock */}
                <div className="md:hidden">
                    {isExpanded ? (
                        <div className="flex flex-col items-center gap-2 mb-2">
                            {actions.map((action) => (
                                <DockButton
                                    key={action.id}
                                    action={action}
                                    className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm"
                                    onAfterClick={() => setIsExpanded(false)} // optional: callback support
                                    showLabel={true} // optional: label below or beside icon
                                />
                            ))}
                        </div>
                    ) : null}

                    {/* Main Action Buttons */}
                    <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-full px-2 py-2 shadow-lg">
                        {/* Create Ticket */}
                        <Button
                            size="icon"
                            className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90"
                            onClick={() => router.push("/dashboard/ticket/create")}
                        >
                            <RiAddFill className="h-5 w-5" />
                        </Button>

                        {/* More Actions */}
                        <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full h-12 w-12 bg-transparent"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <RiMoreLine className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    )
}
