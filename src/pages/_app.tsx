import "@/styles/globals.css";
import { ThemeProvider } from "@/theme-provider";
import type { AppProps } from "next/app";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import Head from "next/head";

const ubuntu = Ubuntu({
    variable: "--font-ubuntu",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const ubuntuMono = Ubuntu_Mono({
    variable: "--font-ubuntu-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main className={`${ubuntu.variable} ${ubuntuMono.variable}`}>
                <ThemeProvider
                    attribute={"class"}
                    defaultTheme={"system"}
                    enableSystem
                    disableTransitionOnChange
                >
                    <Component {...pageProps} />
                </ThemeProvider>
            </main>
        </>
    );
}
