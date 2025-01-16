import Navbar from '../components/NavBar';
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";

export default function Home() {
    return (
        <div className="min-h-screen pt-16 bg-gradient-to-r from-blue-500 to-purple-500">
            <Navbar/>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold text-white">Damien ALLAERT</h1>
                <p className="text-white mt-4">Etudiant en 3ème année de BUT Informatique</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 min-h-[calc(100vh-64px)]">
                <div className="w-1/2 p-4 mt-10">
                    <h1 className="text-4xl font-bold text-gray-800">A propos de moi</h1>
                    <p className="text-gray-600 mt-4">
                        Etant tres intéressé par l'informatique, j'ai fais le choix de poursuivre mes études en BUT
                        informatique à l'iut de Lens.
                        J'ai pu acquérir de nombreuses compétences dans le domaine de l'informatique.
                    </p>
                    <div className="mt-8">
                        <Link href="/about" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Voir plus
                        </Link>
                    </div>
                </div>
                <div className="mt-32 w-1/2">
                    <img src="/marathonWeb.png" alt="Description de l'image" className="rounded"/>
                </div>
                <div className="flex justify-center space-x-1 mt-10 mb-10">
                    <div className="w-1/6">
                        <h3 className="text-2xl font-bold text-gray-800 whitespace-nowrap">Marathon du web</h3>
                    </div>
                    <div className="w-1/3 p-4">
                        <p className="text-gray-600 mt-4">
                            Le marathon du web est un évènement dans lequel,
                            les étudiant du BUT informatique et les étudidiant du BUT MMI de l'IUT de Lens colaborent
                            en groupe afin de produire un site web pendant 48h non-stop.
                        </p>
                        <div className="mt-8">
                            <Link href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded">
                                mes projets
                            </Link>
                        </div>
                    </div>
                </div>

                <ContactForm/>
            </div>
        </div>
    );
}