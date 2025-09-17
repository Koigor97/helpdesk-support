/**
 * Supabase client mock for unit tests.
 * Mocks only the methods used during authentication
 * This mock normal user (anon) privileges
 */
export const mockSupabaseClient = {
    auth: {
        signInWithPassword: jest.fn(),
        signOut: jest.fn(),
    }
}

/**
 * Supabase client mock for unit tests.
 * Mocks only the methods used during authentication
 * This mock admin user (service_role) privileges
 */
export const mockSupabaseAdminClient = {
    auth: {
        admin: {
            generateLink: jest.fn(),
            deleteUser: jest.fn(),
        }
    }
}