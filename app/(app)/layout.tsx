import React from "react";
import localFont from "next/font/local";
import "../globals.css"

import { Theme } from "@/components/theme";
import {Toaster} from "@/components/ui/sonner";

import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/layout/AppSidebar";
import {Button} from "@/components/ui/button";
import {AlignRight} from "lucide-react";
import {AppHeader} from "@/components/layout/AppHeader";

const inter = localFont({
    src: "../fonts/InterVF.ttf",
    variable: "--font-inter",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <SidebarProvider>
            <AppSidebar />
          <body
            className={`${inter.className} font-sans antialiased`}
          >
            <main className="w-full px-5">
              <Theme>
                  <main>
                      <AppHeader>
                          <SidebarTrigger />
                      </AppHeader>

                      {children}
                  </main>
                  <Toaster />
              </Theme>
            </main>
          </body>
        </SidebarProvider>
    </html>
  );
}
