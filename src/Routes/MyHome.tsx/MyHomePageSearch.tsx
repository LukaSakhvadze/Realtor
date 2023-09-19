import React, { useState, useEffect } from "react";
import styles from "./MyHomeCss/MyHomePageSearch.module.css";
import searchStyles from "../../GenericCss/SearchInput.module.css";
import { deleteSvg } from "../../Consts/homePage.const";

function MyHomePageSearch() {
  const [address, setAddress] = useState("");
  const [width,setWidth]=useState(window.innerWidth)
  const changeWidth=()=>{
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize",changeWidth)
  
    return () => {
      window.removeEventListener("resize",changeWidth)
    }
  }, [width])
  
  return (
    <div className={styles.myHomePageSearch}>
      <div className={styles.container}>
        <h1 style={{fontSize:"370%"}}>Track your home value with multiple estimates</h1>
        <div className={searchStyles.searchDiv}>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder={width>450?"Enter your home address":"Home address"}
            
          ></input>
          <div className={searchStyles.buttons}>
            <span
              className={address.length > 0 ? undefined : "off"}
              onClick={() => setAddress("")}
            >
              {deleteSvg}
            </span>
            <span style={{ width: "7rem", borderRadius: "25px" }}>
              Get started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHomePageSearch;
