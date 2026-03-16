import MainLayout from "@/components/layout/MainLayout";

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
            {/* Project list will go here */}
            </MainLayout>
    );
}

export default projects;