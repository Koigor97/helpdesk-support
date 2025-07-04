
/**
 * All the pieces Supabase needs to read/write cookies in App Router.
 */
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

export type InviteUserState = {
    errors?: {
        email?: string[]
        fullName?: string[]
        role?: string[]
        department?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type EditUserState = {
    errors?: {
        fullName?: string[]
        email?: string[]
        phone?: string[]
        role?: string[]
        department?: string[]
        bio?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type DeactivateUserState = {
    errors?: {
        userId?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type SendMessageState = {
    errors?: {
        recipientId?: string[]
        subject?: string[]
        content?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type CreateTicketState = {
    errors?: {
        title?: string[]
        description?: string[]
        priority?: string[]
        category?: string[]
        assignee?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
    ticketId?: string
}

export type CreateCommentState = {
    errors?: {
        content?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type EditTicketState = {
    errors?: {
        title?: string[]
        description?: string[]
        status?: string[]
        priority?: string[]
        category?: string[]
        assignedTo?: string[]
        tags?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type AssignTicketState = {
    errors?: {
        ticketId?: string[]
        assignedTo?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type DeleteTicketState = {
    errors?: {
        ticketId?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type ProfileSettingsState = {
    errors?: {
        fullName?: string[]
        email?: string[]
        phone?: string[]
        bio?: string[]
        departmentId?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type UserPreferencesState = {
    errors?: {
        theme?: string[]
        language?: string[]
        timezone?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type OrganizationSettingsState = {
    errors?: {
        organizationName?: string[]
        website?: string[]
        industry?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type OrgSettingsState = {
    errors?: {
        ticketPrefix?: string[]
        slaHours?: string[]
        businessHoursStart?: string[]
        businessHoursEnd?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type SecuritySettingsState = {
    errors?: {
        currentPassword?: string[]
        newPassword?: string[]
        confirmPassword?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

export type DashboardStats = {
    totalTickets: number
    openTickets: number
    resolvedTickets: number
    activeUsers: number
    ticketsByStatus: { status: string; count: number }[]
    ticketsByPriority: { priority: string; count: number }[]
    recentTickets: {
        id: string
        title: string
        author: { name: string; avatar: string }
        priority: { name: string; color: string }
        createdAt: string
    }[]
    recentActivity: { id: string; description: string; user: { name: string }; createdAt: string; type: string }[]
    avgResponseTime: string
}

export type FileMetadata = {
    name: string
    size: number
    type: string
    url: string
    id: string
}

export type FileWithPreview = {
    file: File | FileMetadata
    id: string
    preview?: string
}

export type FileUploadOptions = {
    maxFiles?: number // Only used when multiple is true, defaults to Infinity
    maxSize?: number // in bytes
    accept?: string
    multiple?: boolean // Defaults to false
    initialFiles?: FileMetadata[]
    onFilesChange?: (files: FileWithPreview[]) => void // Callback when files change
    onFilesAdded?: (files: FileWithPreview[]) => void // Callback when new files are added
}

export type FileUploadState = {
    files: FileWithPreview[]
    isDragging: boolean
    errors: string[]
}
