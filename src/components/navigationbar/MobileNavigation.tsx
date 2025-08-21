import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { NAVIGATION_ITEMS } from "./const";
import { ModeToggle } from "./ModeToggle";

const MobileNavigation = () => {
    return (
        <div>
            <div className="md:hidden">
                <Button variant="ghost">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
};

export default MobileNavigation;