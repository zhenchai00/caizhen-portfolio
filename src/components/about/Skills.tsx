const Skills = ({ skills }: { skills: Record<string, string[]> }) => {
    const categoryMapping: Record<string, string> = {
        tools: "Tools & Technologies",
        frontend: "Frontend",
        infra: "Infrastructure",
        admin: "Admin & Collaboration",
    };

    return (
        <div className="mb-10 max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl font-600 text-steel-700 mb-5 flex items-center gap-2">
                <hr className="w-5 h-px bg-steel-300" /> Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-steel-400 uppercase tracking-wider mb-2">
                            {categoryMapping[category] || category}
                        </p>

                        <ul className="flex flex-wrap gap-1.5 text-steel-500">
                            {skillList.map((skill, index) => (
                                <li key={index}>
                                    <span className="px-2 py-0.5 text-xs rounded-full bg-steel-100 text-steel-600 border border-steel-200">
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
