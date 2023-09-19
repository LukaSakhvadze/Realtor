import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../GenericCss/RealEstateLists.module.css";
import { settings } from "../../Consts/buyableHomesList.consts";
import { trendHomesList } from "../../Consts/trendHomes.consts";

function TrendHomes() {
  return (
    <div className={styles.oneLineList}>
      <div className={styles.realEstateLists}>
        <div className={styles.container}>
          <Slider {...settings} className={styles.slider}>
            {trendHomesList.map((trendHome) => (
              <div className={styles.boxList} key={trendHome.id}>
                <div className={styles.box}>
                  <img src={trendHome.image} alt=""></img>
                  <p>{trendHome.p}</p>
                  <h4 className={styles.status}>{trendHome.title}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TrendHomes;
