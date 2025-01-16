import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 mt-10">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm text-white">&copy; 2024 Damien Allaert.</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/DamienAllaert" target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" alt="GitHub" className="h-6 w-6"/>
                    </a>
                    <a href="https://www.linkedin.com/in/damienallaert" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.webp" alt="GitHub" className="h-6 w-6"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}