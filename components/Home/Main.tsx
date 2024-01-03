"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "typewriter-effect";
import profilePic from "../../public/Home/profilepic.png";

const Main = () => {
    return (
        <div className="py-14 mt-14 md-flex md:shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                    <h1 className="font-extrabold">
                        <span className="text-white text-7xl ">
                            {"Hello, I'm "}
                            <span className="text-transparent bg-clip-text sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
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
                                            `<span style="color:#144272">Full Stack Developer</span>`
                                        )
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString(
                                            `<span style="color:#1a5898">Software Engineer</span>`
                                        )
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString(
                                            `<span style="color:#206ebe">Web Developer</span>`
                                        )
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString(
                                            `<span style="color:#2684e4">Software Developer</span>`
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
                        className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-teal-300 hover:bg-emerald-600"
                    >
                        <span className="text-xl text-white">Projects</span>
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1ajOJwhrua1lElHtbVjzOv12ySXn8xPBa/view?usp=sharing"
                        className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-cyan-500 hover:bg-sky-700"
                    >
                        <span className="text-xl text-white">View my Resume</span>
                    </Link>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-5 lg:pt-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-[350px] h-[350px] relative z-0">
                            <Image
                                src={profilePic}
                                alt="hero section"
                                className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                width={450}
                                height={450}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Main;
