import React from "react";
import Main from "@/components/Home/Main";
import AboutMe from "@/components/Home/AboutMe";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects/Projects";
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Main />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
