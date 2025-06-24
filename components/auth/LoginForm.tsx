"use client";

import Link from "next/link";
import React, {useActionState, useState, useEffect} from "react";
import {motion, useAnimation, Variants} from "framer-motion";

import {WandSparkles} from "lucide-react"
import {loginSchema} from "@/utils/zodSchemas";
import {loginAction, LoginState} from "@/lib/actions/login";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {OAuthIconProvider} from "@/components/common/OAuth-Icons";


/**
 * Initial “shape” of the action’s return data.
 * @type {LoginState}
 */
const initialState: LoginState = {
    error: {
        email: [],
        password: []
    }
}


/**
 * LoginForm
 *
 * Renders the email/password login form.
 * Uses `useActionState` to tie into our server action,
 * and mirrors any returned errors into local state so
 * we can trigger our shake animation and inline error messages.
 */
const LoginForm = () => {

    // ──────────────────────────────────────────────────────────────────────────
    // Controlled inputs
    // ──────────────────────────────────────────────────────────────────────────

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ──────────────────────────────────────────────────────────────────────────
    // Local mirror of server errors for instant UX feedback + shake
    // ──────────────────────────────────────────────────────────────────────────

    const [fieldErrors, setFieldErrors] = useState<{email: string[], password: string[]}>({email: [], password: []});

    // ──────────────────────────────────────────────────────────────────────────
    // tie into our action
    // ──────────────────────────────────────────────────────────────────────────

    // state holds the last return value of loginAction
    // formAction is the `<form action={...}>` handler
    // pending tells us if the action is in flight
    // @ts-ignore
    const [state, formAction, pending] = useActionState<LoginState>(loginAction, initialState);

    // ──────────────────────────────────────────────────────────────────────────
    // sync server ↔ local error state
    // ──────────────────────────────────────────────────────────────────────────

    useEffect(() => {
        if (state.error) {
            setFieldErrors({
                email: state.error.email || [],
                password: state.error.password || []
            })
        }
    }, [state.error]);

    // ──────────────────────────────────────────────────────────────────────────
    // clear a single field’s error on change
    // ──────────────────────────────────────────────────────────────────────────

    /**
     * Handle typing in email input.
     * Clears any existing email errors to re-enable the form.
     */
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (fieldErrors.email.length) {
            setFieldErrors(fe => ({...fe, email: []}))
        }
    }

    /**
     * Handle typing in password input.
     * Clears any existing password errors to re-enable the form.
     */
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (fieldErrors.password.length) {
            setFieldErrors(fe => ({...fe, password: []}))
        }
    }

    // ──────────────────────────────────────────────────────────────────────────
    // Render
    // ──────────────────────────────────────────────────────────────────────────

    return (
        <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
            {/* header */}
          <div className="grid gap-2 text-center">
            <h1 className="h1-bold">Welcome back 👋</h1>
            <p className="w-sm body-regular">
              Sign in to manage support tickets, collaborate with your team, and help customers faster.
            </p>
          </div>

            {/* form */}
          <form
              action={formAction}
              className="grid gap-4"
          >
              {/** ─── EMAIL FIELD ─────────────────────────────────────────── */}
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <motion.div
                    className="w-full"
                    animate={fieldErrors.email.length > 0 ? {x: [0, -8, 8, -8, 8, 0]}: {x: 0}}
                    transition={{ duration: 0.4 }}
                >
                    <Input
                        id="email"
                        type="email"
                        placeholder="pineapple@example.com"
                        // required
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={pending}
                        aria-describedby="emailHelp"
                        aria-invalid={fieldErrors.email.length > 0}
                        className="h-10"
                    />
                </motion.div>

                {fieldErrors.email.length > 0 && (
                    <p id="emailHelp" className="text-red-500 small-regular mt-1">
                        {fieldErrors.email.join(', ')}
                    </p>
                )}
            </div>

              {/** ─── PASSWORD FIELD ────────────────────────────────────── */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
                <motion.div
                    className="w-full"
                    animate={fieldErrors.password.length > 0 ? {x: [0, -8, 8, -8, 8, 0]}: {x: 0}}
                    transition={{ duration: 0.4 }}
                >
                    <Input
                        id="password"
                        type="password"
                        // required
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        disabled={pending}
                        aria-describedby="passwordHelp"
                        aria-invalid={fieldErrors.password.length > 0}
                        className="h-10"
                    />
                </motion.div>
                {fieldErrors.password.length > 0 && (
                    <p id="passwordHelp" className="text-red-500 small-regular mt-1">
                        {fieldErrors.password.join(', ')}
                    </p>
                )}
            </div>

              {/** ─── SUBMIT BUTTON ─────────────────────────────────────── */}
            <Button type="submit" className="w-full cursor-pointer h-10">
              Continue
            </Button>
            <div className=" flex justify-center text-xs">
                <span>or login with</span>
            </div>

              {/** ─── SOCIAL BUTTONS ───────────────────────────────────── */}
            <div className='flex gap-4 '>
                <Button variant={'outline'} size={'lg'} className='border-gray-500 border-1 flex-1 cursor-pointer hover:bg-accent hover:text-accent-foreground'>
                    <OAuthIconProvider type='google'/>
                    <span className=''>Google</span>
                </Button>

                <Button variant={'outline'} size={'lg'} className='border-gray-500 border-1  flex-1 cursor-pointer hover:bg-accent hover:text-accent-foreground'>
                    <WandSparkles className="text-primary" fill="green"/>
                    <span className=''>Magic Link</span>
                </Button>
            </div>
          </form>

            {/** ─── SIGNUP LINK ───────────────────────────────────────── */}
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    )
}


export default LoginForm;
