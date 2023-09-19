import React from "react";
import styles from "./SellingCss/SellerGuides.module.css";
import { questionsAboutSelling } from "../../Consts/sellerGuides.consts";
import { useNavigate } from "react-router-dom";

function SellerGuides() {
  const navigate=useNavigate()
  return (
    <div className={styles.sellerGuides}>
      <div className={styles.container}>
        <h2 className={styles.title}>Seller guides</h2>
        <div className={styles.questionsList}>
          {questionsAboutSelling.map((questionAboutSelling) => (
            <div className={styles.box} onClick={()=>navigate(questionAboutSelling.link)} key={questionAboutSelling.id}>
              <div>
                <img src={questionAboutSelling.image}></img>
              </div>
              <div>
                <h4>{questionAboutSelling.id}</h4>
                <h2>{questionAboutSelling.question}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerGuides;
