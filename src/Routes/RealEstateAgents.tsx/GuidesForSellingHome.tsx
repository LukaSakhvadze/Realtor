import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles1 from "../../GenericCss/RealEstateLists.module.css";
import styles2 from "./RealEstateAgentsCss/GuidesForSelling.module.css";
import { guidesList } from "../../Consts/guidesForSellingHome.consts";
import { settings2 } from "../../Consts/guidesForSellingHome.consts";

function GuidesForSellingHome() {
  return (
    <div
      className={`${styles1.realEstateLists} ${styles2.guidesForSellingHome}`}
    >
      <div className={`${styles1.container} ${styles2.container}`}>
        <Slider {...settings2} className={styles1.slider}>
          {guidesList.map((guidesList) => (
            <div className={styles1.boxList} key={guidesList.id}>
              <div className={`${styles1.box} ${styles2.box}`}>
                <img src={guidesList.image} alt=""></img>
                <p style={{ padding: "0 3%" }}>{guidesList.p}</p>
                <h4 className={styles1.status}>{guidesList.title}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GuidesForSellingHome;
