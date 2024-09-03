import React from 'react';

const ProjectCard1 = ({ title, description, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-amber-200 dark:bg-gray-800 text-black dark:text-white m-4 shadow-lg transform transition duration-300 hover:scale-105">
      <img className="w-full" src="/src/assets/KBAcourse.png" alt="Project" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-orange-500 dark:text-orange-400">KBA</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard1;
