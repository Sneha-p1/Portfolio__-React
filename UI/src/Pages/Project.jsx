import React from 'react'
import Projects from '../Components/Projects'
import Project1 from '../Components/Project1'
import Project2 from '../Components/Project2'
import Project3 from '../Components/Project3'


const Project = () => {
  return (
      <>
    <section className="py-20 px-10 bg-white dark:bg-black text-black dark:text-white">
        <h2 id="projects" className="text-4xl font-bold text-center text-orange-500 dark:text-orange-400 mb-10">Projects</h2>
        <div className='flex'> 
              {/* <Projects />
              <Projects />
              <Projects /> */}
            <Project1 />
            <Project2 />
            <Project3/>
        </div>
    </section>
      </>
  )
}

export default Project