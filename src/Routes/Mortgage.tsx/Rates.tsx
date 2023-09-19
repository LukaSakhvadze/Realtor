import React from "react";
import styles from "./MortgageCss/Rates.module.css";
import {
  arrowSvg,
  ratesList1,
  ratesList2,
  lendersConnectionList,
} from "../../Consts/rates.consts";
import { Link, useNavigate } from "react-router-dom";

function Rates() {
  const navigate = useNavigate();
  return (
    <div className={styles.rates}>
      <div className={styles.container}>
        <h2>Rates</h2>
        <p>
          Compare up-to-date mortgage rates and find one that's right for you.
        </p>
        <div className={`${styles.ratesList} ${styles.ratesList1}`}>
          {ratesList1.map((rate) => (
            <div
              className={styles.box}
              key={rate.id}
              onClick={() => navigate("/")}
            >
              <div>
                <h3>{rate.term}</h3>
                {arrowSvg}
              </div>
              <h2>{rate.percent}</h2>
            </div>
          ))}
        </div>
        <div className={styles.mortgagesOfLosAngeles}>
          <Link to="/">Find all mortgages in Los Angeles, CA</Link>
        </div>
        <p>Advertising disclosure</p>
        <p className={styles.moreInfo}>
          Average rates data provided by Icanbuy, LLC. for
          <Link to="https://widgets.icanbuy.com/disclaimer.htm" target="_blank">
            more information on rates and product details.
          </Link>
        </p>
        <hr></hr>
        <h3>Thinking of refinancing or using the equity in your home?</h3>
        <div className={`${styles.ratesList} ${styles.ratesList2}`}>
          {ratesList2.map((rate) => (
            <div className={styles.box} onClick={() => navigate("/")} key={rate.id}>
              <img src={rate.picture}></img>
              <div>
                <h4>{rate.h4}</h4>
                <p>{rate.p}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Connect with a lender</h2>
        <div className={`${styles.ratesList} ${styles.ratesList3}`}>
          {lendersConnectionList.map((lenderConnection) => (
            <div className={styles.box} onClick={() => navigate("/")} key={lenderConnection.id}>
              <img src={lenderConnection.picture}></img>
              <div>
                <h4>{lenderConnection.h4}</h4>
                <p>{lenderConnection.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rates;
