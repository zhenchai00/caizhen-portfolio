import MainLayout from "@/components/layout/MainLayout";
import { Github, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import Experiences from "@/components/about/Experiences";
import { Experience } from "@/type/AboutType";

const defaultConfig = {
    fullName: "Chong Cai Zhen",
    jobTitle: "Software Engineer",
    email: "chongcaizhen@gmail.com",
    phone: "",
    location: "Kuala Lumpur, Malaysia",
    githubUrl: "https://github.com/zhenchai00",
    linkedinUrl: "https://linkedin.com/in/chongcaizhen",
    summaryText:
        "Software Engineer specializing in designing and supporting resilient microservice architectures using Java and Spring Boot, containerized with Docker and orchestrated with Kubernetes. Possess 4 years of experience in the information technology industry, including 1 year designing and supporting microservices in the banking and financial sector, 2 years as a LEMP stack developer in a financial services company, and 1 year working with Web Content Management Systems in an e-commerce environment.",
    background_color: "#f0f3f8",
    surface_color: "#ffffff",
    text_color: "#233348",
    primary_action_color: "#5a7eb3",
    secondary_action_color: "#96aed2",
    font_family: "DM Sans",
    font_size: 14,
};

const experiences: Experience[] = [
    {
        role: "Junior Application Developer",
        company: "Uberfusion Sdn Bhd",
        period: "Oct 2025 — Present",
        points: [
            "Support and maintain microservice based architectures with over 50 services in the banking and financial sector, ensuring high availability and performance",
            "Active engagement with cross-functional teams to design and implement new features, troubleshoot issues, and optimize system performance, contributing to the overall success of the new development and maintenance of the microservices",
        ],
    },
    {
        role: "Software Engineer Internship",
        company: "Memo Agility Sdn Bhd",
        period: "Jul 2024 - Nov 2024",
        points: [
            "Developed a Quotation Management System for the insurance industry, featuring two-factor authentication, audit logs, role-based system administration, and an enquiry module using microservices architecture",
            "Created a simplified version of the Quotation Management System to showcase at the Singapore FinTech Festival 2024",
        ],
    },
    {
        role: "Software Engineer",
        company: "Silverstream Technology Sdn Bhd",
        period: "Apr 2021 - Sep 2023",
        points: [
            "Performed SDLC as a full-stack developer to develop multiple web applications with the LEMP stack, including payment systems for NGOs and Payment Gateways, using an in-house MVC framework which working in the Payment Team",
            "Involved in external API integration with the system and internal and external API development for new payment systems",
            "Involved in designing and restructuring old applications to support future trends, including analyzing current business requirements and designing data structures for core features in the new payment system. Also provided training to new colleagues on the use of the in-house MVC framework",
            "Trained 4 colleagues by providing business operation and technical guidance",
            "Engaged in cross-communication with other teams to assess whether utilizing already-existing apps or pursuing new development was necessary",
        ],
    },
    {
        role: "IT Support & Web Developer",
        company: "iFixx Retail Sdn Bhd",
        period: "Jun 2020 - Apr 2021",
        points: [
            "Performed SDLC as a full-stack developer to develop multiple web applications with the LEMP stack, including payment systems for NGOs and Payment Gateways, using an in-house MVC framework which working in the Payment Team",
            "Involved in external API integration with the system and internal and external API development for new payment systems",
            "Involved in designing and restructuring old applications to support future trends, including analyzing current business requirements and designing data structures for core features in the new payment system. Also provided training to new colleagues on the use of the in-house MVC framework",
            "Trained 4 colleagues by providing business operation and technical guidance",
            "Engaged in cross-communication with other teams to assess whether utilizing already-existing apps or pursuing new development was necessary",
        ],
    },
];

const skills = {
    system: [
        "Distributed Systems",
        "Microservices",
        "Event Sourcing",
        "CQRS",
        "CAP Theorem",
        "Load Balancing",
    ],
    tools: ["Go", "Python", "Java", "PostgreSQL", "Redis", "gRPC", "GraphQL"],
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    infra: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD", "Prometheus"],
};
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
        </MainLayout>
    );
};

export default about;
