import React from 'react'
import './FundCard.css'

export default function FundCard({ fund }) {
  return (
    <div className="fund-card">
      <h3>{fund.name}</h3>
      <p>Category: {fund.category}</p>
      <p>NAV: ₹{fund.nav}</p>
      <p>1Y Return: {fund.return1Y}%</p>
      <a href={fund.link} target="_blank" rel="noreferrer">View Details</a>
    </div>
  )
}
