import React from "react";
import styles from "./RealEstateAgentsCss/RealtorAdvantages.module.css";
import styles2 from './RealEstateAgentsCss/MainContainer.module.css'
import { Link } from "react-router-dom";
import img1 from "../../Images/realtorAdvantages1.jpg";
import img2 from "../../Images/offers1.jpg";

function RealtorAdvantages() {
  return (
    <div className={`${styles.realtorAdvantages} ${styles2.mainContainer}`}>
      <h3>Make sure your dreams are in trusted hands.</h3>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>
            The REALTOR<sup>®</sup>difference
          </h2>
          <p>
            Buying a home is the biggest investment most people will ever make,
            but not all real estate agents are equal. Find out how the
            experience and training of a REALTOR® can help you get into your
            dream home.
          </p>
          <Link to="/">Why use a REALTOR</Link>
          <Link
            to="https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/the-realtor-s-code-of-ethics-celebrates-100-years"
            target="_Blank"
          >
            What the Code of Ethics means for you
          </Link>
        </div>
        <div className={styles.box}>
          <img src={img1}></img>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <img src={img2}></img>
        </div>
        <div className={styles.box}>
          <h2>Consumer advocacy</h2>
          <p>
            The National Association of REALTORS<sup>®</sup>advocates on behalf
            of home buyers to support vibrant communities where we live and
            work.
          </p>
          <Link to="https://realtorparty.realtor/" target="_Blank">
            Learn about federal and local proposals affecting you
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RealtorAdvantages;
