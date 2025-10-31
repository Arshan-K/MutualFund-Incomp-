import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <div className="about">
      <h2 className="premium">About Us</h2>

      <p>At <span className="cursive">Mutual Fund Info</span>, our mission is simple: make investing approachable. We break down complex topics into clear, digestible insights so you can make smarter long-term decisions.</p>

      <p><em>Not financial advice.</em> The information on this site is educational and should not replace professional guidance.</p>

      <p className="signature">— The <span className="cursive">Mutual Fund Info</span> team</p>
    </div>
  )
}
