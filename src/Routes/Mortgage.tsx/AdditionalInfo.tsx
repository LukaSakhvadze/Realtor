import React from "react";
import styles from "./MortgageCss/AdditionalInfo.module.css";
import { Link } from "react-router-dom";

function AdditionalInfo() {
  return (
    <div className={styles.additionalInfo}>
      <p>
        Looking for the best mortgage? Let realtor.com® help you successfully
        navigate the world of home finance. Our mortgage center offers several{" "}
        <Link to="/">financial calculators</Link>, free tools, and lending
        products to help you through the mortgage process. Use our{" "}
        <Link to="/">home affordability calculator</Link> to help you figure out
        how much home you can afford. With our{" "}
        <Link to="/">mortgage calculator</Link>, you can estimate your monthly
        payments. Is it better to rent or buy? Realtor.com® can help you make
        the best home finance decision with our useful{" "}
        <Link to="/">rent vs. buy calculator</Link>, which helps you estimate
        the difference between renting a property or buying a home over time.
        Before you start searching for the perfect home loan, find the best{" "}
        <Link to="/">mortgage rates and loans</Link> at realtor.com®. For{" "}
        <Link to="/">additional resources</Link> and advice, browse our
        extensive library of <Link to="/">finance articles</Link> and get the
        information needed about mortgage rates, mortgage lenders, credit
        scores, home insurance and refinance.
      </p>
    </div>
  );
}

export default AdditionalInfo;
