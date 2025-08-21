"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/ui/navigation-menu";
import { NAVIGATION_ITEMS } from "./const";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

const NavigationBar = () => {
    return (
        <NavigationMenu className="hidden md:flex gap-4">
            {NAVIGATION_ITEMS.map((item) => (
                <NavigationMenuList key={item.title}>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href={item.href}>{item.title}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            ))}
            <ModeToggle className="h-9 w-9" contentClassName="w-36" />
        </NavigationMenu>
    );
};

export default NavigationBar;
