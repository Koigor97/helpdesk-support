export interface CookieEntry {
    name: string
    value: string
    options?: Record<string, unknown>
}

export type LoginState = {
    errors?: {
        email?: string[]
        password?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
    redirectTo?: string
}

export type VerifyOTPState = {
    errors?: {
        otpCode?: string[]
        email?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
    email?: string
}

export type ResendOTPState = {
    errors?: {
        email?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type SignupState = {
    errors?: {
        email?: string[]
        fullName?: string[]
        password?: string[]
        confirmPassword?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
    redirectTo?: string
}