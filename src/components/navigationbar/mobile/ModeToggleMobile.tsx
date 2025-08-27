"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface ModeToggleMobileProps {
    className?: string;
}

const ModeToggleMobile = ({ className }: ModeToggleMobileProps) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const defaultTheme = theme === "system";
    const effective = theme === "system" ? resolvedTheme : theme;

    // temporary remove due to confusion of the extra toggle
    const toggleFollowSystem = (checked: boolean) => {
        if (checked) {
            setTheme("system");
        } else {
            const current = resolvedTheme ?? "light";
            setTheme(current);
        }
    };

    const pickManual = (t: "light" | "dark") => {
        setTheme(t);
    };

    return (
        <div className={cn("w-full ", className)}>
            <div className="flex items-center justify-center-safe gap-2 p-3">
                <Button
                    variant={effective === "light" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => pickManual("light")}
                    aria-pressed={effective === "light"}
                    className="h-8 px-2"
                    title="Use light theme"
                >
                    <SunIcon className="h-4 w-4" />
                    <span className="sr-only">Light</span>
                </Button>

                <Button
                    variant={effective === "dark" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => pickManual("dark")}
                    aria-pressed={effective === "dark"}
                    className="h-8 px-2"
                    title="Use dark theme"
                >
                    <MoonIcon className="h-4 w-4" />
                    <span className="sr-only">Dark</span>
                </Button>
            </div>
        </div>
    );
};

export default ModeToggleMobile;
