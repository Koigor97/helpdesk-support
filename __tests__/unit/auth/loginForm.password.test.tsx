import '@testing-library/jest-dom';
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import {mockSupabaseBrowserClient} from "@/__tests__/mocks/supabaseClient.mock";
import LoginForm from "@/components/auth/loginForm";
import React from "react";

// Mock next/router
const mockPush = jest.fn();
const mockReplace = jest.fn();

jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: mockPush,
        replace: mockReplace
    })
}));

// Mock the browser client
jest.mock("@/lib/supabase-clients/browserClient", () => ({
    supabaseBrowserClient: () => mockSupabaseBrowserClient
}));

// --- Stub useActionState so formAction is safe in Jest ---
const realReact = jest.requireActual("react");

jest.mock("@/components/auth/authActions/loginAction", () => ({
    loginAction: jest.fn().mockImplementation(async (_prevState, formData) => {
        const email = String(formData.get("email") || "");
        const password = String(formData.get("password") || "");

        // Simulate schema validation
        if (password.length < 8) {
            return {
                success: false,
                message: "Password must be at least 8 characters",
                errors: { password: ["Password must be at least 8 characters"] },
            };
        }

        // Continue with Supabase mock
        const res = await mockSupabaseBrowserClient.auth.signInWithPassword({
            email,
            password,
        });

        if (res?.error) {
            return {
                success: false,
                message: "Invalid email or password",
                errors: { _form: ["Invalid email or password"] },
            };
        }

        return { success: true, message: "Signed in", errors: {} };
    }),
}));

const TEST_EMAIL = "kotobabeh@example.com";
const TEST_PASSWORD = "rwant1_tapalapa_braid";

describe("LoginForm (Password Login Flow)", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders email with password inputs and Sign in button", () => {
        render(
            <LoginForm
                wantsPasswordLogin={true}
                tenant="fullashop"
                tenantName="FullahShop.Inc"
            />
        );
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
    });

    it("call the signInWithPassword with correct credentials on valid submit", async () => {
        mockSupabaseBrowserClient.auth.signInWithPassword.mockResolvedValueOnce({
            data: {
                user: {
                    app_metadata: { tenants: ["fullahshop"] },
                    id: "238",
                }
            },
            error: null,
        });

        render(
            <LoginForm
                wantsPasswordLogin={true}
                tenant="fullahshop"
                tenantName="FullahShop.Inc"
            />
        );

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: TEST_EMAIL },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: TEST_PASSWORD },
        });
        fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

        await waitFor(() => {
            expect(mockSupabaseBrowserClient.auth.signInWithPassword).toHaveBeenCalledWith({
                email: TEST_EMAIL,
                password: TEST_PASSWORD,
            });
        });

    });

    it("calls signInWithPassword but receives error when credentials are invalid", async () => {
        mockSupabaseBrowserClient.auth.signInWithPassword.mockResolvedValueOnce({
            data: null,
            error: { message: "Invalid login credentials" },
        });

        render(
            <LoginForm
                wantsPasswordLogin={true}
                tenant="fullahshop"
                tenantName="FullahShop.Inc"
            />
        );

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: TEST_EMAIL },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: TEST_PASSWORD },
        });
        fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

        await waitFor(() => {
            expect(
                mockSupabaseBrowserClient.auth.signInWithPassword
            ).toHaveBeenCalledWith({
                email: TEST_EMAIL,
                password: TEST_PASSWORD,
            });
        });
    });

    it("does not call signInWithPassword if password is too short", async () => {
        render(
            <LoginForm
                wantsPasswordLogin={true}
                tenant="fullahshop"
                tenantName="FullahShop.Inc"
            />
        );

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: TEST_EMAIL },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: "short" }, // invalid password
        });
        fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

        await waitFor(() => {
            expect(
                mockSupabaseBrowserClient.auth.signInWithPassword
            ).not.toHaveBeenCalled();
        });
    });
});