"use client";

import Link from "next/link";
import React, {useActionState, useState, useEffect} from "react";
import {motion} from "framer-motion";

import {loginAction} from "@/components/auth/authActions/loginAction";
import { type LoginState} from "@/components/auth/authType/authTypes";

import {WandSparkles} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

import {OAuthIconProvider} from "@/components/common/oauthIcons";
import {RiErrorWarningFill, RiEyeFill, RiEyeOffFill} from "@remixicon/react";
import {supabaseBrowserClient} from "@/lib/supabase-clients/browserClient";
import {notFound, useRouter} from "next/navigation";
import {urlPath} from "@/lib/globalHelpers";


/**
 * Initial “shape” of the action’s return data.
 * @type {LoginState}
 */
const initialState: LoginState = {
    errors: {
        email: [],
        password: []
    }
}

interface LoginFormProps {
    wantsPasswordLogin: boolean;
    tenant: string;
    tenantName: string;
}

/**
 * LoginForm
 *
 * Renders the email/password login form.
 * Uses `useActionState` to tie into our server action,
 * and mirrors any returned errors into local state so
 * we can trigger our shake animation and inline error messages.
 */
const LoginForm = ({wantsPasswordLogin, tenant, tenantName} : LoginFormProps) => {

    // ──────────────────────────────────────────────────────────────────────────
    // Controlled inputs
    // ──────────────────────────────────────────────────────────────────────────

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const supabase  = supabaseBrowserClient()
    const router = useRouter()

    // ──────────────────────────────────────────────────────────────────────────
    // Local mirror of server errors for instant UX feedback + shake
    // ──────────────────────────────────────────────────────────────────────────

    const [fieldErrors, setFieldErrors] = useState<{
        email: string[],
        password: string[],
        _form: string[]
    }>({
        email: [],
        password: [],
        _form: []
    });

    // ──────────────────────────────────────────────────────────────────────────
    // tie into our action
    // ──────────────────────────────────────────────────────────────────────────

    // state holds the last return value of loginAction
    // formAction is the `<form action={...}>` handler
    // pending tells us if the action is in flight
    // @ts-ignore
    const [state, formAction, isPending] = useActionState<LoginState>(loginAction, initialState);

    // ──────────────────────────────────────────────────────────────────────────
    // sync server ↔ local error state
    // ──────────────────────────────────────────────────────────────────────────

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN") {
                const canAccess = Array.isArray(session?.user?.app_metadata?.tenants)
                    && session!.user!.app_metadata!.tenants!.includes(tenant);

                if (canAccess) {
                    router.push(urlPath(`/tickets`, tenant));
                } else {
                    // sign out + send to not-found
                    supabase.auth.signOut().finally(() =>
                        router.replace(urlPath(`/not-found?tenant=${tenant}`, tenant)));
                }
            }
        });
        return () => subscription.unsubscribe();
        // deps: create once for this tenant
    }, [supabase, router, tenant]);


    useEffect(() => {
        const denied =
            state.errors?._form?.some(err => err.toLowerCase()
                .includes("permission denied."));

        if (!denied) return;

        const timer = setTimeout(() =>
            router.push(urlPath(`/not-found?tenant=${tenant}`, tenant)), 1500);
        return () => clearTimeout(timer);
    }, [state.errors, router, tenant]);

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

    // render

    // @ts-ignore
    return (
        <div className="grid items-center justify-center py-12">
            <div className="mx-auto grid lg:w-[350px] gap-6 px-2">
                {/* header */}
              <div className="grid gap-2 text-center">
                <h1 className="h2-bold lg:h1-bold">Welcome back 👋</h1>
                <p className="lg:w-sm body-regular">
                    Sign in to <span className="text-secondary dark:text-primary font-black">{tenantName} </span>
                    to manage support tickets, collaborate with your team, and help customers faster.
                </p>
              </div>

                {/*Success or Error Message*/}
                {state.success && (
                    <Alert className="border-green-200 bg-green-50">
                        <AlertDescription className='text-green-800'>
                            {state.message}
                        </AlertDescription>
                    </Alert>
                )}

                {fieldErrors._form.length > 0 && (
                    <Alert className="border-2 border-red-400 text-red-400">
                        <RiErrorWarningFill color="red" />
                        <AlertTitle>Authentication Error</AlertTitle>
                        <AlertDescription className="text-red-400">
                            {fieldErrors._form.join(", ")}
                        </AlertDescription>
                    </Alert>
                )}

                {/* form */}
              <form
                  action={formAction}
                  className="grid gap-4 px-2 lg:px-0"
              >
                  {/** ─── EMAIL FIELD ─────────────────────────────────────────── */}
                <div className="grid gap-2 ">
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
                            required
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            disabled={isPending}
                            aria-describedby="emailHelp"
                            aria-invalid={fieldErrors.email.length > 0}
                            className="h-9 lg:h-10"
                        />
                    </motion.div>

                    {fieldErrors.email.length > 0 && (
                        <p id="emailHelp" className="text-red-500 small-regular mt-1">
                            {fieldErrors.email.join(', ')}
                        </p>
                    )}
                </div>

                  {/** ─── PASSWORD FIELD ────────────────────────────────────── */}
                  {wantsPasswordLogin && (<div className="grid gap-2">
                      <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                          <Link
                              href={urlPath(`/forgot-password`, tenant)}
                              className="ml-auto inline-block text-sm underline"
                          >
                              Forgot your password?
                          </Link>
                      </div>
                      <motion.div
                          className="w-full relative"
                          animate={fieldErrors.password.length > 0 ? {x: [0, -8, 8, -8, 8, 0]} : {x: 0}}
                          transition={{duration: 0.4}}
                      >
                          <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              required
                              name="password"
                              value={password}
                              onChange={handlePasswordChange}
                              disabled={isPending}
                              aria-describedby="passwordHelp"
                              aria-invalid={fieldErrors.password.length > 0}
                              className="h-9 pr-10 lg:h-10"
                          />
                          <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                              disabled={isPending}
                          >
                              {showPassword ? <RiEyeOffFill className="h-4 w-4" /> : <RiEyeFill className="h-4 w-4" />}
                          </button>
                      </motion.div>
                      {fieldErrors.password.length > 0 && (
                          <p id="passwordHelp" className="text-red-500 small-regular mt-1">
                              {fieldErrors.password.join(', ')}
                          </p>
                      )}
                  </div>)}

                  {/*Hidden field for tenant*/}
                  <input type="hidden" name="tenant" value={tenant} />

                  {/** ─── SUBMIT BUTTON ─────────────────────────────────────── */}
                  <Button type="submit" disabled={isPending} className="w-full cursor-pointer h-9 lg:h-10">
                      {isPending ? "Signing in..." : wantsPasswordLogin ? "Sign in" : "Send Magic Link"}
                  </Button>


                  {/* Toggle Password login or MagicLink*/}
                  <p className="body-regular underline hover:text-chart-2">
                      {wantsPasswordLogin ? (
                          <Link href={urlPath(`/?magicLink=yes`, tenant)} className="flex items-center gap-1">
                              Use MagicLink Login
                              <WandSparkles className="text-primary" fill="green" size={18} />
                          </Link>
                      ) : (
                          <Link href={urlPath(`/?magicLink=no`, tenant)}>
                              Use Password Login
                          </Link>
                      )}
                  </p>

                <div className=" grid justify-center text-xs">
                    <span>or login with</span>
                </div>

                  {/** ─── SOCIAL BUTTONS ───────────────────────────────────── */}
                <div className=' '>
                    <Button variant={'outline'} size={'lg'} className='border-gray-500 border-1 flex-1 cursor-pointer hover:bg-accent hover:text-accent-foreground w-full h-9 lg:h-10'>
                        <OAuthIconProvider type='google'/>
                        <span className=''>Google</span>
                    </Button>
                </div>
              </form>

                {/** ─── SIGNUP LINK ───────────────────────────────────────── */}
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href={urlPath(`/register`, tenant)} className="underline">
                        Sign up
                    </Link>
                </div>
            </div>
      </div>
    )
}


export default LoginForm;
