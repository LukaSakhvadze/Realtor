import React from 'react'
import styles from './SellingCss/AgentsAndHomeEquity.module.css'
import { Link } from 'react-router-dom'

function AgentsAndHomeEquity() {
  return (
    <div className={styles.agentsAndHomeEquity}>
        <div className={`${styles.box} ${styles.localAgents}`}>
            <p><strong>Looking for a local agent?</strong> Browse reviews and ratings in our</p>
            <p><Link to='/'>Find a REALTOR© directory.</Link></p>
        </div>
        <div className={`${styles.box} ${styles.homeEquity}`}>
            <div className={styles.homeSvg}>
                <img src='https://static-mortgage.rdc.moveaws.com/static/images/ons/Illustration.svg'></img>
            </div>
            <div className={styles.info}>
                <h2>Find out how much home equity you can use</h2>
                <p>If you're looking to fund a home renovation project or a down payment on a new place, the equity in your home could help. Connect with a lender to see if you qualify.</p>
                <div className={styles.infoLinks}>
                    <Link className={styles.lenderLink} to="/">Connect with a lender</Link>
                    <Link to="/" target="_blank">Latest home equity rates</Link>
                </div>
                <p>Advertising disclosure</p>
            </div>
        </div>
    </div>
  )
}

export default AgentsAndHomeEquity