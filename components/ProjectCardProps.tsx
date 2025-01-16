import React from 'react';

interface ProjectCardProps {
    title: string;
    imageUrl: string;
    githubUrl: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, githubUrl, description }) => {
    return (
        <div className="border rounded-lg shadow-lg p-4">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Voir sur Github
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;