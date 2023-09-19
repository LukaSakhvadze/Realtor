import React from "react";
import styles from "../GenericCss/Info.module.css";
import { narLogoSvg } from "../Consts/homePage.const";
import { narLinksList1, narLinksList2 } from "../Consts/narInfo.consts";

type NarInfoProps = {
  narLinksListNumber: number;
};

function NarInfo({ narLinksListNumber }: NarInfoProps) {
  const narLinksList = narLinksListNumber === 1 ? narLinksList1 : narLinksList2;
  return (
    <div
      className={styles.info}
      style={narLinksListNumber === 2 ? { marginTop: "5%" } : undefined}
    >
      <hr></hr>
      <div className={styles.container}>
        <div className={styles.box}>
          <div>
            <a
              href="https://www.nar.realtor/?cid=dis-rdotcomlogo"
              target="_blank"
            >
              {narLogoSvg}
            </a>
          </div>
          <p>
            Find out how the NAR works for consumers and REALTORS<sup>®</sup>
          </p>
        </div>
        {narLinksList.map((narLink) => (
          <div key={narLink.id} className={styles.box}>
            <p>
              <strong>
                {narLink.title}
                <sup>{narLink.sup}</sup>
              </strong>
            </p>
            <nav>
              <ul>
                {narLink.items.map((narLink) => (
                  <li key={narLink.id}>
                    <a href={narLink.href} target="_blank">
                      {narLink.content}
                      <sup>{narLink.sup}</sup>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NarInfo;
