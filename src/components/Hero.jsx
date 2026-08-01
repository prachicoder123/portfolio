import React from 'react'

export default function Hero(){
  return (
    <section id="hero" className="hero container">
      <div className="hero-left">
        <h2>Cybersecurity Engineer & Developer</h2>
        <p>Professional Cybersecurity Portfolio — B.Tech CSE (Cyber Security). I build tools and systems for network monitoring, threat detection, and secure data handling.</p>
        <a className="btn" href="/Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
      </div>
      <div className="hero-right">
        <img src="/profile.jpg" alt="Profile" className="avatar" />
      </div>
    </section>
  )
}
