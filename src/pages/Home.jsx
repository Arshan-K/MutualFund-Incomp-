import React from 'react'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home">
      <h1 className="premium">Welcome to <span className="cursive">MF Corporation</span></h1>
      <p className="lead">Discover thoughtfully curated mutual funds, learn the basics of investing, and build a portfolio with confidence. Whether you're starting out or optimizing an existing portfolio, we'll help you make more informed choices.</p>

      <p className="muted">Start with our <em>top-ranked</em> schemes and explore performance, categories, and key metrics.</p>

      <div className="cta">
  <a className="btn-gold" href="/mutual-funds">Explore Funds</a>
        <a className="btn-ghost" href="/about">About Us</a>
      </div>
    </div>
  )
}
