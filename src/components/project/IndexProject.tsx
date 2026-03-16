import { projectsData } from "./projectsData";
import ProjectElement from "./ProjectElement";

const IndexProject = () => {
    return (
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-10">Project Showcase</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {projectsData.slice(0, 4).map((project, index) => (
                    <ProjectElement key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default IndexProject;
