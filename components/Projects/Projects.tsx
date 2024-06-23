const getUserRepos = async () => {
    let res = await fetch(
        "https://api.github.com/users/zhenchai00/repos?sort=updated&direction=desc&per_page=10&type=all"
    );
    let repos = await Promise.all([res.json()]);
    return repos[0];
};

import React from "react";
import ProjectItem from "@/components/Projects/ProjectsItem";

const Projects = async () => {
    let projectRemove = [
        "concurrent-java",
        "cpp-tutorial",
        "assembly-tasm",
        "SAWARATSUKI.ServiceLogos"
    ];
    let repos = await getUserRepos();
    repos = repos
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .filter((repo: any) => !repo.fork)
        .filter((repo: any) => !repo.archived)
        .filter((repo: any) => !projectRemove.includes(repo.name));

    let gridRows = Math.ceil(repos.length / 3);

    return (
        <div className="pt-16" id="projects">
            <h1 className="text-4xl font-bold mb-8">
                Projects
            </h1>
            <div className={`grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-${gridRows}`}>
                {repos.map((repo: any) => (
                    <ProjectItem
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        forks_count={repo.forks_count}
                        stargazers_count={repo.stargazers_count}
                        url={"https://github.com/"+repo.full_name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
