import React from 'react'

const skills = [
  'Network Security',
  'Intrusion Detection',
  'Python',
  'Flask',
  'Machine Learning',
  'Cryptography',
  'C++',
  'Data Analysis'
]

export default function Skills(){
  return (
    <section id="skills" className="container section">
      <h3>Skills</h3>
      <ul className="skills-grid">
        {skills.map(s => <li key={s} className="skill">{s}</li>)}
      </ul>
    </section>
  )
}
