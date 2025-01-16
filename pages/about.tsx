import Navbar from "@/components/NavBar";

export default function About() {
    return (
        <div className="flex flex-col mt-32">
            <Navbar/>
            <div className="flex flex-1 justify-center mb-36 mt-24">
                <div className="flex justify-center space-x-72">
                    <p className="text-gray-800 w-1/3">
                        Je m’appelle Damien ALLAERT, étudiant en troisième année de BUT Informatique
                        à l’IUT de Lens. Âgé de 20 ans, je suis passionné par l’informatique depuis
                        mon plus jeune âge, ce qui m’a conduit à explorer divers domaines comme le
                        développement logiciel, la création de sites web et les technologies émergentes.
                        Tout au long de mes études, j’ai acquis des compétences solides, notamment en programmation.
                    </p>
                    <img src="/moi.jpg" alt="Description de l'image"
                         className="rounded-full h-32 w-32"/>
                </div>
            </div>
            <div className="flex justify-center space-x-12 mb-14">
                <div className="w-1/4">
                    <h1 className="font-bold text-2xl">Mon parcours</h1>
                    <p>
                        Etant intérrésé par l'informatique depuis petit,
                        j'ai décidé de pratiqué un bac avec les spécialité Maths et NSI.
                        Afin de pouvoir continuer dans cette voie,
                        j'ai décidé de m'orienter vers un BUT informatique.
                    </p>
                </div>
                <div className="w-1/4">
                    <h1 className="font-bold text-2xl">Mes expériences</h1>
                    <p>En 2ème année de BUT, j'ai eu la chance d'avoir pu faire un stage informatique,
                        chez EDF, à la centrale nucléaire de Gravelines.</p>
                </div>
                <div className="w-1/4">
                    <h1 className="font-bold text-2xl">Mes intérrets</h1>
                    <p>
                        Je suis très fortement intéressé par les jeux d'échecs et le sport,
                        notamment le badminton, dont j'ai pratique depuis plus de 10 ans
                    </p>
                </div>
            </div>
        </div>
    );
}