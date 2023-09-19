import React from "react";
import styles from "./MyHomeCss/MyHome.module.css";
import { homeSvgLink } from "../../Consts/myHome.consts";
import { homeOffersList } from "../../Consts/myHome.consts";

function MyHome() {
  return (
    <div className={styles.myHome}>
      <h2>My home</h2>
      <div className={styles.homeField}>
        <img src={homeSvgLink} alt=""></img>
        <p>Your home will appear here</p>
      </div>
      <div className={styles.container}>
        {homeOffersList.map((homeOffer) => (
          <div className={styles.box} key={homeOffer.id}>
            <img src={homeOffer.img} alt=""></img>
            <h3>{homeOffer.title}</h3>
            <p>{homeOffer.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyHome;
