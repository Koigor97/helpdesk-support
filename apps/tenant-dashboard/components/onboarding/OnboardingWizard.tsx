"use client"

import {useState} from "react";
import {motion} from "framer-motion";

import {StepIndicator} from "@/components/onboarding/StepIndicator";
import {StepNavigation} from "@/components/onboarding/StepNavigation";
import {StepWrapper} from "@/components/onboarding/StepWrapper";
import {StepOne} from "@/components/onboarding/StepOne";
import {StepTwo} from "@/components/onboarding/StepTwo";
import {StepThree} from "@/components/onboarding/StepThree";

import {OnboardingProvider, useOnboarding} from "@/context/onboarding-context";
import {stepOneSchema, stepTwoSchema} from "@/utils/zodSchemas";


function OnboardingWizardContent() {
    const { state, dispatch } = useOnboarding()
    const [direction, setDirection] = useState(0)
    const totalSteps = 3

    const handleNext = () => {
        if (state.currentStep < totalSteps) {
            setDirection(1)
            dispatch({ type: "SET_CURRENT_STEP", payload: state.currentStep + 1 })
        } else {
            // Handle completion
            console.log("Setup completed!", { stepOne: state.stepOne, stepTwo: state.stepTwo })
        }
    }

    const handlePrevious = () => {
        if (state.currentStep > 1) {
            setDirection(-1)
            dispatch({ type: "SET_CURRENT_STEP", payload: state.currentStep - 1 })
        }
    }

    const getValidationErrors = () => {
        if (state.currentStep === 1) {
            const result = stepOneSchema.safeParse(state.stepOne)
            if (!result.success) {
                const errors = result.error.errors
                const missingFields = []

                if (errors.find((e) => e.path.includes("organizationName"))) {
                    missingFields.push("Organization Name")
                }
                if (errors.find((e) => e.path.includes("slug"))) {
                    missingFields.push("Slug")
                }
                if (errors.find((e) => e.path.includes("timezone"))) {
                    missingFields.push("Timezone")
                }
                if (errors.find((e) => e.path.includes("departments"))) {
                    missingFields.push("At least one Department")
                }

                return `Please fill in the following required fields: ${missingFields.join(", ")}`
            }
        }

        if (state.currentStep === 2) {
            const result = stepTwoSchema.safeParse(state.stepTwo)
            if (!result.success) {
                const errors = result.error.errors
                const missingFields = []

                if (errors.find((e) => e.path.includes("slaResponseTime"))) {
                    missingFields.push("SLA Response Time")
                }
                if (errors.find((e) => e.path.includes("slaResolutionTime"))) {
                    missingFields.push("SLA Resolution Time")
                }
                if (errors.find((e) => e.path.includes("priorities"))) {
                    missingFields.push("Valid Priorities")
                }
                if (errors.find((e) => e.path.includes("categories"))) {
                    missingFields.push("Valid Categories")
                }

                return `Please complete the following: ${missingFields.join(", ")}`
            }
        }

        return null
    }

    const isNextDisabled = () => {
        if (state.currentStep === 1) {
            const result = stepOneSchema.safeParse(state.stepOne)
            return !result.success
        }
        if (state.currentStep === 2) {
            const result = stepTwoSchema.safeParse(state.stepTwo)
            return !result.success
        }
        return false
    }

    const renderCurrentStep = () => {
        switch (state.currentStep) {
            case 1:
                return <StepOne />
            case 2:
                return <StepTwo />
            case 3:
                return <StepThree />
            default:
                return null
        }
    }


    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:container lg:mx-auto">
                <div className="w-full max-w-7xl mx-auto">
                    <StepIndicator currentStep={state.currentStep} totalSteps={totalSteps} />

                    <StepWrapper currentStep={state.currentStep} direction={direction}>
                        <div className="mb-8">{renderCurrentStep()}</div>
                    </StepWrapper>

                    <StepNavigation
                        currentStep={state.currentStep}
                        totalSteps={totalSteps}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        isNextDisabled={isNextDisabled()}
                        tooltipMessage={getValidationErrors()}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default function OnboardingWizard() {
    return (
        <OnboardingProvider>
            <OnboardingWizardContent />
        </OnboardingProvider>
    )
}
