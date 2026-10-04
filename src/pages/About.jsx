import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills } from '../constants/index.js'
import CTA from '../components/CTA.jsx';
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='text-[#915eff]'>Hendrix Leonard E. Maligaya</span> <br />

      </h1>

      <div>
        <p>A passionate <span className='text-[#915eff]'>Full Stack Developer</span> based in <span className='text-[#915eff]'>Philippines. </span>
        My recent achievement was winning Top 7 in a Global Game Development Competition called <a href='https://qsimpact.org/skillschallenge'><span className='text-[#915eff]' >QSImpACT Skills Challenge 2025 </span></a>
        where I was able to create a game called <span className='text-[#915eff]'>"Lady Makiling Defense"</span> with my team. I am currently looking for a job as a 
        <span className='text-[#915eff]'> Game Developer</span> or <span className='text-[#915eff]'> Full Stack Developer</span> where I can utilize my skills and knowledge to contribute to the growth of the company.</p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-15'>
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
              <p className='text-center mt-2 py-20 text-white'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>My Experiences</h3>
        <VerticalTimeline lineColor='rgba(255, 255, 255, 0.06)'>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              dateClassName="ext-xl font-poppins font-semibold"
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
              </div>}

              iconStyle={{ 
                background: experience.iconBg,
                boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.06)',
 
              }}
              contentStyle={{
                color: '##1d1836',
                background: 'transparent',
                padding: 0,
                boxShadow: 'none',
                borderBottom: '8px',
                borderStyle: 'solid',
                borderRadius: '0.75rem',
                borderColor: experience.iconBg,

              }}
              >
                <div className="timeline-card w-full rounded-xl">
                  <div className="btn-front rounded-xl p-5">
                    <h3 className='text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-white-500 font-medium font-base' style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                    <ul className='mt-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className='text-white-500/50 font-normal pl-1 text-sm'>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About