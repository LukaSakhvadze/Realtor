import React from "react";
import { headerSvg } from "../Consts/homePage.const";
import styles from "../GenericCss/Header.module.css";
import {Link} from "react-router-dom"

type HeaderProps={
  underlined:string,
  setUnderlined:React.Dispatch<React.SetStateAction<string>>
}

function Header({underlined,setUnderlined}:HeaderProps) {
  
  return (
    <header className={styles.header}>
      <nav>
        <div><Link to="/">{headerSvg}</Link></div>
        <ul>
          <li className={styles[underlined==="buy"?"underlined":""]} onClick={()=>setUnderlined("buy")}><Link to="/">Buy</Link></li>
          <li className={styles[underlined==="sell"?"underlined":""]} onClick={()=>setUnderlined("sell")}><Link to="/sell">Sell</Link></li>
          <li className={styles[underlined==="rent"?"underlined":""]} onClick={()=>setUnderlined("rent")}><Link to="/rentals">Rent</Link></li>
          <li className={styles[underlined==="mortgage"?"underlined":""]} onClick={()=>setUnderlined("mortgage")}><Link to="/mortgage">Mortgage</Link></li>
          <li className={styles[underlined==="realestateagents"?"underlined":""]} onClick={()=>setUnderlined("realestateagents")}>
          <Link to="/realestateagents">Find Realtors<span>®</span></Link>
          </li>
          <li className={styles[underlined==="myhome"?"underlined":""]} onClick={()=>setUnderlined("myhome")}><Link to="/myhome">My Home</Link></li>
          <li className={styles[underlined==="news"?"underlined":""]} onClick={()=>setUnderlined("news")}><Link to="/">News & Insights</Link></li>
        </ul>
        <ul>
          <li><Link to="/">Manage Rentals</Link></li>
          <li><Link to="/">Advertise</Link></li>
        </ul>
        <ul>
          <li><Link to="/">Log in</Link></li>
          <li><Link to="/">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
