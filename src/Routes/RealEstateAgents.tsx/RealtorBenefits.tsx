import React from "react";
import styles from "./RealEstateAgentsCss/RealtorBenefits.module.css";
import styles2 from "./RealEstateAgentsCss/MainContainer.module.css";
import { benefitsList } from "../../Consts/realtorBenefitsList.consts";
import { Link } from "react-router-dom";

function RealtorBenefits() {
  return (
    <div className={`${styles.realtorBenefits} ${styles2.mainContainer}`}>
      <h2>
        Some benefits of using a REALTOR<sup>®</sup>
      </h2>
      <div className={styles.benefitsList}>
        {benefitsList.map((benefit) => (
          <div className={styles.box} key={benefit.id}>
            <div>
              <img src={benefit.image} alt=""></img>
            </div>
            <p>
              {benefit.text.beforeSup}
              {benefit.text.sup}
              {benefit.text.afterSup}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.readMore}>
        <Link to="/">Read more</Link>
      </div>
    </div>
  );
}

export default RealtorBenefits;
