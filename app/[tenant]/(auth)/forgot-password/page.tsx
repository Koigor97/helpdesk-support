import {ForgotPasswordForm} from "@/components/auth/forgetPasswordForm";

export default function ForgotPasswordPage() {
    return (
        <div
            className="min-h-screen grid  justify-center
            p-4"
        >
            <div className="w-full max-w-md flex flex-col gap-10 text-center">
                <div>
                    <h1 className="h2-bold mb-2">
                        Reset your password
                    </h1>
                    <p className="body-regular">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                </div>
                <ForgotPasswordForm />
            </div>

        </div>
    )
}