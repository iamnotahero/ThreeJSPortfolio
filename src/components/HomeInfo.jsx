import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} alt="arrow" className='w-4 h-4 ml-2' />
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Hendrix</span><br />
            a <span className='font-semibold'>Full Stack Developer</span> and <span className='font-semibold'>Game Developer</span><br />
            </h1>
    ),
    2: (
        <InfoBox text="Worked as System Developer Intern at a company and contributed to projects and picked up many skills along the way." 
        link="/about"
        btnText="Learn more." />
        
    ),
    3: (
        <InfoBox text="I have worked on many projects and have a few of them showcased in my portfolio. Check them out!" 
        link="/projects"
        btnText="Visit my portfolio" />
    ),
    4: (
        <InfoBox text="Need a project done or looking for a developer to join your team? I am open to new opportunities and collaborations." 
        link="/contact"
        btnText="Let's talk" />
    ),
    
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo