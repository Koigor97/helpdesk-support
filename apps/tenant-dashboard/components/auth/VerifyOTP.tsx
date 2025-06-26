"use client";

import Link from "next/link";
import React, {useActionState, useState} from "react";
import {motion} from "framer-motion";

import { Button } from "@workspace/ui/components/button";
import {InputOTP, InputOTPSlot, InputOTPSeparator, InputOTPGroup} from "@workspace/ui/components/input-otp";
import {verifyotpcode, VerifyState} from "@/lib/actions/login";
import {verifyotp} from "@/utils/zodSchemas";




const initialState: VerifyState = {
    error: {otp: []}
}

/**
 * LoginForm
 *
 * Renders the email/password login form.
 * Uses `useActionState` to tie into our server action,
 * and mirrors any returned errors into local state so
 * we can trigger our shake animation and inline error messages.
 */
const VerifyOTP = () => {

    // ──────────────────────────────────────────────────────────────────────────
    // Controlled inputs
    // ──────────────────────────────────────────────────────────────────────────

    const [otp, setOtp] = useState("");
    // @ts-ignore
    const [state, formAction] = useActionState<VerifyState>(verifyotpcode, initialState)


    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
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
                        We sent a verification code to <address className="body-semibold">john@yourcompany.com</address>
                    </p>
                </div>

                {/* form */}
                <form
                    action={formAction}
                    className="grid gap-4 justify-center"
                >
                    {/** ─── EMAIL FIELD ─────────────────────────────────────────── */}
                    <div className="grid justify-center">
                        <motion.div
                            className="w-full"
                        >
                            <InputOTP
                                id="otp"
                                name="otpCode"
                                aria-describedby="one-time-password-code"
                                className="h-10 font-bold"
                                maxLength={6}
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
                    </div>



                    {/** ─── SUBMIT BUTTON ─────────────────────────────────────── */}
                    <Button type="submit" className="w-full cursor-pointer h-10">
                        Verify
                    </Button>

                </form>

                {/** ─── SIGNUP LINK ───────────────────────────────────────── */}
                <div className=" text-center text-sm">
                    Didn&apos;t get the code?{" "}
                    <Link href="#" className="underline hover:">
                        Resend code
                    </Link>
                </div>
                <div className="text-center text-sm -mt-3">
                    Wrong email? {" "}
                    <Link href="/?magicLink=yes" className='underline hover:'>Change email</Link>
                </div>
            </div>
        </div>
    )
}


export default VerifyOTP;
