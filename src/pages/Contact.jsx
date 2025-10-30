import React, { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  )
}
