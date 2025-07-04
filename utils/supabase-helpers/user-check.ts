import {cookiesClient} from "@/lib/supabase-clients/cookiesClient";

export async function checkUserExists(email: string): Promise<{ exists: boolean; error?: string }> {
    try {
        // First try to check via auth.users (if you have RLS policies allowing this)
        const supabaseSSR = await cookiesClient()
        const { data, error } = await supabaseSSR.from("auth.users").select("id").eq("email", email.toLowerCase()).single()

        if (error && error.code === "PGRST116") {
            // User not found
            return { exists: false }
        }

        if (error) {
            // Other error occurred
            return { exists: false, error: error.message }
        }

        return { exists: true }
    } catch (error) {
        console.error("Error checking user existence:", error)
        return { exists: false, error: "Failed to check user existence" }
    }
}

// Alternative approach using profiles table if you have one
export async function checkUserExistsViaProfiles(email: string): Promise<{ exists: boolean; error?: string }> {
    try {
        const supabaseSSR = await cookiesClient()
        const { data, error } = await supabaseSSR.from("profiles").select("id").eq("email", email.toLowerCase()).single()

        if (error && error.code === "PGRST116") {
            return { exists: false }
        }

        if (error) {
            return { exists: false, error: error.message }
        }

        return { exists: true }
    } catch (error) {
        console.error("Error checking user existence via profiles:", error)
        return { exists: false, error: "Failed to check user existence" }
    }
}
