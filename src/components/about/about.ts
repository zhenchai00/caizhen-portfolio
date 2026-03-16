import { Education, Experience } from "@/components/about/type";

export const defaultConfig = {
    fullName: "Chong Cai Zhen",
    jobTitle: "Software Engineer",
    email: "chongcaizhen@gmail.com",
    phone: "",
    location: "Kuala Lumpur, Malaysia",
    githubUrl: "https://github.com/zhenchai00",
    linkedinUrl: "https://linkedin.com/in/chongcaizhen",
    summaryText:
        "Software Engineer specializing in designing and supporting resilient microservice architectures using Java and Spring Boot, containerized with Docker and orchestrated with Kubernetes. Possess 4 years of experience in the information technology industry, including 1 year designing and supporting microservices in the banking and financial sector, 2 years as a LEMP stack developer in a financial services company, and 1 year working with Web Content Management Systems in an e-commerce environment.",
};

export const experiences: Experience[] = [
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

export const skills: Record<string, string[]> = {
    tools: ["Java", ".NET", "PHP", "PostgreSQL", "MySQL", "MongoDB"],
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap"],
    infra: ["Linux", "Git", "Kubernetes", "Docker", "AWS", "CI/CD"],
    admin: ["Jira", "Confluence", "Scrum", "Agile", "Microsoft Office", "Google Workspace"],
};
    
export const educations: Education[] = [
    {
        degree: "Bachelor of Computer Science (Hons) Software Engineering",
        institution: "Asia Pacific University of Technology & Innovation (APU)",
        period: "Mar 2023 - Oct 2025",
        points: [
            "Graduated with First Class Honours, achieving a CGPA of 3.59/4.00",
            "Great Malaysia AI Hackathon 2025 participant, Automated ESG Report by using AWS services",
            "Lv. 99 Game Jam 2023 Participant, part of a 48-hour global game jam held on-site",
            "Developed simple Diabetes Healthcare System with ASP .NET C# and deploy to AWS with the microservices architecture",
            "Develop simple Real Time Traffic Simulation System with Rust ",
            "Develop simple RMI based Leave Management System with POJO and networking dependencies in Java",
            "Develop simple Airport Traffic Control System with Concurrency and Multithreading behavior in POJO Java",
            "Develop simple food ordering system with Object Oriented Concept and Design Pattern (Singleton) in POJO Java",
            "Developed the Zinnie Chatbot Project, a chatbot centered around the Zinnia flower",
        ]
    },
    {
        degree: "Diploma in Information Technology",
        institution: "Putra Intelek International College (PIIC)",
        period: "Mar 2018 - Jan 2021",
        points: [
            "Graduated with First Class Honours, achieving a CGPA of 3.82/4.00",
            "Received the Dean's Award in October 2018, February 2019, and March 2019, recognizing outstanding achievements",
            "Volunteer of 9th Putra Intelek International College Convocation Ceremony by ensuring the smooth flow of the university convocation by ushering 200 of guests to their designated seats and providing guidance to various event locations",
            "Served as a Team Leader in Community Service in 2019, leading and coordinating team efforts for community initiatives",
        ]
    },
    {
        degree: "Amazon Web Services Cloud Practitioner Essentials",
        institution: "Amazon Web Services (AWS)",
        period: "2024",
        points: [
            "Completed the AWS Cloud Practitioner Essentials course, gaining foundational knowledge of AWS cloud services and best practices for cloud computing",
        ]
    }
];