import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css"

import { Theme } from "@/components/theme";
import Logo from "@/components/common/logo";


const montserrat = localFont({
    src: "../fonts/Montserrat.ttf",
    variable: "--font-montserrat",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

export const metadata: Metadata = {
  title: "WetinHapin | Login",
  description: "A login page with two columns. The first column has the login form with email and password. " +
      "There's a Forgot your password link and a link to sign up if you do not have an account. " +
      "The second column has a cover image.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} font-sans antialiased h-screen`}
      >
        <main className="w-full grid min-h-screen px-3">
          <Theme>
            <div className="mt-20 md:mt-25">
              <Logo className="justify-center mb-6 mt-4 lg:mt-0" />
              {children}
            </div>
          </Theme>
        </main>
      </body>
    </html>
  );
}
