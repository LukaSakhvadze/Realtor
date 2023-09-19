import React, { useState } from "react";
import styles from "./MyHomeCss/MarketListings.module.css";
import { Link } from "react-router-dom";
import { arrowSvg } from "../../Consts/rates.consts";
import {
  marketListing1,
  marketListing2,
} from "../../Consts/marketListings.consts";

function MarketListings() {
  const [shown, setShown] = useState(false);
  return (
    <div className={styles.marketListings}>
      <div className={styles.title} onClick={() => setShown(!shown)}>
        <h3>Explore Off market listings</h3>
        <span className={styles[shown ? "upwards" : ""]}>{arrowSvg}</span>
      </div>
      <div className={shown ? styles.container : "off"}>
        <div className={styles.box}>
          {marketListing1.map((marketListing) => (
            <ul key={marketListing.id}>
              <li>
                <Link to={marketListing.link}>{marketListing.content}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div className={styles.box}>
          {marketListing2.map((marketListing) => (
            <ul key={marketListing.id}>
              <li>
                <Link to={marketListing.link}>{marketListing.content}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketListings;
