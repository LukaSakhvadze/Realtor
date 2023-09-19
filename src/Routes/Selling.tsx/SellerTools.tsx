import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SellingCss/SellerTools.module.css'

function SellerTools() {
  return (
    <div className={styles.sellerTools}>
        <div className={styles.container}>
          <h2>Seller tools</h2>
        <div>
          <h3>TTrack your home value with <Link to="/">My Home</Link></h3>
          <h3>Explore your selling options in the <Link to="/">Seller's Marketplace</Link></h3>
          <h3>Find an agent to list your home with <Link to="/">Agent Connection</Link></h3>
        </div>
        </div>
    </div>
  )
}

export default SellerTools