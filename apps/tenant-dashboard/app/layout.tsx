import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import "@workspace/ui/globals.css"

import { Theme } from "@/components/Theme";
import Logo from "@/components/common/Logo";
import Carousel from "@/components/common/Carousel";


const inter = localFont({
    src: "./fonts/InterVF.ttf",
    variable: "--font-inter",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

const montserrat = localFont({
    src: "./fonts/Montserrat.ttf",
    variable: "--font-montserrat",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

export const metadata: Metadata = {
  title: "HelpDesk | Login",
  description: "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    {/*<meta name="apple-mobile-web-app-title" content="MyWebSite" />*/}
      <body
        className={`${inter.className} ${montserrat.className} font-sans antialiased h-screen`}
      >
        <main className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 items-center">
          <Theme>
            <div>
              <Logo className="justify-center mb-6" />
              {children}
            </div>
          </Theme>
          <Carousel />
        </main>
      </body>
    </html>
  );
}
