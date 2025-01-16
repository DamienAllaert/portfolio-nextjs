import Navbar from "@/components/NavBar";
import ProjectCardProps from "@/components/ProjectCardProps";

export default function Projects() {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold text-gray-800">Mes Projets</h1>
                <div className="flex space-x-5 mt-8">
                    <ProjectCardProps title={"Marathon du Web"} imageUrl={"/marathonWeb.png"} githubUrl={"https://github.com/DamienAllaert/MarathonWeb"} description={"Un évènement durant lequel les étudiants créer un site pendant 48h"}/>
                </div>
            </div>
        </div>
    );
}
