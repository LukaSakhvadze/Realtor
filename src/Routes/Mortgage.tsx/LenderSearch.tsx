import React,{useState} from "react";
import styles from "./MortgageCss/LenderSearch.module.css";
import searchStyles from "../../GenericCss/SearchInput.module.css";
import { deleteSvg} from "../../Consts/homePage.const";
import { arrowSvg } from "../../Consts/rates.consts";

function LenderSearch() {
    const [address,setAddress]=useState("")
 
  return (
    <div className={styles.lenderSearch}>
      <div className={styles.container}>
        <h2>Get Pre-Approved</h2>
        <p>
          Find a lender who can offer competitive mortgage rates and help you
          with pre-approval
        </p>
        <div className={searchStyles.searchDiv} style={{width:"80%",fontSize:"80%"}}>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder={
              "City or ZIP code"
            }
          ></input>
          <div className={searchStyles.buttons}>
            <span
              className={address.length > 0 ? undefined : "off"}
              onClick={() => setAddress("")}
            >
              {deleteSvg}
            </span>
            <span style={{color:"white"}}>{arrowSvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LenderSearch;
