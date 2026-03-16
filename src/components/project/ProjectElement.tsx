import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Project } from "./type";
import Link from "next/link";

const ProjectElement = ({ project }: { project: Project }) => {
    return (
        <Card className="w-full h-full flex flex-col">
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col grow justify-between">
                {project.description}
                <CardAction className="w-full mt-4 flex justify-end  ">
                    <Link
                        href={project.link}
                        target="_blank"
                        className="text-primary "
                    >
                        View Project
                    </Link>
                </CardAction>
            </CardContent>
            <CardFooter>
                <CardDescription className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-md mr-2"
                        >
                            {tech}
                        </span>
                    ))}
                </CardDescription>
            </CardFooter>
        </Card>
    );
};

export default ProjectElement;
