import React from 'react'
import styles from './HomeCss/UniqueHomes.module.css'
import { Link } from 'react-router-dom'

function UniqueHomes() {
  return (
    <div className={styles.uniqueHomes}>
        <div>
            <h3>Unique Homes</h3>
            <h2>5 Fantastic Floating Homes You'll Want</h2>
            <h2>To Move Into Immediately</h2>
            <h3><Link to="/">Read More</Link></h3>
        </div>
    </div>
  )
}

export default UniqueHomes