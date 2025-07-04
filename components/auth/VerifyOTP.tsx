"use client";

import Link from "next/link";
import React, {useActionState, useState, useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {motion} from "framer-motion";

import { Button } from "@/components/ui/button";
import {InputOTP, InputOTPSlot, InputOTPSeparator, InputOTPGroup} from "@/components/ui/input-otp";
import {AlertTitle, Alert, AlertDescription} from "@/components/ui/alert";
import {RiErrorWarningFill} from "@remixicon/react";

// Commenting for UI creation
import {verifyOTPAction, resendOTPAction} from "@/lib/actions/verify-otp";
import {type VerifyOTPState, type ResendOTPState} from "@/utils/types";


const initialVerifyState: VerifyOTPState = {
    errors: {otpCode: []}
}

const initialResendState: ResendOTPState = {
    errors: {
        email: [],
    },
}

interface VerifyOTPProps {
    email?: string
}

/**
 * LoginForm
 *
 * Renders the email/password login form.
 * Uses `useActionState` to tie into our server action,
 * and mirrors any returned errors into local state so
 * we can trigger our shake animation and inline error messages.
 */
const VerifyOTP = ({email: propEmail} : VerifyOTPProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    // Get email from props, search params, or default
    const email = propEmail || searchParams.get("email") || ""

    // Commenting for UI creation
    // Redirect to login if no email provided
    // useEffect(() => {
    //     if (!email) {
    //         router.push("/?magicLink=yes")
    //     }
    // }, [email, router])


    // Controlled inputs
    const [otp, setOtp] = useState("")
    const [resendCooldown, setResendCooldown] = useState(0)
    const [canResend, setCanResend] = useState(true)

    // Local error state
    const [fieldErrors, setFieldErrors] = useState<{
        otpCode: string[]
        _form: string[]
    }>({
        otpCode: [],
        _form: [],
    })


    // Server action states
    // @ts-ignore
    const [verifyState, verifyAction, verifyPending] = useActionState<VerifyOTPState>(verifyOTPAction, {
        ...initialVerifyState,
        email,
    })

    // @ts-ignore
    const [resendState, resendAction, resendPending] = useActionState<ResendOTPState>(resendOTPAction, initialResendState)


    // Sync server ↔ local error state for verify action
    useEffect(() => {
        if (verifyState.errors) {
            setFieldErrors({
                otpCode: verifyState.errors.otpCode || [],
                _form: verifyState.errors._form || [],
            })
        }
    }, [verifyState.errors])


    // Commenting for UI creation
    // Handle successful verification
    // useEffect(() => {
    //     if (verifyState.success) {
    //         // Show success message briefly before redirect
    //         const timer = setTimeout(() => {
    //             router.push("/dashboard")
    //         }, 1500)
    //         return () => clearTimeout(timer)
    //     }
    // }, [verifyState.success, router])


    // Enhanced resend cooldown with proper timer management
    useEffect(() => {
        if (resendState.success) {
            setResendCooldown(60) // 60 second cooldown
            setCanResend(false)

            const timer = setInterval(() => {
                setResendCooldown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer)
                        setCanResend(true)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [resendState.success])


    // Clear field errors on input change
    const handleOtpChange = (value: string) => {
        setOtp(value)
        if (fieldErrors.otpCode.length) {
            setFieldErrors((fe) => ({ ...fe, otpCode: [] }))
        }
    }

    // Handle resend with proper form data
    const handleResend = () => {
        if (!canResend || resendPending) return

        const formData = new FormData()
        formData.append("email", email)
        // @ts-ignore
        resendAction(formData)
    }


    // Format countdown display
    const formatCountdown = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return mins > 0 ? `${mins}:${secs.toString().padStart(2, "0")}` : `${secs}s`
    }
    // ──────────────────────────────────────────────────────────────────────────
    // Render
    // ──────────────────────────────────────────────────────────────────────────

    return (
        <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
                {/* header */}
                <div className="grid gap-2 text-center">
                    <h1 className="h2-bold">Enter the Verification Code</h1>
                    <p className="w-sm body-regular">
                        We sent a verification code to <span className="body-semibold">{email || "dummy@email.com"}</span>
                    </p>
                </div>

                {/* Success/Error Messages */}
                {verifyState.success && (
                    <Alert className="border-green-200 bg-green-50">
                        <AlertDescription className="text-green-800">
                            {verifyState.message} Redirecting to dashboard...
                        </AlertDescription>
                    </Alert>
                )}

                {resendState.success && (
                    <Alert className="border-blue-200 bg-blue-50">
                        <AlertDescription className="text-blue-800">{resendState.message}</AlertDescription>
                    </Alert>
                )}

                {fieldErrors._form.length > 0 && (
                    <Alert variant="destructive">
                        <RiErrorWarningFill />
                        <AlertTitle>Please enter a proper code</AlertTitle>
                        <AlertDescription>{fieldErrors._form.join(", ")}</AlertDescription>
                    </Alert>
                )}

                {resendState.errors?._form && resendState.errors._form.length > 0 && (
                    <Alert variant="destructive">
                        <RiErrorWarningFill />
                        <AlertTitle>Unable to resend the code</AlertTitle>
                        <AlertDescription>{resendState.errors._form.join(", ")}</AlertDescription>
                    </Alert>
                )}

                {/* form */}
                <form
                    action={verifyAction}
                    className="grid gap-4 justify-center"
                >

                    {/*Hidden email field*/}
                    <input type="hidden" name="email" value={email}/>

                    {/** ─── EMAIL FIELD ─────────────────────────────────────────── */}
                    <div className="grid justify-center">
                        <motion.div
                            className="w-full"
                            animate={fieldErrors.otpCode.length > 0 ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <InputOTP
                                id="otp"
                                name="otpCode"
                                value={otp}
                                onChange={handleOtpChange}
                                maxLength={6}
                                disabled={verifyPending}
                                aria-describedby="one-time-password-code"
                                aria-invalid={fieldErrors.otpCode.length > 0}
                                className="h-10 font-bold"
                            >
                                <InputOTPGroup className="font-bold">
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup className="font-bold">
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </motion.div>

                        {fieldErrors.otpCode.length > 0 && (
                            <p id="otpHelp" className="text-sm text-red-500 text-center">
                                {fieldErrors.otpCode.join(", ")}
                            </p>
                        )}
                    </div>

                    {/** ─── SUBMIT BUTTON ─────────────────────────────────────── */}
                    <Button type="submit" className="w-full cursor-pointer h-10" disabled={
                        verifyPending || otp.length !== 6}>
                        {verifyPending ? "Verifying..." : "Verify"}
                    </Button>
                </form>

                {/** ─── SIGNUP ACTION LINK ───────────────────────────────────────── */}
                <div>
                    <div className=" text-center text-sm">
                        Didn&apos;t get the code?{" "}
                        <Button
                            variant="link"
                            className={`p-0 h-auto font-normal underline ${
                                !canResend || resendPending ? "opacity-50 cursor-not-allowed" : "hover:text-primary"
                            }`}
                            onClick={handleResend}
                            disabled={!canResend || resendPending}
                        >
                            {resendPending ? (
                                "Sending..."
                            ) : resendCooldown > 0 ? (
                                <>Resend code ({formatCountdown(resendCooldown)})</>
                            ) : (
                                "Resend code"
                            )}
                        </Button>
                    </div>
                    <div className="text-center text-sm mt-2">
                        Wrong email? {" "}
                        <Link href="/?magicLink=yes" className='underline hover:'>Change email</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VerifyOTP;
