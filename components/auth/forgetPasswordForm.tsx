"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import {requestPasswordResetEmail} from "@/components/auth/authActions/forgotPasswordAction";


export function ForgotPasswordForm() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage(null)

        try {
            const result = await requestPasswordResetEmail(email)

            if (result.success) {
                setIsSubmitted(true)
                setMessage({ type: "success", text: result.message })
            } else {
                setMessage({ type: "error", text: result.message })
            }
        } catch (error) {
            setMessage({ type: "error", text: "An unexpected error occurred. Please try again." })
        } finally {
            setIsLoading(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-center space-y-2">
                    <h3 className="font-semibold">Check your email</h3>
                    <p className="text-sm text-muted-foreground">
                        We've sent a password reset link to <strong>{email}</strong>
                    </p>
                </div>
                <Alert>
                    <AlertDescription>
                        Didn't receive the email? Check your spam folder or try again with a different email address.
                    </AlertDescription>
                </Alert>
                <div className="flex items-center justify-center">
                    <Link href="/?magicLink=no" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back to login
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                />
            </div>

            {message && (
                <Alert variant={message.type === "error" ? "destructive" : "default"}>
                    <AlertDescription>{message.text}</AlertDescription>
                </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading || !email.trim()}>
                {isLoading ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending reset link...
                    </>
                ) : (
                    "Send reset link"
                )}
            </Button>

            <div className="text-center">
                <Link href="/?magicLink=no" className="text-sm text-muted-foreground hover:text-foreground">
                    Remember your password? Sign in
                </Link>
            </div>
        </form>
    )
}
