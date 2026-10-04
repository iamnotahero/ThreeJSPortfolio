import React from 'react'

import { Link } from 'react-router-dom';
const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Interested in collaborating or have a project in mind?<br /> 
        Let's connect and bring your ideas to life!</p>
        <Link to="/contact" className="btn">Contact Me</Link>
    </section>
  )
}

export default CTA