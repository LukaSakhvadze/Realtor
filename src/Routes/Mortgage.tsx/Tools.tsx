import React from 'react'
import styles from '../Mortgage.tsx/MortgageCss/Tools.module.css'
import { toolsList } from '../../Consts/Tools.consts'
import { useNavigate } from 'react-router-dom'

function Tools() {
    const navigate=useNavigate()
  return (
    <div className={styles.tools}>
        <h2>Tools</h2>
        <div className={styles.container}>
            {toolsList.map(tool=>(
                <div className={styles.box} key={tool.id} onClick={()=>navigate("/")}>
                    <img src={tool.picture} alt=''></img>
                    <div className={styles.info}>
                        <h3>{tool.h3}</h3>
                        <p>{tool.p}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tools