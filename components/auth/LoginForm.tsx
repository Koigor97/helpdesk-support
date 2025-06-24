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

const initialState: LoginState = {
    error: {
        email: [],
        password: []
    }
}

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [fieldErrors, setFieldErrors] = useState<{email: string[], password: string[]}>({email: [], password: []});

    // @ts-ignore
    const [state, formAction, pending] = useActionState<LoginState>(loginAction, initialState);

    useEffect(() => {
        if (state.error) {
            setFieldErrors({
                email: state.error.email || [],
                password: state.error.password || []
            })
        }
    }, [state.error]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (fieldErrors.email.length) {
            setFieldErrors(fe => ({...fe, email: []}))
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (fieldErrors.password.length) {
            setFieldErrors(fe => ({...fe, password: []}))
        }
    }

    return (
        <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="h1-bold">Welcome back 👋</h1>
            <p className="w-sm body-regular">
              Sign in to manage support tickets, collaborate with your team, and help customers faster.
            </p>
          </div>
          <form
              action={formAction}
              className="grid gap-4"
          >
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
            <Button type="submit" className="w-full cursor-pointer h-10">
              Continue
            </Button>
            <div className=" flex justify-center text-xs">
                <span>or login with</span>
            </div>
                   
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
