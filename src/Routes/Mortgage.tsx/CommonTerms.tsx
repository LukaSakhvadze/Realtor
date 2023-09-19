import React from "react";
import styles from "./MortgageCss/CommonTerms.module.css";
import { termsList } from "../../Consts/commonTerms.consts";

function CommonTerms() {
  return (
    <div className={styles.CommonTerms}>
      <h2>CommonTerms</h2>
      <div className={styles.container}>
        {termsList.map((term) => (
          <div className={styles.box} key={term.id}>
            <p>{term.title}</p>
            <p>{term.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommonTerms;
