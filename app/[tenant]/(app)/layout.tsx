import React from "react";
import localFont from "next/font/local";
import "../globals.css"

import { Theme } from "@/components/theme";
import {Toaster} from "@/components/ui/sonner";

import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/layout/AppSidebar";
import {AppHeader} from "@/components/layout/AppHeader";

const inter = localFont({
    src: "../fonts/InterVF.ttf",
    variable: "--font-inter",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

export default async function RootLayout({
  children,
    params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ tenant: string }>;
}>) {
    const { tenant } = await params;

  return (
    <html lang="en" suppressHydrationWarning>
        <SidebarProvider>
            <AppSidebar tenant={tenant} />
          <body
            className={`${inter.className} font-sans antialiased glass-page-bg-2`}
          >
            <main className="w-full px-5">
              <Theme>
                  <main>
                      <AppHeader tenant={tenant}>
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
