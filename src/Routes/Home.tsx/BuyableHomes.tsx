import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../GenericCss/RealEstateLists.module.css";
import {
  buyableHomeLists,
  view,
  squareSvg,
  settings,
  location,
} from "../../Consts/buyableHomesList.consts";

function BuyableHomesList() {
  return (
    <div className={styles.realEstateLists}>
      {buyableHomeLists.map((buyableHomeList) => (
        <div className={styles.container} key={buyableHomeList.id}>
          <div className={styles.heading}>
            <h2>{buyableHomeList.title}</h2>
            <Link to="/">{view}</Link>
          </div>
          <Slider {...settings} className={styles.slider}>
            {buyableHomeList.items.map((buyableHome) => (
              <div className={styles.boxList} key={buyableHome.id}>
                <div className={styles.box}>
                  <img src={buyableHome.image} alt=""></img>
                  <div
                    className={
                      styles[buyableHome.status.length > 1 ? "status" : ""]
                    }
                  >
                    {buyableHome.status}
                  </div>
                  <div className={styles.info}>
                    <div>
                      <span>{squareSvg}</span> {buyableHome.description}
                    </div>
                    <h2>{buyableHome.cost}</h2>
                    <div className={styles.area}>
                      <p className={styles.areaInfo}><span>{buyableHome.bedCount}</span>bed</p>
                      <p className={styles.areaInfo}><span>{buyableHome.bathCount}</span> bath</p>
                      <p className={styles.areaInfo}><span>{buyableHome.area}</span> sqft</p>
                    </div>
                    <p>{buyableHome.address}</p>
                    <p>{location}</p>
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

export default BuyableHomesList;
