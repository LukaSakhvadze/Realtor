import React,{useState,useEffect} from 'react'
import Header from '../../GenericComponents/Header'
import ResponsiveHeader from '../../GenericComponents/ResponsiveHeader'
import Footer from '../../GenericComponents/Footer'
import MyHomePageSearch from './MyHomePageSearch'
import SellingOffer from './SellingOffer'
import MyHome from './MyHome'
import MarketListings from './MarketListings'

function MyHomePage() {
    const [underlined,setUnderlined]=useState("myhome")
    const [width,setWidth]=useState(window.innerWidth)
    const reducedFooter=true
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
    <>
    {width>=1000?<Header underlined={underlined} setUnderlined={setUnderlined}></Header>:<ResponsiveHeader/>}
    <MyHomePageSearch/>
    <SellingOffer/>
    <MyHome/>
    <MarketListings/>
    <Footer reducedFooter={reducedFooter}></Footer>
    </>
  )
}

export default MyHomePage