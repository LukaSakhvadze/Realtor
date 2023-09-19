import React, { useState, useEffect } from "react";
import img1 from "../../Images/offers1.jpg";
import img2 from "../../Images/offers2.jpg";
import styles from "./HomeCss/Offers.module.css";
import searchStyles from "../../GenericCss/SearchInput.module.css";
import { Link } from "react-router-dom";
import { searchSvg, deleteSvg } from "../../Consts/homePage.const";

function Offers() {
  const [address, setAddress] = useState("");
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
    <div className={styles.offers}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <img src={img1} alt=""></img>
        </div>
        <div className={styles.info}>
          <h2>Need a home loan? Get pre-approved</h2>
          <h4>
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </h4>
          <p>
            <Link to="/">Get pre-approved now</Link>
          </p>
          <p>Advertising disclosure</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Get Local Info</h2>
          <h4>
            Does it have pet-friendly rentals? How are the schools? Get
            important local information on the area you're most interested in.
          </h4>
          <div
            className={`${searchStyles.searchDiv} ${searchStyles.offersSearchDiv}`}
          >
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder={
                width >= 1000
                  ? "Address, School, City, Zip or Neighborhood"
                  : width >= 700
                  ? "Address,School,City...."
                  : "Address"
              }
            ></input>
            <div className={searchStyles.buttons}>
              <span
                className={address.length > 0 ? undefined : "off"}
                onClick={() => setAddress("")}
              >
                {deleteSvg}
              </span>
              <span>{searchSvg}</span>
            </div>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={img2} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Offers;
