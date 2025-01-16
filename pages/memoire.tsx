import Navbar from "@/components/NavBar";

export default function Memoire() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                <h1 className="mt-36 flex flex-col text-3xl font-bold text-gray-800 items-center">Le memoire</h1>
                <div className="min-h-screen">
                    <h1 className="mt-36 flex flex-col text-3xl font-bold text-gray-800 items-center">Le memoire</h1>
                    <div className="flex flex-col w-3/5 justify-center ml-80 mt-10">
                        <p className="text-gray-600 mt-4 font-bold">
                            Parti 1 : Site écologique
                        </p>
                        <p className="text-gray-600 mt-4">
                            <span className="underline">Réduction de la consommation d'énergie :</span>
                            En optimisant les performances du site web, comme la minimisation des tailles de fichiers,
                            l'utilisation de pratiques de codage efficaces et la mise en cache,
                            le site réduit la quantité d'énergie nécessaire pour charger et afficher le contenu.
                            Cela conduit à une consommation d'énergie moindre tant du côté serveur que du côté client.
                        </p>
                        <p className="text-gray-600 mt-4">
                            <span className="underline">Design minimaliste :</span>
                            Adopter une approche de design minimaliste qui évite les éléments superflus et
                            se concentre sur le contenu essentiel peut réduire la quantité de données transférées
                            et traitées. Cela améliore non seulement l'expérience utilisateur,
                            mais diminue également l'impact environnemental en réduisant les ressources nécessaires
                            pour la transmission et le stockage des données.
                        </p>
                        <p className="text-gray-600 mt-4">
                            <span className="underline">Réduction du temps de navigation :</span>
                            Un site écologique est conçu pour être simple, intuitif et rapide d'accès.
                            Cela permet aux utilisateurs de trouver l'information dont ils ont besoin
                            plus rapidement, réduisant ainsi le temps passé en ligne et, par conséquent,
                            l'énergie consommée par leurs appareils et les serveurs.
                        </p>
                    </div>

                    <div className="flex flex-col w-3/5 justify-center ml-80 mt-10 mb-10">
                        <p className="text-gray-600 mt-4 font-bold">
                            Parti 2 : Pourquoi next-js ?
                        </p>
                        <p className="text-gray-600 mt-4">
                            <span className="underline">Performance optimale grâce au rendu hybride (SSR et SSG) :</span>
                            Next.js est un excellent choix pour les projets web en raison de sa capacité
                            à proposer un rendu hybride combinant Server-Side Rendering (SSR) et
                            Static Site Generation (SSG). Ce système permet de générer les pages dynamiquement
                            ou statiquement selon les besoins, offrant ainsi des performances optimales.
                            Cela garantit un contenu toujours à jour pour les utilisateurs et améliore
                            le référencement (SEO), tout en réduisant la charge sur les serveurs.
                        </p>
                        <p className="text-gray-600 mt-4">
                            <span className="underline">Expérience utilisateur améliorée avec le chargement rapide :</span>
                            Next.js améliore considérablement l'expérience utilisateur grâce à des techniques
                            avancées comme le code splitting et le lazy loading.
                            Ces fonctionnalités réduisent le temps de chargement initial en ne téléchargeant
                            que les ressources nécessaires, ce qui rend l'application plus légère et rapide.
                            De plus, le système de préchargement des pages assure une navigation fluide et immédiate.
                        </p>
                        <p className="text-gray-600 mt-4">
                            <span className="underline">Écosystème complet et facile à utiliser :</span>
                            Next.js se distingue par son écosystème complet et facile à utiliser.
                            Il prend en charge nativement TypeScript, facilite la création de backends
                            légers avec les API routes, et s'intègre parfaitement avec des outils modernes
                            comme Vercel pour simplifier le déploiement. Ces atouts permettent de gagner du
                            temps tout en réduisant la complexité des projets web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}