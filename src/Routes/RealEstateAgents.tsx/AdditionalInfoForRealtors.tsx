import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RealEstateAgentsCss/AdditionalInfoForRealtors.module.css";
import styles1 from "./RealEstateAgentsCss/GuidesForSelling.module.css";
import AdditionalResources from "../../GenericComponents/AdditionalResources";
import {
  additionalResourceLinks,
  additionalOffersList,
  hiddenAdditionalOffersList,
} from "../../Consts/additionalResources4.consts";
import { dropdownArrowSvg } from "../../Consts/additionalResources.consts";

function AdditionalInfoForRealtors() {
  const additionalResourceListNumber = 4;
  const [shown, setShown] = useState(false);
  return (
    <div
      className={`${styles.additionalInfoForRealtors} ${styles1.guidesForSellingHome}`}
    >
      <h2>
        For REALTORS<sup>®</sup>
      </h2>
      <div className={styles.container}>
        <p>
          Access innovative tools, leverage advanced methods for marketing and
          stay on top of current trends from the National Association of
          REALTORS<sup>®</sup>.
        </p>
        <ul>
          {additionalResourceLinks.map((additionalResourceLink) => (
            <li key={additionalResourceLink.id}>
              <Link to={additionalResourceLink.link} target="_Blank">
                {additionalResourceLink.text.beforeSup}
                {additionalResourceLink.text.sup}
                {additionalResourceLink.text.afterSup}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AdditionalResources
        additionalResourceListNumber={additionalResourceListNumber}
      ></AdditionalResources>
      <ul className={styles.additionalOffers}>
        {additionalOffersList.map((additionalOffer) => (
          <li key={additionalOffer.id}>{additionalOffer.text}</li>
        ))}
        {shown &&
          hiddenAdditionalOffersList.map((hiddenAdditionalOffer) => (
            <li key={hiddenAdditionalOffer.id}>{hiddenAdditionalOffer.text}</li>
          ))}
        <p className={styles.dropdown} onClick={() => setShown(!shown)}>
          {shown?"VIEW LESS":"Show More"}
          <span className={styles[shown ? "" : "downwards"]}>
            {dropdownArrowSvg}
          </span>
        </p>
      </ul>
    </div>
  );
}

export default AdditionalInfoForRealtors;
