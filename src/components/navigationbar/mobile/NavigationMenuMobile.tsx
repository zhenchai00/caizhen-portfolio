"use client"

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "../const";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import ModeToggleMobile from "./ModeToggleMobile";

const NavigationMenuMobile = () => {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu  size={50} />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-4 w-[70%]">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription></SheetDescription>
                    </SheetHeader>
                    {NAVIGATION_ITEMS.map((item) => (
                        <Button
                            key={item.title}
                            variant="ghost"
                            className="w-full"
                            asChild
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    ))}
                    <div className="w-full flex justify-center">
                        <ModeToggleMobile />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default NavigationMenuMobile;