/**
 * UI that shared between routes
 * Refer to https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import React from "react";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavigationBar/NavBar";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";

const SourceCodePro = Source_Code_Pro({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
    title: "CaiZhen Portfolio",
    description: "CaiZhen Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <AppRouterCacheProvider>
                <Script id="darkmodescipt">
                    {`
                        if ('darkMode' in localStorage) {
                            if (localStorage.getItem('darkMode') === 'true') {
                                document.querySelector('html').classList.add('dark');
                            } else {
                                document.querySelector('html').classList.remove('dark');
                            }
                        } else {
                            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                document.querySelector('html').classList.add('dark');
                            } else {
                                document.querySelector('html').classList.remove('dark');
                            }
                        }
                    `}
                </Script>
                <body
                    className={`${SourceCodePro.variable} font-sans min-h-screen mx-auto text-black dark:text-white bg-[#eff1f1] dark:bg-black`}
                >
                    <NavBar />
                    <div className="px-6 md:px-12">{children}</div>
                    <Analytics />
                </body>
            </AppRouterCacheProvider>
        </html>
    );
}
