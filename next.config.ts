/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    // Ajouter d'autres options de configuration si nécessaire
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    // Si vos pages sont dans un répertoire 'src', vous pouvez spécifier le répertoire comme suit :
    // Dir indique où Next.js doit rechercher les fichiers de pages
    // La valeur par défaut est 'pages', mais vous pouvez la changer pour 'src/pages'
    // dir: 'src',
};

module.exports = nextConfig;