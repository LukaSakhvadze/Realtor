import React,{useState,useEffect} from 'react'
import BuyableHomesList from './BuyableHomes'
import Header from '../../GenericComponents/Header'
import Search from '../../GenericComponents/Search'
import TrendHomes from './TrendHomes'
import UniqueHomes from './UniqueHomes'
import Offers from './Offers'
import NarInfo from '../../GenericComponents/NarInfo'
import Footer from '../../GenericComponents/Footer'
import AdditionalResources from '../../GenericComponents/AdditionalResources'
import ResponsiveHeader from '../../GenericComponents/ResponsiveHeader'

function Homepage() {
  const [underlined,setUnderlined]=useState("buy")
  const reducedFooter=false
  const searchInputPlaceholder="Address, School, City, Zip or Neighborhood"
  const narLinksListNumber=1
  const additionalResourceListNumber=1
  const titleObject={
    title:"Discover your perfect home",
    subTitle:"With the most complete source of homes for sale & real estate near you",
    sup:"®",
    image:"https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop-xl.jpg"
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
    <BuyableHomesList/>
    <UniqueHomes/>
    <TrendHomes/>
    <Offers/>
    <NarInfo narLinksListNumber={narLinksListNumber}></NarInfo>
    <AdditionalResources additionalResourceListNumber={additionalResourceListNumber}></AdditionalResources>
    <Footer reducedFooter={reducedFooter}/>
    </>
  )
}

export default Homepage