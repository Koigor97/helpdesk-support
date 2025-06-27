"use client"

import {Button} from "@workspace/ui/components/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@workspace/ui/components/tooltip";


interface StepNavigationProps {
    currentStep: number
    totalSteps: number
    onPrevious: () => void
    onNext: () => void
    isNextDisabled?: boolean
    tooltipMessage?: string | null
}


// @ts-ignore
export function StepNavigation({
                                   currentStep,
                                   totalSteps,
                                   onPrevious,
                                   onNext,
                                   isNextDisabled = false,
                                   tooltipMessage,
                               }: StepNavigationProps) {
    const NextButton = (
        <Button
            onClick={onNext}
            disabled={isNextDisabled}
            className="w-full sm:w-auto px-6 bg-blue-500 hover:bg-blue-600 order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {currentStep === totalSteps ? "Complete Setup" : "Next step"}
        </Button>
    )

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8">
            <Button
                variant="outline"
                onClick={onPrevious}
                disabled={currentStep === 1}
                className="w-full sm:w-auto px-6 bg-transparent order-2 sm:order-1"
            >
                Prev step
            </Button>

            {isNextDisabled && tooltipMessage ? (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>{NextButton}</TooltipTrigger>
                        <TooltipContent>
                            <p className="max-w-xs text-sm">{tooltipMessage}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ) : (
                NextButton
            )}
        </div>
    )
}
