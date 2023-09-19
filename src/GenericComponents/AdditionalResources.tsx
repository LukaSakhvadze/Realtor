import React, { useState } from "react";
import styles from "../GenericCss/Info.module.css";
import {
  additionalResourceLists1,
  dropdownArrowSvg,
} from "../Consts/additionalResources.consts";
import { additionalResourceLists2 } from "../Consts/additionalResources2.consts";
import { additionalResourceLists3 } from "../Consts/additionalResources3.consts";
import { additionalResourceLists4 } from "../Consts/additionalResources4.consts";

type AdditionalResourcesProps={
  additionalResourceListNumber:number
}

function AdditionalResources({additionalResourceListNumber}:AdditionalResourcesProps) {
  const additionalResourceLists=additionalResourceListNumber===1?additionalResourceLists1:additionalResourceListNumber===2?additionalResourceLists2:additionalResourceListNumber===3?additionalResourceLists3:additionalResourceLists4
  const [firstColumnHidden, setFirstColumnHidden] = useState(true);
  const [secondColumnHidden, setSecondColumnHidden] = useState(true);
  const [thirdColumnHidden, setThirdColumnHidden] = useState(true);
  const [fourthColumnHidden, setFourthColumnHidden] = useState(true);
  const statesArray = [
    firstColumnHidden,
    secondColumnHidden,
    thirdColumnHidden,
    fourthColumnHidden,
  ];

  function toggleColumnList(e: React.MouseEvent) {
    if (e.currentTarget.id === "1") {
      setFirstColumnHidden(!firstColumnHidden);
    } else if (e.currentTarget.id === "2") {
      setSecondColumnHidden(!secondColumnHidden);
    } else if (e.currentTarget.id === "3") {
      setThirdColumnHidden(!thirdColumnHidden);
    } else if (e.currentTarget.id === "4") {
      setFourthColumnHidden(!fourthColumnHidden);
    }
  }

  return (
    <div className={`${styles.info} ${styles.additionalInfo}`}>
      {additionalResourceListNumber!=4?<hr></hr>:undefined}
      <div className={styles.container} style={additionalResourceListNumber===3?{marginBottom:"0",minHeight:"0"}:additionalResourceListNumber===4?{marginBottom:"0",minHeight:"0",width:"100%"}:undefined}>
        {additionalResourceLists.map((additionalResourceList) => (
          <div key={additionalResourceList.id} className={styles.box} style={additionalResourceListNumber===3?{margin:"1.5rem"}:additionalResourceListNumber===4?{margin:"1.5rem 1.5rem 1.5rem 0",}:undefined}>
            <p>{additionalResourceList.title}</p>
            <nav>
              <ul>
                {additionalResourceList.shownItems.map((additionalResource) => (
                  <li key={additionalResource.id}>
                    <a href={additionalResource.href}>
                      {additionalResource.content}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className={statesArray[additionalResourceList.i] ? "off" : ""}>
                {additionalResourceList.hiddenItems.map(
                  (hiddenAdditionalResource) => (
                    <li key={hiddenAdditionalResource.id}>
                      <a href={hiddenAdditionalResource.href}>
                        {hiddenAdditionalResource.content}
                      </a>
                    </li>
                  )
                )}
              </ul>
              <p
                id={additionalResourceList.id.toString()}
                className={styles.dropdown}
                onClick={toggleColumnList}
              >
                {statesArray[additionalResourceList.i] ? "SEE MORE" : "SEE LESS"}
                <span
                  className={
                    styles[
                      statesArray[additionalResourceList.i] ? "downwards" : ""
                    ]
                  }
                >
                  {dropdownArrowSvg}
                </span>
              </p>
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalResources;
