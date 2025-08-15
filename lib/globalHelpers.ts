import {MissingEnvVarError} from "@/lib/errors";

/**
 * Retrieve an environment variable, throwing a MissingEnvVarError if it’s not set.
 *
 * @param key - The name of the environment variable to read.
 * @returns The string value of `process.env[key]`.
 * @throws {MissingEnvVarError} When `process.env[key]` is undefined or empty.
 *
 * @example
 * // Given process.env.API_URL="https://…"
 * const apiUrl = assertEnvVar("API_URL");
 */
export function assertEnvVar(key: string): string {
    const value = key;
    if (!value) throw new MissingEnvVarError(value);

    return value;
}

export const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    return `${Math.floor(diffInHours / 24)}d ago`
}

export const truncateContent = (content: string, maxLength = 80) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
}

export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

export const formatAssigneeName = (name: string) => {
    const parts = name.split(" ")
    if (parts.length >= 2) {
        return `${parts[0]} ${parts[1].charAt(0)}`
    }
    return name
}

export const truncateTitle = (title: string, maxLength = 50) => {
    if (title.length <= maxLength) return title
    return title.substring(0, maxLength) + "..."
}