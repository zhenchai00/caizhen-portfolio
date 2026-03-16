import MainLayout from "@/components/layout/MainLayout";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Experiences from "@/components/about/Experiences";
import Skills from "@/components/about/Skills";
import Educations from "@/components/about/Educations";
import {
    defaultConfig,
    experiences,
    educations,
    skills,
} from "@/components/about/about";

const about = () => {
    return (
        <MainLayout className="max-w-6xl mx-auto ">
            <div className="hero-section mb-10">
                <p className="text-xs font-medium text-steel-400 uppercase tracking-widest mb-2">
                    {defaultConfig.jobTitle}
                </p>
                <h1 className="text-4xl font-bold mb-4">
                    {defaultConfig.fullName}
                </h1>
                <p className="text-sm text-steel-600 leading-7 max-w-4xl">
                    {defaultConfig.summaryText}
                </p>
            </div>
            <div className="contact-section flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-1.5 text-xs text-steel-500">
                    <Mail className="w-3.5 h-3.5" />{" "}
                    <span id="contact-email">{defaultConfig.email}</span>
                </div>
                {/* <div className="flex items-center gap-1.5 text-xs text-steel-500">
                    <PhoneCall className="w-3.5 h-3.5" />
                    {" "}
                    <span id="contact-phone">{defaultConfig.phone}</span>
                </div> */}
                <div className="flex items-center gap-1.5 text-xs text-steel-500">
                    <MapPin className="w-3.5 h-3.5" />{" "}
                    <span id="contact-location">{defaultConfig.location}</span>
                </div>
                <a
                    href={defaultConfig.githubUrl}
                    className="flex items-center gap-1.5 text-xs text-steel-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github className="w-3.5 h-3.5" />{" "}
                    <span id="contact-github">GitHub</span>
                </a>
                <a
                    href={defaultConfig.linkedinUrl}
                    className="flex items-center gap-1.5 text-xs text-steel-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin className="w-3.5 h-3.5" />{" "}
                    <span id="contact-linkedin">LinkedIn</span>
                </a>
            </div>
            <Experiences experiences={experiences} />
            <Skills skills={skills} />
            <Educations educations={educations} />
        </MainLayout>
    );
};

export default about;
