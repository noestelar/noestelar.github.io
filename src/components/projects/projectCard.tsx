import React from 'react';

interface ProjectCardProps {
  children: React.ReactNode;
  title: string;
  url?: string;
  thumbnail: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children, title, url, thumbnail }) => {
  return (
    <div className="overflow-hidden text-center rounded-lg shadow-md dark:bg-grayed-100 bg-slate-100 backdrop-blur-sm">
      {thumbnail && (
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-auto"
          loading="lazy"
        />
      )}
      <div className="px-6 py-5 ">
        <div className="mb-2 text-lg font-bold text-black dark:text-white">
          {title ? title : ""}
        </div>
        <p className="text-base text-black dark:text-white ">{children}</p>
      </div>
    </div>
  );
};

export default ProjectCard;