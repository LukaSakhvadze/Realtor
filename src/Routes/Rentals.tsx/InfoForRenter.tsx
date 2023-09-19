import React from "react";
import { Link } from "react-router-dom";
import styles from "./RentalCss/InfoForRenter.module.css";

function InfoForRenter() {
  return (
    <div className={styles.infoForRenter}>
      <div>
        <h3>
          What a Renter Needs to Know About a Landlord Checking Their Credit
        </h3>
        <p>
          <Link to="/">Read More</Link>
        </p>
      </div>
    </div>
  );
}

export default InfoForRenter;
