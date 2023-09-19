import React,{useState,useEffect} from 'react'
import Header from '../../GenericComponents/Header'
import Search from '../../GenericComponents/Search'
import SellingOffers from './SellingOffers'
import AgentsAndHomeEquity from './AgentsAndHomeEquity'
import SellerGuides from './SellerGuides'
import SellerTools from './SellerTools'
import Footer from '../../GenericComponents/Footer'
import ResponsiveHeader from '../../GenericComponents/ResponsiveHeader'

function SellingPage() {
    const [underlined,setUnderlined]=useState("sell")
    const reducedFooter=true
    const searchInputPlaceholder="Enter home address"
    const titleObject={
        title:"Explore different ways to sell your home",
        subTitle:"Get your home's value and see selling options",
        sup:"",
        image:"https://static.rdc.moveaws.com/images/sell/sell-landing-hero/sell-hero-1440.webp"
    }
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
    <>
    {width>=1000?<Header underlined={underlined} setUnderlined={setUnderlined}></Header>:<ResponsiveHeader/>}
    <Search underlined={underlined} setUnderlined={setUnderlined} titleObject={titleObject} searchInputPlaceholder={searchInputPlaceholder}></Search>
    <SellingOffers/>
    <AgentsAndHomeEquity/>
    <SellerGuides/>
    <SellerTools/>
    <Footer reducedFooter={reducedFooter}></Footer>
    </>
  )
}

export default SellingPage