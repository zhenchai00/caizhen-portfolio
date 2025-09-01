import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MotionButton from "../custom/animate-button/MotionButton";
import { MoveUpRight } from "lucide-react";

const IndexAboutMe = () => {
    return (
        <div
            id="about"
            className="grid md:grid-cols-12 grid-cols-1 items-center justify-items-stretch gap-4"
        >
            <div className="col-span-5 hidden md:block">
                <DotLottieReact
                    src="/animations/about-me-animation.lottie"
                    autoplay
                    loop
                />
            </div>
            <div className="col-span-7">
                <div>
                    <h2 className="text-2xl font-bold">About Me</h2>
                    <p className="mt-2 md:leading-8 leading-6.5 tracking-wide text-justify">
                        Hi, I’m a Computer Science graduate who loves building
                        things. My main tools are{" "}
                        <span className="font-bold">React</span>,{" "}
                        <span className="font-bold">Next.js</span>,{" "}
                        <span className="font-bold">TypeScript</span>,{" "}
                        <span className="font-bold">Java</span>, and many more,
                        but I'm most energized by collaborating with others to
                        turn ideas into tangible products. I enjoy bridging the
                        gap between design and functionality, making me
                        comfortable working on both the frontend and backend.
                    </p>
                </div>
                <div className="flex md:justify-end justify-normal mt-4">
                    <a href="/about" className="w-full">
                        <MotionButton
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ opacity: 1 }}
                            variant={"secondary"}
                            className="w-full md:w-fit"
                        >
                            More About Me
                            <MoveUpRight />
                        </MotionButton>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default IndexAboutMe;
