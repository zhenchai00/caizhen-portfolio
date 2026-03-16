import { Education } from "@/type/AboutType";

const Educations = ({ educations }: { educations: Education[] }) => {
    return (
        <div className="mb-10 max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl font-600 text-steel-700 mb-5 flex items-center gap-2">
                <hr className="w-5 h-px bg-steel-300" /> Education
            </h2>
            <div className="flex flex-col gap-6">
                {educations.map((edu, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-steel-300 mt-2 shrink-0"></div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <p className="text-sm font-medium leading-6 text-steel-700">
                                        {edu.degree}
                                    </p>
                                    <p className="text-xs leading-5 text-steel-500">
                                        {edu.institution}
                                    </p>
                                </div>
                                <p className="text-xs text-steel-400 shrink-0">
                                    {edu.period}
                                </p>
                            </div>
                            <ul className="list-disc list-inside text-sm text-steel-600 max-w-4xl">
                                {edu.points.map(
                                    (point: string, idx: number) => (
                                        <li key={idx} className="leading-7">{point}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Educations;