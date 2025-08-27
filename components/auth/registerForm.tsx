"use client";

import React, { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import {motion} from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert";

import {
    RiErrorWarningFill,
    RiEyeFill,
    RiEyeOffFill
} from "@remixicon/react";

import {signupAction} from "@/components/auth/authActions/signupAction";
import {SignupState} from "@/components/auth/authType/authTypes";
import {urlPath} from "@/lib/globalHelpers";


type RegisterFormProps = {
    tenant: string;
    tenantName: string;
}

const initialSignupState: SignupState = {
    success: false,
    errors: {},
}


export default function RegisterForm({ tenant, tenantName }: RegisterFormProps) {

    // controlled inputs
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPwd, setShowPwd] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // action state
    const [state, formAction, pending] = useActionState<SignupState, FormData>(
        signupAction,
        initialSignupState
    );

    // local mirror for shake + inline errors
    const [fieldErrors, setFieldErrors] = useState<{
        email: string[];
        fullName: string[];
        password: string[];
        confirmPassword: string[];
        _form: string[];
    }>({
        email: [],
        fullName: [],
        password: [],
        confirmPassword: [],
        _form: [],
    });

    // sync errors down whenever the action returns
    useEffect(() => {
        setFieldErrors({
            email: state.errors?.email ?? [],
            fullName: state.errors?.fullName ?? [],
            password: state.errors?.password ?? [],
            confirmPassword: state.errors?.confirmPassword ?? [],
            _form: state.errors?._form ?? [],
        });
    }, [state.errors]);

    // helpers to clear a field’s errors when user edits
    const clear = (k: keyof typeof fieldErrors) =>
        setFieldErrors((fe) => (fe[k].length ? { ...fe, [k]: [] } : fe));

    return (
        <div className="grid items-center justify-center py-12">
            <div className="mx-auto grid lg:w-[350px] gap-6 px-2">
                {/* header */}
                <div className="grid gap-2 text-center">
                    <h1 className="h2-bold lg:h1-bold">Create your account</h1>
                    <p className="lg:w-sm body-regular">
                        Join <span className="text-secondary dark:text-primary font-black">{tenantName}</span> to manage support tickets
                        with your team.
                    </p>
                </div>

                {/* Success / Error */}
                {state.success && state.message && (
                    <Alert className="border-green-200 bg-green-50">
                        <AlertDescription className="text-green-800">
                            {state.message}
                        </AlertDescription>
                    </Alert>
                )}

                {fieldErrors._form.length > 0 && (
                    <Alert className="border-2 border-red-400 text-red-400">
                        <RiErrorWarningFill color="red" />
                        <AlertTitle>Signup Error</AlertTitle>
                        <AlertDescription className="text-red-400">
                            {fieldErrors._form.join(", ")}
                        </AlertDescription>
                    </Alert>
                )}

                {/* form */}
                <form action={formAction} className="grid gap-4 px-2 lg:px-0">
                    {/* Full name */}
                    <div className="grid gap-2">
                        <Label htmlFor="fullName">Full name</Label>
                        <motion.div
                            className="w-full"
                            animate={fieldErrors.fullName.length ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Input
                                id="fullName"
                                name="fullName"
                                placeholder="Ada Lovelace"
                                required
                                value={fullName}
                                onChange={(e) => { setFullName(e.target.value); clear("fullName"); }}
                                disabled={pending}
                                aria-describedby="fullNameHelp"
                                aria-invalid={fieldErrors.fullName.length > 0}
                                className="h-9 lg:h-10"
                            />
                        </motion.div>
                        {fieldErrors.fullName.length > 0 && (
                            <p id="fullNameHelp" className="text-red-500 small-regular mt-1">
                                {fieldErrors.fullName.join(", ")}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <motion.div
                            className="w-full"
                            animate={fieldErrors.email.length ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); clear("email"); }}
                                disabled={pending}
                                aria-describedby="emailHelp"
                                aria-invalid={fieldErrors.email.length > 0}
                                className="h-9 lg:h-10"
                            />
                        </motion.div>
                        {fieldErrors.email.length > 0 && (
                            <p id="emailHelp" className="text-red-500 small-regular mt-1">
                                {fieldErrors.email.join(", ")}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <motion.div
                            className="w-full relative"
                            animate={fieldErrors.password.length ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Input
                                id="password"
                                name="password"
                                type={showPwd ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); clear("password"); }}
                                disabled={pending}
                                aria-describedby="passwordHelp"
                                aria-invalid={fieldErrors.password.length > 0}
                                className="h-9 pr-10 lg:h-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPwd((s) => !s)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                disabled={pending}
                            >
                                {showPwd ? <RiEyeOffFill className="h-4 w-4" /> : <RiEyeFill className="h-4 w-4" />}
                            </button>
                        </motion.div>
                        {fieldErrors.password.length > 0 && (
                            <p id="passwordHelp" className="text-red-500 small-regular mt-1">
                                {fieldErrors.password.join(", ")}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="grid gap-2">
                        <Label htmlFor="confirmPassword">Confirm password</Label>
                        <motion.div
                            className="w-full relative"
                            animate={fieldErrors.confirmPassword.length ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirm ? "text" : "password"}
                                required
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value); clear("confirmPassword"); }}
                                disabled={pending}
                                aria-describedby="confirmHelp"
                                aria-invalid={fieldErrors.confirmPassword.length > 0}
                                className="h-9 pr-10 lg:h-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm((s) => !s)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                disabled={pending}
                            >
                                {showConfirm ? <RiEyeOffFill className="h-4 w-4" /> : <RiEyeFill className="h-4 w-4" />}
                            </button>
                        </motion.div>
                        {fieldErrors.confirmPassword.length > 0 && (
                            <p id="confirmHelp" className="text-red-500 small-regular mt-1">
                                {fieldErrors.confirmPassword.join(", ")}
                            </p>
                        )}
                    </div>

                    {/* hidden tenant */}
                    <input type="hidden" name="tenant" value={tenant} />

                    {/* submit */}
                    <Button type="submit" disabled={pending} className="w-full h-9 lg:h-10">
                        {pending ? "Creating account..." : "Create account"}
                    </Button>

                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href={urlPath("/", tenant)} className="underline">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}