
import {Suspense} from "react";
import ResetPasswordForm from "@/components/auth/resetPasswordForm";
import {Loader2} from "lucide-react";

function LoadingFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-md flex items-center">
                <Loader2 className="w-6 h-6 animate-spin" />
            </div>
        </div>
    )
}

type ResetPagePageProps = {
    params: Promise<{ tenant: string }>;
};

export default async function ResetPasswordPage({params}: ResetPagePageProps) {
    const {tenant} = await params;

    return (
        <div className="min-h-screen flex flex-col items-center bg-background p-4">
            <div className="w-full max-w-md mb-14">
                <div className="text-center flex flex-col gap-2">
                    <h1 className="h2-semibold">Set new password</h1>
                    <p>Enter your new password below to complete the reset process.</p>
                </div>
            </div>
            <div>
                <Suspense fallback={<LoadingFallback />}>
                    <ResetPasswordForm tenant={tenant} />
                </Suspense>
            </div>
        </div>
    )
}