import React from "react";
import styles from "../GenericCss/Footer.module.css";
import {
  socialWebsSvg,
  houselogicSvg,
  realtorSvg,
  aboutUsLinks,
  googlePlay,
  appStore,
  productsLink,
  newsCorpLinks,
} from "../Consts/footer.consts";
import { Link } from "react-router-dom";

type FooterPropsType = {
  reducedFooter: boolean;
};

function Footer({ reducedFooter }: FooterPropsType) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialWebs}>
          <ul>
            {socialWebsSvg.map((webSvg) => (
              <li key={webSvg.id}>
                <Link to={webSvg.link}>{webSvg.socialWeb}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link to="https://www.houselogic.com/?cid=eo_rl_rcom">
                {houselogicSvg}
              </Link>
            </li>
            <li>
              <Link to="https://www.get.realtor/?cid=dis_TLD0427">
                {realtorSvg}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            {aboutUsLinks.map((aboutUsLink) => (
              <li key={aboutUsLink.id}>
                <Link to={aboutUsLink.link}>{aboutUsLink.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.personalInfo}>
          <p>
            <strong>
              <Link to="/">Do Not Sell or Share My Personal Information</Link>
            </strong>
          </p>
        </div>
        <div>
          <h4>GET THE APP</h4>
          <ul>
            <li>
              <Link to="/">{appStore}</Link>
            </li>
            <li>
              <Link to="/">{googlePlay}</Link>
            </li>
          </ul>
        </div>
        {reducedFooter===true?undefined:(
          <div>
            <h4>PRODUCTS</h4>
            <ul>
              {productsLink.map((productLink) => (
                <li key={productLink.id}>
                  <Link to={productLink.link}>{productLink.content}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {reducedFooter===true?undefined:(
          <div>
            <h4>NEWS CORP</h4>
            <ul>
              {newsCorpLinks.map((newsCorpLink) => (
                <li key={newsCorpLink.id}>
                  <Link to={newsCorpLink.link}>{newsCorpLink.content}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className={styles.copyright}>
          © 1995-2023{" "}
          <Link to="https://www.nar.realtor/?cid=dis-rdotcomlogo">
            National Association of REALTORS<sup>®</sup>
          </Link>{" "}
          and <Link to="https://www.move.com/">Move, Inc.</Link> All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
