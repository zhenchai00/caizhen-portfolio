"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import aboutMe from "../../public/cat-brain-lag.gif";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>PHP</li>
                <li>JAVA</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React JS</li>
                <li>Next JS</li>
                <li>Express JS</li>
                <li>Sencha Ext JS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap CSS</li>
                <li>MySQL</li>
            </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Engineer</li>
                <li>Web Developer</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>Putra Intelek International College</li>
                <li>SMK Puchong Perdana</li>
            </ul>
        ),
    },
];

const TAB_NAME = TAB_DATA.map((tab) => tab.id);

const AboutMe = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <div className="text-white grid" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <Image
                    src={aboutMe}
                    alt="about-me-image"
                    width={450}
                    style={{ borderRadius: "25px" }}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h1>
                    <p className="text-base text-justify lg:text-lg">
                        {`I am currently pursuing a degree in Computer Science at Asia Pacific University, where I have 
                        been honing my skills in various technologies. I am familiar in full stack development, with 
                        expertise in React, Next.js, PHP, JAVA and LEMP stack tech development with external and 
                        internal API development. However, I am not limited to frontend tasks and often take on backend 
                        responsibilities, demonstrating my versatility and commitment to delivering complete solutions.
                        `}
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experiences")}
                            active={tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                    </div>
                    <div className="mt-4">
                        {TAB_DATA.find((t) => t.id == tab)?.content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
