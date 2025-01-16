/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Add any other configuration options here
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    // Uncomment the following line if your pages are in the 'src' directory
    dir: '_app.tsx',
};

module.exports = nextConfig;