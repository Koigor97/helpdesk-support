import VerifyOTP from "@/components/auth/verifyOTP";


type VerifyOTPProps = {
    params: Promise<{ tenant: string }>;
    searchParams: { email?: string };
}


async function VerifyOtpPage({ params}: VerifyOTPProps) {
    const { tenant } = await params;

    return (
        <VerifyOTP tenant={tenant} />
    )
}

export default VerifyOtpPage
