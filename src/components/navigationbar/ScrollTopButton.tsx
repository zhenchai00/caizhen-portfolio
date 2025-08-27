import { ArrowLeftToLine } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toTopEvent = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 90 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20, rotate: -90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed bottom-4 right-4 z-50"
                >
                    <Button
                        onClick={toTopEvent}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full p-0 shadow-md hover:bg-accent hover:text-accent-foreground md:h-12 md:w-12"
                        aria-label="Scroll to top"
                    >
                        <ArrowLeftToLine size={24} />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollTopButton;
