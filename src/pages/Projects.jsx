import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='text-[#915eff]'>Projects</span> <br />

      </h1>
      <div className='mt-8'>
        <p className='text-slate-300/80'>
          I’ve worked on a variety of projects that combine <span className='text-[#915eff]'>software development</span>, <span className='text-[#915eff]'>web technologies</span>, <span className='text-[#915eff]'>artificial intelligence</span>, and <span className='text-[#915eff]'>game development</span>. These projects range from <span className='text-[#915eff]'>full-stack web applications</span> and <span className='text-[#915eff]'>database-driven systems</span> to <span className='text-[#915eff]'>interactive games</span> and <span className='text-[#915eff]'>machine learning applications</span>. Through each project, I’ve gained hands-on experience designing solutions, developing features, working with <span className='text-[#915eff]'>APIs</span> and <span className='text-[#915eff]'>databases</span>, and solving technical challenges. My goal with every project is not only to build something functional, but also to continuously improve my <span className='text-[#915eff]'>programming skills</span> and explore new technologies.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-1/2 h-1/2 object-contain'
                  />
                </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                 to={project.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="font-semibold text-blue-600">
                Live Link
                </Link>
                <img
                 src={arrow}
                 alt='arrow'
                 className='w-4 h-4 object-contain'
                 />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects