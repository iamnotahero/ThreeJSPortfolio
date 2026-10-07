import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills, achievements } from '../constants/index.js'
import { hero, meta, youcode } from '../assets/images';
import CTA from '../components/CTA.jsx';



const About = () => {
  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState(null);
  const [achievementPage, setAchievementPage] = useState(0);

  const openAchievement = (index) => {
    console.log('Opening achievement:', index);
    setSelectedAchievementIndex(index);
    setAchievementPage(0);
  };

  const closeAchievement = () => {
    setSelectedAchievementIndex(null);
    setAchievementPage(0);
  };

  const currentAchievement = selectedAchievementIndex !== null ? achievements[selectedAchievementIndex] : null;

  const goToPage = (direction) => {
    if (!currentAchievement) return;
    setAchievementPage((currentPage) => {
      const nextPage = currentPage + direction;
      if (nextPage < 0) return 0;
      if (nextPage >= currentAchievement.pages.length) return currentAchievement.pages.length - 1;
      return nextPage;
    });
  };

  const goToAchievement = (direction) => {
    if (selectedAchievementIndex === null) return;
    const nextIndex = (selectedAchievementIndex + direction + achievements.length) % achievements.length;
    setSelectedAchievementIndex(nextIndex);
    setAchievementPage(0);
  };

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
        <h3 className='subhead-text'>My Achievements</h3>
        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {achievements.map((achievement) => (
            <button
              key={achievement.title}
              type='button'
              onClick={() => openAchievement(achievements.indexOf(achievement))}
              className='group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-[0_0_30px_rgba(145,94,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#915eff]/40'
            >
              <div className='overflow-hidden'>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className='h-56 w-full object-cover transition duration-500 group-hover:scale-105'
                />
              </div>
              <div className='p-5'>
                <h4 className='text-xl font-semibold text-white'>{achievement.title}</h4>
                <p className='mt-3 text-sm leading-6 text-slate-300/80'>{achievement.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {currentAchievement && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm'>
          <div className='relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#9cc8ff]/35 bg-[#0b1630] shadow-[0_0_60px_rgba(93,127,255,0.25)] sm:rounded-[28px]'>
            <div className='flex shrink-0 items-center justify-between gap-3 border-t border-white/10 px-4 py-4 sm:px-5'>
              <div>
                <p className='text-xs font-medium uppercase tracking-[0.35em] text-[#915eff]'>
                  Achievement {selectedAchievementIndex + 1} / {achievements.length}
                </p>
                <p className='mt-2 text-sm text-slate-300/70'>Page {achievementPage + 1} / {currentAchievement.pages.length}</p>
              </div>

              <button
                type='button'
                onClick={closeAchievement}
                className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white transition hover:bg-white/10'
              >
                Close
              </button>
            </div>

            <div className='grid min-h-0 flex-1 grid-cols-1 overflow-y-auto md:grid-cols-2'>
              <img
                src={currentAchievement.pages[achievementPage].image || currentAchievement.image}
                alt={currentAchievement.title}
                className={`h-48 w-full bg-[#050d1a00] sm:h-56 md:h-full md:min-h-[30rem] ${
                  currentAchievement.pages[achievementPage].image ? 'object-contain' : 'object-cover'
                }`}
              />

              <div className='flex flex-col justify-center p-5 sm:p-8'>
                <p className='text-xs font-medium uppercase tracking-[0.3em] text-[#915eff]'>Featured Story</p>
                <h4 className='mt-3 text-2xl font-semibold text-white md:text-3xl'>
                  {currentAchievement.title}
                </h4>
                <h5 className='mt-5 text-xl font-semibold text-white'>
                  {currentAchievement.pages[achievementPage].heading}
                </h5>
                <p className='mt-4 text-base leading-8 text-slate-300/80'>
                  {currentAchievement.pages[achievementPage].text}
                </p>
                  {(currentAchievement.websiteLink || currentAchievement.gameLink) && (
                    <div className='mt-6 flex flex-wrap gap-3'>
                      {currentAchievement.websiteLink && (
                        <a
                          href={currentAchievement.websiteLink}
                          target='_blank'
                          rel='noreferrer'
                          className='rounded-full bg-[#915eff] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7d4ae8]'
                        >
                          Visit Website
                        </a>
                      )}

                      {currentAchievement.gameLink && (
                        <a
                          href={currentAchievement.gameLink}
                          target='_blank'
                          rel='noreferrer'
                          className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10'
                        >
                          Play Game
                        </a>
                      )}
                    </div>
                  )}
                <div className='mt-8 flex flex-wrap gap-3'>
                  <button
                    type='button'
                    onClick={() => goToPage(-1)}
                    className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10'
                  >
                    Previous
                  </button>
                  <button
                    type='button'
                    onClick={() => goToPage(1)}
                    className='rounded-full bg-[#915eff] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7d4ae8]'
                  >
                    Next
                  </button>
                </div>

                <div className='mt-6 flex gap-2'>
                  {currentAchievement.pages.map((_, index) => (
                    <button
                      key={index}
                      type='button'
                      onClick={() => setAchievementPage(index)}
                      className={`h-2.5 w-8 rounded-full transition ${
                        achievementPage === index ? 'bg-[#915eff]' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between border-t border-white/10 px-5 py-4'>
              <button
                type='button'
                onClick={() => goToAchievement(-1)}
                className='text-sm text-slate-300 transition hover:text-white'
              >
                Previous Achievement
              </button>
              <button
                type='button'
                onClick={() => goToAchievement(1)}
                className='text-sm text-slate-300 transition hover:text-white'
              >
                Next Achievement
              </button>
            </div>
          </div>
        </div>
      )}

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