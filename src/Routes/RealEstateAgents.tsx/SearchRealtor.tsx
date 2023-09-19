import React,{useState} from "react";
import styles from "./RealEstateAgentsCss/SearchRealtor.module.css";
import { deleteSvg } from "../../Consts/homePage.const";
import { dropdownArrowSvg } from "../../Consts/additionalResources.consts";

function SearchRealtor() {
    const [searchInfo,setSearchInfo]=useState({type:"Agent",location:"",name:""})
    const submitHandler=(e:React.MouseEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }
    
  return (
    <div className={styles.searchRealtor}>
      <div className={styles.container}>
        <h1>
          Find a REALTOR<sup>®</sup>
        </h1>
        <h4>
          Search for your agent from more than 1 million REALTORS<sup>®</sup> nationwide
        </h4>
        <p>Enter a location and/or name</p>
        <form onSubmit={submitHandler}>
        <div className={styles.selectDiv}>
            <select value={searchInfo.type} onChange={(e)=>setSearchInfo({...searchInfo,type:e.target.value})}>
                <option value="agent">Agent</option>
                <option value="team" >Team</option>
                <option value="company">Company</option>
            </select>
            <div className={styles.buttonDiv}>
                <span>
                {dropdownArrowSvg}
                </span>
            </div>
        </div>
        <div className={styles.searchDiv}>
            <input type="text" onChange={(e)=>setSearchInfo({...searchInfo,location:e.target.value})} value={searchInfo.location} placeholder="City or zip"></input>
            <div className={styles.buttonDiv} style={searchInfo.location.length>0?{display:"block"}:{display:"none"}}>
                <span className={searchInfo.location.length>0?undefined:"off"} onClick={()=>setSearchInfo({...searchInfo,location:""})}>
                {deleteSvg}
                </span>
            </div>
        </div>  
        <div className={styles.searchDiv}>
            <input type="text" onChange={(e)=>setSearchInfo({...searchInfo,name:e.target.value})} value={searchInfo.name} placeholder={searchInfo.type.charAt(0).toUpperCase()+searchInfo.type.slice(1,searchInfo.type.length) + " name"}></input>
            <div className={styles.buttonDiv} style={searchInfo.name.length>0?{display:"block"}:{display:"none"}}>
                <span onClick={()=>setSearchInfo({...searchInfo,name:""})}>
                {deleteSvg}
                </span>
            </div>
        </div>
        <button type="submit">Search</button>
        </form>
        <p>Add credentials</p>
        </div>
    </div>
  );
}

export default SearchRealtor;
