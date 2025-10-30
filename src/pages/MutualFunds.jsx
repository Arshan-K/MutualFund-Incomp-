import React, { useState, useEffect } from 'react'
import FundCard from '../components/FundCard'
// import '../styles/MutualFunds.css'

export default function MutualFunds() {
  const [funds, setFunds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchFunds() {
      try {
        setLoading(true)
        const response = await fetch('https://api.mfapi.in/mf?limit=100&offset=0')
        const json = await response.json()
        // Suppose json is like { data: [ … ] } or similar — adapt as per API
        const list = json.data || json // adjust accordingly
        // Map or transform the data to shape: name, category, nav, return1Y, link
        const transformed = list.map(item => ({
          name: item.schemeName || item.scheme_name,
          nav: item.nav || item.latest_nav,  // adapt
          category: item.scheme_category,
          Growth: item.isinGrowth || item.isin_growth,
          link: `https://www.moneycontrol.com/mutual-funds/nav/${encodeURIComponent(item.scheme_name)}`
        }))
        setFunds(transformed)
      } catch (err) {
        console.error(err)
        setError('Failed to load funds')
      } finally {
        setLoading(false)
      }
    }

    fetchFunds()
  }, [])

  if (loading) return <p>Loading funds…</p>
  if (error) return <p>{error}</p>

  return (
    <div className="mutual-funds">
      <h2>All Mutual Funds</h2>
      <div className="fund-list">
        {funds.map(fund => <FundCard key={fund.name} fund={fund} />)}
      </div>
    </div>
  )
}
