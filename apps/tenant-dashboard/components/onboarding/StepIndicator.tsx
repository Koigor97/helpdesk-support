"use client"

import {RiCheckFill} from "@remixicon/react";
import {cn} from "@workspace/ui/lib/utils";
import {motion} from "framer-motion";


interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 sm:space-x-4">
                {Array.from({ length: totalSteps }, (_, i) => {
                    const stepNumber = i + 1
                    const isCompleted = stepNumber < currentStep
                    const isCurrent = stepNumber === currentStep

                    return (
                        <div key={stepNumber} className="flex items-center">
                            <motion.div
                                className={cn(
                                    "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-200",
                                    isCompleted
                                        ? "bg-green-500 border-green-500 text-white"
                                        : isCurrent
                                            ? "bg-blue-500 border-blue-500 text-white"
                                            : "bg-white border-gray-300 text-gray-400",
                                )}
                                initial={false}
                                animate={{
                                    scale: isCurrent ? 1.1 : 1,
                                    boxShadow: isCurrent ? "0 0 0 4px rgba(59, 130, 246, 0.2)" : "0 0 0 0px rgba(59, 130, 246, 0)",
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <motion.div
                                    initial={false}
                                    animate={{
                                        rotate: isCompleted ? 360 : 0,
                                        scale: isCompleted ? [1, 1.2, 1] : 1,
                                    }}
                                    transition={{
                                        duration: isCompleted ? 0.6 : 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {isCompleted ? (
                                        <RiCheckFill className="w-4 h-4 sm:w-5 sm:h-5" />
                                    ) : (
                                        <span className="text-xs sm:text-sm font-medium">{stepNumber}</span>
                                    )}
                                </motion.div>
                            </motion.div>
                            {stepNumber < totalSteps && (
                                <motion.div
                                    className={cn(
                                        "w-8 sm:w-16 h-0.5 ml-2 sm:ml-4 transition-all duration-200",
                                        stepNumber < currentStep ? "bg-green-500" : "bg-gray-300",
                                    )}
                                    initial={false}
                                    animate={{
                                        scaleX: stepNumber < currentStep ? 1 : 0.8,
                                        opacity: stepNumber < currentStep ? 1 : 0.5,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
