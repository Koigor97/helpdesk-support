"use client";

import React, {useState, useActionState, useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import Link from "next/link";

import {ResetPasswordState, resetPasswordAction} from "@/components/auth/authActions/resetPasswordAction";
import {verifyResetTokenAction} from "@/components/auth/authActions/verifyResetTokenAction";

import { Eye, EyeOff, Loader2, XCircle} from "lucide-react";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {RiCheckboxCircleLine, RiCloseCircleLine} from "@remixicon/react";
import {urlPath} from "@/lib/globalHelpers";



const initialState: ResetPasswordState = {}


export default function ResetPasswordForm(
    { tenant }: { tenant: string }
) {

    const email = useSearchParams()?.get("email") || ""
    const resetHashToken = useSearchParams()?.get("hashed_reset_token") || ""

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [checking, setChecking] = useState(true);
    const [isValidToken, setIsValidToken] = useState(false);
    const [verifyMsg, setVerifyMsg] = useState<string | null>(null)
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [confirmTouched, setConfirmTouched] = useState(false);

    const [resetState, resetFormAction, resetIsPending] = useActionState(resetPasswordAction, initialState)


    // Verifies the hashed token. On success supabase sets a
    // a short-lived recovery session cookie to update user password
    useEffect(() => {
        let cancelled = false;

        (async () => {
            if (!email || !resetHashToken) {
                if (!cancelled) {
                    setIsValidToken(false);
                    setVerifyMsg("Missing or invalid reset link.");
                    setChecking(false);
                }
                return;
            }

            const res = await verifyResetTokenAction(email, resetHashToken);
            if (!cancelled) {
                setIsValidToken(res.valid!);
                setVerifyMsg(res.valid ? null : res.message ?? "Invalid or expired reset link.");
                setChecking(false);
            }
        })();

        return () => { cancelled = true; };
    }, [email, resetHashToken]);


    const debouncedConfirmPassword = useDebouncedCallback((value: string) => {
        setConfirmTouched(true)
        // Only consider valid if newPassword meets length + exact match
        setPasswordMatch(newPassword.length >= 8 && newPassword === value);
    }, 1000)

    // Loading state while verifying token
    if (checking) {
        return (
            <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying reset link…
            </div>
        );
    }


    // Invalid or missing token
    if (!isValidToken) {
        return (
            <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                    <RiCloseCircleLine className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-semibold">Invalid reset link</h3>
                    <p className="text-sm text-muted-foreground">
                        {verifyMsg ?? "This password reset link is invalid or has expired."}
                    </p>
                </div>
                <Alert variant="destructive">
                    <AlertDescription>Please request a new password reset link to continue.</AlertDescription>
                </Alert>
                <div className="space-y-2">
                    <Button asChild className="w-full">
                        <Link href={urlPath(`/forgot-password`, tenant)}>Request new reset link</Link>
                    </Button>
                    <div className="text-center">
                        <Link href={urlPath(`/?magicLink=no`,tenant)} className="text-sm text-muted-foreground hover:text-foreground">
                            Back to login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (resetState.success) {
        return (
            <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                    <RiCheckboxCircleLine className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-semibold">Password reset successful</h3>
                    <p className="text-sm text-muted-foreground">
                        Your password has been successfully updated. You will be redirected to the login page shortly.
                    </p>
                </div>
                <Button asChild className="w-full">
                    <Link href={urlPath(`/?magicLink=no`,tenant)}>Continue to login</Link>
                </Button>
            </div>
        )
    } else if (resetState.error) {

        return (
            <Alert variant={resetState.success ? "default" : "destructive"}>
                <AlertDescription>{resetState.message}</AlertDescription>
            </Alert>
        )
    }


    // Password reset form
    return (
        <form action={resetFormAction} className="space-y-4">
            <div className="text-sm text-muted-foreground mb-4">
                Resetting password for: <strong>{email}</strong>
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">New password</Label>
                <div className="relative">
                    <Input
                        id="password"
                        name="newPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.currentTarget.value)}
                        required
                        disabled={resetIsPending}
                        minLength={8}
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={resetIsPending}
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm new password</Label>
                <div className="relative">
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => {
                            const val = e.currentTarget.value;
                            setConfirmPassword(val)
                            debouncedConfirmPassword(val)
                        }}
                        required
                        disabled={resetIsPending}
                        minLength={8}
                    />
                    {confirmTouched && !passwordMatch && (
                        <p className="text-xs text-red-500 mt-1">Passwords don’t match or are too short.</p>
                    )}
                    {confirmTouched && passwordMatch && (
                        <p className="text-xs text-green-600 mt-1">Passwords match ✓</p>
                    )}
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        disabled={resetIsPending}
                    >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {resetState.success && (
                <Alert variant={resetState.error ? "destructive" : "default"}>
                    <AlertDescription>{resetState.message}</AlertDescription>
                </Alert>
            )}

            <Button type="submit" className="w-full" disabled={resetIsPending || !passwordMatch}>
                {resetIsPending ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Updating password...
                    </>
                ) : (
                    "Update password"
                )}
            </Button>

            <div className="text-center">
                <Link href={urlPath(`/?magicLink=no`,tenant)} className="text-sm text-muted-foreground hover:text-foreground">
                    Back to login
                </Link>
            </div>
        </form>
    )
}