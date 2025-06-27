"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

interface Department {
    id: string
    name: string
    description: string
}

interface Priority {
    id: string
    name: string
    level: string
    color: string
}

interface Category {
    id: string
    name: string
    color: string
}

interface OnboardingState {
    currentStep: number
    stepOne: {
        organizationName: string
        slug: string
        timezone: string
        logo: string
        departments: Department[]
    }
    stepTwo: {
        priorities: Priority[]
        categories: Category[]
        slaResponseTime: string
        slaResolutionTime: string
        knowledgeBase: boolean
        internalMessaging: boolean
    }
}

type OnboardingAction =
    | { type: "SET_CURRENT_STEP"; payload: number }
    | { type: "UPDATE_STEP_ONE"; payload: Partial<OnboardingState["stepOne"]> }
    | { type: "UPDATE_STEP_TWO"; payload: Partial<OnboardingState["stepTwo"]> }
    | { type: "ADD_DEPARTMENT"; payload: Department }
    | { type: "REMOVE_DEPARTMENT"; payload: string }
    | { type: "UPDATE_DEPARTMENT"; payload: { id: string; field: string; value: string } }
    | { type: "ADD_PRIORITY"; payload: Priority }
    | { type: "REMOVE_PRIORITY"; payload: string }
    | { type: "UPDATE_PRIORITY"; payload: { id: string; field: string; value: string } }
    | { type: "ADD_CATEGORY"; payload: Category }
    | { type: "REMOVE_CATEGORY"; payload: string }
    | { type: "UPDATE_CATEGORY"; payload: { id: string; field: string; value: string } }

const initialState: OnboardingState = {
    currentStep: 1,
    stepOne: {
        organizationName: "",
        slug: "",
        timezone: "",
        logo: "",
        departments: [],
    },
    stepTwo: {
        priorities: [
            { id: "1", name: "Critical", level: "1", color: "#EF4444" },
            { id: "2", name: "High", level: "2", color: "#F97316" },
            { id: "3", name: "Medium", level: "3", color: "#EAB308" },
            { id: "4", name: "Low", level: "4", color: "#10B981" },
        ],
        categories: [
            { id: "1", name: "Technical Support", color: "#3B82F6" },
            { id: "2", name: "Billing", color: "#10B981" },
            { id: "3", name: "General Inquiry", color: "#8B5CF6" },
        ],
        slaResponseTime: "60",
        slaResolutionTime: "480",
        knowledgeBase: true,
        internalMessaging: true,
    },
}

function onboardingReducer(state: OnboardingState, action: OnboardingAction): OnboardingState {
    switch (action.type) {
        case "SET_CURRENT_STEP":
            return { ...state, currentStep: action.payload }
        case "UPDATE_STEP_ONE":
            return { ...state, stepOne: { ...state.stepOne, ...action.payload } }
        case "UPDATE_STEP_TWO":
            return { ...state, stepTwo: { ...state.stepTwo, ...action.payload } }
        case "ADD_DEPARTMENT":
            return {
                ...state,
                stepOne: {
                    ...state.stepOne,
                    departments: [...state.stepOne.departments, action.payload],
                },
            }
        case "REMOVE_DEPARTMENT":
            return {
                ...state,
                stepOne: {
                    ...state.stepOne,
                    departments: state.stepOne.departments.filter((dept) => dept.id !== action.payload),
                },
            }
        case "UPDATE_DEPARTMENT":
            return {
                ...state,
                stepOne: {
                    ...state.stepOne,
                    departments: state.stepOne.departments.map((dept) =>
                        dept.id === action.payload.id ? { ...dept, [action.payload.field]: action.payload.value } : dept,
                    ),
                },
            }
        case "ADD_PRIORITY":
            return {
                ...state,
                stepTwo: {
                    ...state.stepTwo,
                    priorities: [...state.stepTwo.priorities, action.payload],
                },
            }
        case "REMOVE_PRIORITY":
            return {
                ...state,
                stepTwo: {
                    ...state.stepTwo,
                    priorities: state.stepTwo.priorities.filter((p) => p.id !== action.payload),
                },
            }
        case "UPDATE_PRIORITY":
            return {
                ...state,
                stepTwo: {
                    ...state.stepTwo,
                    priorities: state.stepTwo.priorities.map((p) =>
                        p.id === action.payload.id ? { ...p, [action.payload.field]: action.payload.value } : p,
                    ),
                },
            }
        case "ADD_CATEGORY":
            return {
                ...state,
                stepTwo: {
                    ...state.stepTwo,
                    categories: [...state.stepTwo.categories, action.payload],
                },
            }
        case "REMOVE_CATEGORY":
            return {
                ...state,
                stepTwo: {
                    ...state.stepTwo,
                    categories: state.stepTwo.categories.filter((c) => c.id !== action.payload),
                },
            }
        case "UPDATE_CATEGORY":
            return {
                ...state,
                stepTwo: {
                    ...state.stepTwo,
                    categories: state.stepTwo.categories.map((c) =>
                        c.id === action.payload.id ? { ...c, [action.payload.field]: action.payload.value } : c,
                    ),
                },
            }
        default:
            return state
    }
}

const OnboardingContext = createContext<{
    state: OnboardingState
    dispatch: React.Dispatch<OnboardingAction>
} | null>(null)

export function OnboardingProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(onboardingReducer, initialState)

    return <OnboardingContext.Provider value={{ state, dispatch }}>{children}</OnboardingContext.Provider>
}

export function useOnboarding() {
    const context = useContext(OnboardingContext)
    if (!context) {
        throw new Error("useOnboarding must be used within an OnboardingProvider")
    }
    return context
}
