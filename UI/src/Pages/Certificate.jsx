import React from 'react'
import Certificate1 from '../Components/Certificate1'
import Certificate2 from '../Components/Certificate2'
import Certificate3 from '../Components/Certificate3'


const Certificate = () => {
  return (
      <>
    <section className="py-20 px-10 bg-white dark:bg-black text-black dark:text-white">
        <h2 id="projects" className="text-4xl font-bold text-center text-orange-500 dark:text-orange-400 mb-10">Certificate</h2>
        <div className='flex'> 
                  <Certificate1 />
                  <Certificate2 />
                  <Certificate3/>
        </div>
    </section>
      </>
  )
}

export default Certificate