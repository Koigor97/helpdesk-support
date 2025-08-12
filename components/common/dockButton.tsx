import {useRouter} from "next/navigation";

import type {DockAction} from "@/utils/types";
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DockButtonProps {
    action: DockAction;
    className?: string;
    onAfterClick?: () => void;
    showLabel?: boolean;
}

export default function DockButton ({ action, className, onAfterClick, showLabel }: DockButtonProps) {
    const router = useRouter();

    if (action.component) {
        const Sheet = action.component;
        const Icon = action.icon

        return (
            <TooltipProvider>
                <Tooltip>
                    <Sheet>
                        <TooltipTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                className={className}
                            >
                                <Icon className="h-6 w-6" />
                            </Button>
                        </TooltipTrigger>
                    </Sheet>
                    <TooltipContent side="top" className="bg-amber-50 border dark:bg-background">
                        {
                            showLabel ?
                                <span className="text-xs text-card-foreground">{action.label}</span>
                                : null
                        }
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }

    if (action.route) {
        const Icon = action.icon

        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            size="icon"
                            variant="ghost"
                            className={className}
                            onClick={() => {
                                router.push(action.route!);
                                onAfterClick?.(); // call if defined
                            }}
                        >
                            <Icon className="h-6 w-6" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-amber-50 border dark:bg-background">
                        {showLabel ? (
                            <span className="text-xs text-card-foreground">{action.label}</span>
                        ) : null}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }
}