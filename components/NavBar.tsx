import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [location, setLocation] = useState('FR/IDF'); // Exemple de pays/région

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-500 text-white fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">{location}</span>
                    </div>
                    <div className="hidden md:flex space-x-4 flex-grow justify-center">
                        <Link href="/" className="hover:text-blue-400">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-400">
                            À propos
                        </Link>
                        <Link href="/projects" className="hover:text-blue-400">
                            Projets
                        </Link>
                        <Link href="/contact" className="hover:text-blue-400">
                            Contact
                        </Link>
                        <Link href="/memoire" className="hover:text-blue-400">
                            Mémoire
                        </Link>
                    </div>
                    <div className="text-right">
                        {currentTime}
                    </div>
                </div>
            </div>
        </nav>
    );
}