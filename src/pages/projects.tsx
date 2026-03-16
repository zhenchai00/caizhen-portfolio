import MainLayout from "@/components/layout/MainLayout";
import ProjectElement from "@/components/project/ProjectElement";
import { projectsData } from "@/components/project/projectsData";

const projects = () => {
    return (
        <MainLayout className="max-w-6xl mx-auto ">
            <div className="hero-section mb-10">
                <p className="text-xs font-medium text-steel-400 uppercase tracking-widest mb-2">
                    Projects
                </p>
                <h1 className="text-4xl font-bold mb-4">
                    A Showcase of My Work
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {projectsData.map((project, index) => (
                    <ProjectElement key={index} project={project} />
                ))}
            </div>
        </MainLayout>
    );
};

export default projects;
