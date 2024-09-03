import React from 'react';

const Project1 = () => {
  const projects = [
    {
      title: 'KBA course App',
      description: 'A comprehensive platform for learning about blockchain technology ',
      tags: ['React', 'CSS', 'Javascript', 'MongoDB', 'Express'],
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 px-10 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-amber-200 dark:bg-gray-800 text-black dark:text-white m-4 shadow-lg transform transition duration-300 hover:scale-105">
            <img className="w-full h-54" src="/src/assets/KBAcourse.png" alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-orange-500 dark:text-orange-400">{project.title}</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">{project.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project1;
