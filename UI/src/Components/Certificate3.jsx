import React from 'react';

const Certificate3 = () => {
  const projects = [
    {
      title: 'Certified Software Tester - Software Testing',
      description: 'I completed a 4-month internship program in Software Testing at Camerinfolks Pvt. Ltd. During this time, I developed skills in both manual and automated testing.'
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 px-10 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-amber-200 dark:bg-gray-800 text-black dark:text-white m-4 shadow-lg transform transition duration-300 hover:scale-105">
            <img className="w-full h-54" src="/src/assets/Certi3.jpeg" alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-orange-500 dark:text-orange-400">{project.title}</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate3;
