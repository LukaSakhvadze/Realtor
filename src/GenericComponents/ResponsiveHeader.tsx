import React from 'react'
import styles from '../GenericCss/ResponsiveHeader.module.css'
import { Link } from 'react-router-dom'
import { menuIconSvg,headerSvg,userLoginSvg } from '../Consts/homePage.const'

function ResponsiveHeader() {
  return (
    <div className={styles.responsiveHeader}>
        <div>{menuIconSvg}</div>
        <div><Link to="/">{headerSvg}</Link></div>
        <div><Link to="/">{userLoginSvg}</Link></div>
    </div>
  )
}

export default ResponsiveHeader