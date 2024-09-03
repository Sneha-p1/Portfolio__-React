import React from 'react';
import ProjectCard from './ProjectCard1';

const projects = [
  {
    title: 'Project title',
    description: 'Project description',
    tags: ['React', 'CSS', 'Typescript'],
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="py-20 px-10 bg-white dark:bg-black text-black dark:text-white">
      
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
