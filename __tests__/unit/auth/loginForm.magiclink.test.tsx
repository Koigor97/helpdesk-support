import '@testing-library/jest-dom';
import {render ,screen, fireEvent, waitFor} from "@testing-library/react";
import {mockSupabaseAdminClient, mockSupabaseBrowserClient} from "@/__tests__/mocks/supabaseClient.mock";
import LoginForm from "@/components/auth/loginForm";

// Mock next/router for redirect testing
const mockPush = jest.fn();
const mockReplace = jest.fn();

jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: mockPush,
        replace: mockReplace,
    })
}))

// Mock Supabase browser client
jest.mock("@/lib/supabase-clients/browserClient", () => ({
    supabaseBrowserClient: () => mockSupabaseBrowserClient
}))

// Mock Supabase admin client
jest.mock("@/lib/supabase-clients/adminClient", () => ({
    sbAdminClient: () => mockSupabaseAdminClient
}))

// Reusable test email
const TEST_EMAIL = "bongaborbor@example.com"

// Describing the Magic Link test suite
describe("LoginForm (Magic Link Flow)", () => {
    beforeEach(() => jest.clearAllMocks());

    it("renders email input and magic link submit button", () => {
        render(<LoginForm
            wantsPasswordLogin={false}
            tenant="cookerybaffa"
            tenantName="Cookery Baffa" />
        );

        // Ensure email input exists
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        // Ensure correct button label
        expect(screen.getByRole("button", {name: /send magic link/i})).toBeInTheDocument();
    });

    it("submit email and triggers generateLink call", async () => {
        // Mock success return from supabase
        mockSupabaseAdminClient.auth.admin.generateLink.mockResolvedValueOnce({
            data: {
                user: {
                    app_metadata: {tenants: "cookerybaffa"},
                    id: "123"
                },
                properties: {
                    email_otp: "654321",
                    verification_type: "magiclink"
                }
            },
            error: null
        });

        render(
            <LoginForm
                wantsPasswordLogin={false}
                tenant={"cookerybaffa"}
                tenantName={"Cookery Baffa"}
            />
        );

        // Simulate typing
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: {value: TEST_EMAIL},
        });

        // Submit the form
        fireEvent.click(screen.getByRole("button", {name: /send magic link/i}));

        // Wait for async effect
        await waitFor(() => {
            expect(mockSupabaseAdminClient.auth.admin.generateLink)
                .toHaveBeenCalledWith({
                    email: TEST_EMAIL,
                    type: "magiclink"
                });
        });
    });

    it("calls Supabase generateLink and handles error gracefully", async () => {
        mockSupabaseAdminClient.auth.admin.generateLink.mockResolvedValueOnce({
            data: null,
            error: {message: "user not found"}
        });

        render(
            <LoginForm
                wantsPasswordLogin={false}
                tenant={"cookerybaffa"}
                tenantName={"Cookery Baffa"}
            />
        );

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: {value: TEST_EMAIL},
        });

        fireEvent.click(screen.getByRole("button", {name: /send magic link/i}));

        await waitFor(() => {
            expect(mockSupabaseAdminClient.auth.admin.generateLink).toHaveBeenCalledWith({
                email: TEST_EMAIL,
                type: "magiclink",
            });
        });
    });
});