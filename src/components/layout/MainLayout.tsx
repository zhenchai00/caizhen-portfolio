import React, { Component, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavigationBar from "@/components/navigationbar/NavigationBar";
import MobileNavigation from "../navigationbar/MobileNavigation";

interface MainLayoutProps {
    children: ReactNode;
}

interface MainLayoutState {
    mobileMenuOpen: boolean;
}

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Me", href: "/contact" },
];

export default class MainLayout extends Component<MainLayoutProps, MainLayoutState> {
    constructor(props: MainLayoutProps) {
        super(props);
        this.state = { mobileMenuOpen: false };
    }

    setMobileMenuOpen = (open: boolean) => {
        this.setState({ mobileMenuOpen: open });
    };

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            mobileMenuOpen: !prevState.mobileMenuOpen,
        }));
    };

    closeMobileMenu = () => {
        this.setState({ mobileMenuOpen: false });
    };

    render() {
        const { children } = this.props;
        const { mobileMenuOpen } = this.state;

        return (
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                {/* Header */}
                <header className="w-full border-b bg-card">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl tracking-tight">CZ Portfolio</span>
                            <span className="text-xs text-muted-foreground ml-2">Software & Photography</span>
                        </div>
                        <NavigationBar />
                        <MobileNavigation />
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

                {/* Footer */}
                <footer className="w-full border-t bg-card py-4 mt-auto">
                    <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} CZ Portfolio. All rights reserved.
                    </div>
                </footer>
            </div>
        );
    }
}