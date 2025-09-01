import Image from "next/image";
import { Button } from "../ui/button";
import { Blocks, SmilePlus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import MotionButton from "../custom/animate-button/MotionButton";
import dynamic from "next/dynamic";

const Hero = () => {
    const constraintsRef = useRef<HTMLDivElement>(null);
    const TypeWriter = dynamic(
        () => import("../custom/typewriter-effect/Typewriter"),
        { ssr: false }
    );
    return (
        <AnimatePresence initial={false}>
            <motion.div ref={constraintsRef}>
                <div className="grid md:grid-cols-12 grid-cols-1 items-center justify-items-stretch">
                    <div className="md:col-span-8 md:text-left text-center flex flex-col">
                        <h1 className="text-4xl font-bold">
                            <TypeWriter
                                text="Engineering Ideas into Scalable Solutions"
                                cursor={false}
                            />
                        </h1>
                        <h2 className="text-2xl mt-2">
                            <TypeWriter
                                text="Full-Stack in Progress. Ready to Build, Ready to Grow"
                                cursor={false}
                            />
                        </h2>
                        <div className="flex md:gap-3 md:mt-15 mt-4 md:justify-start justify-center">
                            <a href="/#projects" className="col-span-6 md:mx-0 mx-2 w-[50%] md:w-fit">
                                <MotionButton
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    variant={"outline"}
                                    className="w-full"
                                >
                                    My Builds
                                    <Blocks />
                                </MotionButton>
                            </a>
                            <a href="/#about" className="col-span-6 md:mx-0 mx-2 w-[50%] md:w-fit">
                                <MotionButton
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    variant={"default"}
                                    className="w-full"
                                >
                                    Get to Know Me
                                    <SmilePlus />
                                </MotionButton>
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-4 w-full flex justify-center">
                        <Image
                            src={"/hero/profilepic.png"}
                            alt={"Profile Picture"}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Hero;
