import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../GenericCss/RealEstateLists.module.css";
import styles2 from "./RentalCss/RentalHomes.module.css";
import { squareSvg, settings } from "../../Consts/buyableHomesList.consts";
import {
  view,
  rentalHomeLists,
  availSvg,
} from "../../Consts/rentalHomesList.consts";

function RentalHomes() {
  return (
    <div className={`${styles.realEstateLists} ${styles2.realEstateLists}`}>
      <div className={styles2.availEntry}>
        <div>
          <img src={availSvg} alt=""></img>
        </div>
        <p>
          Want to list your rental for free in minutes?{" "}
          <Link to="/">Learn about landlord tools by Avail</Link>
        </p>
      </div>
      {rentalHomeLists.map((rentalHomeList) => (
        <div className={`${styles.container} ${styles2.container}`} key={rentalHomeList.id}>
          <div className={styles.heading}>
            {rentalHomeList.id === 3 ? <h1>Explore Racine, WI</h1> : undefined}
            <h2>{rentalHomeList.title}</h2>
            <Link to="/">{view}</Link>
          </div>
          <Slider {...settings} className={styles.slider}>
            {rentalHomeList.items.map((rentalHome) => (
              <div className={styles.boxList} key={rentalHome.id}>
                <div className={styles.box}>
                  <img src={rentalHome.image} alt=""></img>
                  <div className={styles.info}>
                    <div>
                      <span>{squareSvg}</span> {rentalHome.description}
                    </div>
                    <h2>{rentalHome.cost}</h2>
                    <div className={styles.area}>
                      {rentalHome.type.length > 0 ? (
                        <p className={styles.areaInfo}>
                          <span>{rentalHome.type}</span>
                        </p>
                      ) : null}
                      <p className={styles.areaInfo}>
                        <span>{rentalHome.bedCount}</span>bed
                      </p>
                      <p className={styles.areaInfo}>
                        <span>{rentalHome.bathCount}</span> bath
                      </p>
                      <p className={styles.areaInfo}>
                        <span>{rentalHome.area}</span> sqft
                      </p>
                    </div>
                    <p>{rentalHome.address}</p>
                    <p>{rentalHome.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}

export default RentalHomes;
