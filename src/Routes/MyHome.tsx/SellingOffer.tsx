import React, { useState, useEffect } from "react";
import styles from "./MyHomeCss/SellingOffer.module.css";
import { Link } from "react-router-dom";

function SellingOffer() {
  const [width, setWidth] = useState(window.innerWidth);
  const changeWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [width]);
  return (
    <div className={styles.sellingOffer}>
      <Link
        to="https://www.realtor.com/timetosell?iid=int_rdc_myhomebanner_timetosell"
        target="_Blank"
      >
        <img
          src={
            width > 750
              ? "https://static.rdc.moveaws.com/images/sell/banners/best-time-to-sell.svg"
              : "https://static.rdc.moveaws.com/images/sell/banners/best-time-to-sell-mobile.svg"
          }
          alt=""
        ></img>
      </Link>
    </div>
  );
}

export default SellingOffer;
