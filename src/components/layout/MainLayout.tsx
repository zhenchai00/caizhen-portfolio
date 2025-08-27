import React, { Component, FC, ReactNode } from "react";
import NavigationBar from "@/components/navigationbar/NavigationBar";
import NavigationMenuMobile from "@/components/navigationbar/mobile/NavigationMenuMobile";
import Head from "next/head";

interface MainLayoutProps {
    children: ReactNode;
    siteTitle?: string;
}

const MainLayout: FC<MainLayoutProps> = ({
    children,
    siteTitle = "CaiZhen Portfolio",
}: MainLayoutProps) => {
    return (
        <div className="min-h-screen">
            <Head>
                <title>{siteTitle}</title>
                <meta name={siteTitle} content="Showcasing my work and projects" />
            </Head>
            {/* Header */}
            <header className="w-full border-b bg-card sticky top-0">
                <div className="container mx-auto py-2 px-4 flex items-center justify-between">
                    <div className="flex flex-col justify-normal p-2">
                        <span className="font-bold text-xl tracking-tight">
                            CaiZhen Portfolio
                        </span>
                        <span className="text-xs text-muted-foreground">
                            Software & Photography
                        </span>
                    </div>
                    <NavigationBar />
                    <NavigationMenuMobile />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-8 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="w-full border-t bg-card py-2 mt-auto">
                <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} CaiZhen Portfolio. All rights
                    reserved.
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
