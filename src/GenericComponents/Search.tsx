import React,{useState,useEffect} from 'react'
import styles from "../GenericCss/Search.module.css"
import searchStyles from '../GenericCss/SearchInput.module.css'
import { Link } from 'react-router-dom'
import { searchSvg,deleteSvg } from '../Consts/homePage.const'

type SearchProps={
  underlined:string,
  searchInputPlaceholder:string,
  setUnderlined:React.Dispatch<React.SetStateAction<string>>,
  titleObject:{
    title:string,
    subTitle:string,
    sup:string,
    image:string
  }
}

function Search({underlined,setUnderlined,titleObject,searchInputPlaceholder}:SearchProps) {
  const [address,setAddress]=useState("")
  const [width,setWidth]=useState(window.innerWidth)
  const changeWidth=()=>{
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",changeWidth)
    return()=>{
      window.removeEventListener("resize",changeWidth)
    }
  },[width])

  return (
    <div className={styles.search} style={{backgroundImage:`url(${titleObject.image})`}}>
      <h1>{titleObject.title}<sup>{titleObject.sup}</sup></h1>
      <h2>{titleObject.subTitle}</h2>
      <nav>
        <ul>
          <li className={styles[underlined==="buy"?"underlined":""]} onClick={()=>setUnderlined("buy")}><Link to="/">BUY</Link></li>
          <li className={styles[underlined==="rent"?"underlined":""]} onClick={()=>setUnderlined("rent")}><Link to="/rentals">RENT</Link></li>
          <li className={styles[underlined==="sell"?"underlined":""]} onClick={()=>setUnderlined("sell")}><Link to="/sell">SELL</Link></li>
          <li className={styles[underlined==="mortgage"?"underlined":""]} onClick={()=>setUnderlined("mortgage")}><Link to="/mortgage">PRE-APPROVAL</Link></li>
          <li className={styles[underlined==="justsold"?"underlined":""]} onClick={()=>setUnderlined("justsold")}><Link to="/">JUST SOLD</Link></li>
          <li className={styles[underlined==="homevalue"?"underlined":""]} onClick={()=>setUnderlined("homevalue")}><Link to="/">HOME VALUE</Link></li>
        </ul>
      </nav>
      <div className={searchStyles.searchDiv}>
        <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder={width<450&&searchInputPlaceholder==="Address, School, City, Zip or Neighborhood"?"Address":searchInputPlaceholder}></input>
        <div className={searchStyles.buttons}>
        <span className={address.length>0?undefined:"off"} onClick={()=>setAddress("")}>
          {deleteSvg}
        </span>
        <span>
          {searchSvg}
        </span>
        </div>
      </div>
    </div>
  )
}

export default Search