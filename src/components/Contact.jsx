import React, {useState} from 'react'

export default function Contact(){
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="container section">
      <h3>Contact</h3>
      <p>If you'd like to reach out, use the contact form below. To activate the form, paste your Formspree action URL into <code>src/config/formspree.js</code> and restart the dev server.</p>

      {!submitted ? (
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true)}}
          action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" required />
          </label>
          <div className="form-actions">
            <button className="btn" type="submit">Send</button>
            <a className="link" href="mailto:prachivk30@gmail.com">Or email directly</a>
          </div>
        </form>
      ) : (
        <div className="form-success">Thanks — your message has been submitted (local demo). Replace the Formspree action URL to enable live submissions.</div>
      )}
    </section>
  )
}
