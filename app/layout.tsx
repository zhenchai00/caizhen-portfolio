/**
 * UI that shared between routes
 * Refer to https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/navbar";

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
            <NavBar />
            <body className={`${SourceCodePro.variable} font-sans`}>{children}</body>
        </html>
    );
}
