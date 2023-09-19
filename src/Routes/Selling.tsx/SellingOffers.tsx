import React, { useState } from "react";
import styles from "./SellingCss/SellingOffers.module.css";
import searchStyles from "../../GenericCss/SearchInput.module.css";
import { sellingOffersInfo } from "../../Consts/sellingOffers.consts";
import { Link, useNavigate } from "react-router-dom";
import { deleteSvg, searchSvg } from "../../Consts/homePage.const";

function SellingOffers() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  return (
    <div className={styles.sellingOffers}>
      <div className={styles.containersList}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.title}>
              <img src={sellingOffersInfo[0].image} alt=""></img>
              <h2>{sellingOffersInfo[0].title}</h2>
              <img
                className={styles.upnestImg}
                src="https://static.rdc.moveaws.com/images/owners-sellers-ui/upnest-logo.svg"
                alt=""
              ></img>
              <p>{sellingOffersInfo[0].p}</p>
            </div>
            <div>
              <Link to={sellingOffersInfo[0].link} target="_blank">
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.title}>
              <img src={sellingOffersInfo[1].image} alt=""></img>
              <h2>{sellingOffersInfo[1].title}</h2>
              <p>{sellingOffersInfo[1].p}</p>
            </div>
            <div>
              <Link to="/">Visit Seller's Marketplace</Link>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.title}>
              <img src={sellingOffersInfo[2].image} alt=""></img>
              <h2>{sellingOffersInfo[2].title}</h2>
              <p>{sellingOffersInfo[2].p}</p>
            </div>
            <div>
              <div
                className={`${searchStyles.searchDiv} ${searchStyles.sellingOffersSearchDiv}`}
              >
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter home address"
                ></input>
                <div className={searchStyles.buttons}>
                  <span
                    className={address.length > 0 ? undefined : "off"}
                    onClick={() => setAddress("")}
                  >
                    {deleteSvg}
                  </span>
                  <span>{searchSvg}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sellingTime} onClick={() => navigate("/")}>
        <img src="https://static.rdc.moveaws.com/images/sell/banners/best-time-to-sell.svg" alt=""></img>
      </div>
    </div>
  );
}

export default SellingOffers;
