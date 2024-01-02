"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "typewriter-effect";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 md:col-span-8 place-self-center justify-self-start"
            >
                <h1 className="font-extrabold">
                    <span className="text-white text-8xl ">
                        {"Hello, I'm "}
                        <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Cai Zhen
                        </span>
                    </span>
                    <br></br>
                    <span className="text-7xl">
                        {"I'm "}
                        <TypeWriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        `<span style="color:#FF77FF">Full Stack Developer</span>`
                                    )
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(
                                        `<span style="color:#FF77FF">Software Engineer</span>`
                                    )
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(
                                        `<span style="color:#9E7BFF">Web Developer</span>`
                                    )
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(
                                        `<span style="color:#893BFF">Software Developer</span>`
                                    )
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </span>
                </h1>
                <p className="text-gray-300 pt-8 text-base sm:text-lg mb-6 lg:text-xl">
                    Slide down to know more about me!
                </p>
                <Link
                    href="#projects"
                    className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-indigo-600 hover:bg-violet-600"
                >
                    <span className="text-xl text-white">Projects</span>
                </Link>

                <Link
                    href="https://drive.google.com/file/d/1ajOJwhrua1lElHtbVjzOv12ySXn8xPBa/view?usp=sharing"
                    className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-pink-500 hover:bg-pink-400"
                >
                    <span className="text-xl text-white">View my Resume</span>
                </Link>
            </motion.div>
            <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-[400px] h-[400px] relative z-0">
                        <Image
                            src="../../../public/Home/profilepic.png"
                            alt="hero section"
                            className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={450}
                            height={450}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
