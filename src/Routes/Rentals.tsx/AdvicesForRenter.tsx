import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../GenericCss/RealEstateLists.module.css";
import { settings } from "../../Consts/buyableHomesList.consts";
import { adviceListForRenter } from "../../Consts/adviceListForRenter.consts";

function AdvicesForRenter() {
  return (
    <div className={styles.oneLineList}>
      <div className={styles.realEstateLists}>
        <div className={styles.container}>
          <Slider {...settings} className={styles.slider}>
            {adviceListForRenter.map((adviceForRenter) => (
              <div className={styles.boxList} key={adviceForRenter.id}>
                <div className={styles.box}>
                  <img src={adviceForRenter.image} alt=""></img>
                  <p>{adviceForRenter.p}</p>
                  <h4 className={styles.status}>{adviceForRenter.title}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AdvicesForRenter;
