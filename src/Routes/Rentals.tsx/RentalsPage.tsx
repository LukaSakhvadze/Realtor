import React,{useState,useEffect} from 'react'
import Header from '../../GenericComponents/Header'
import ResponsiveHeader from '../../GenericComponents/ResponsiveHeader'
import Search from '../../GenericComponents/Search'
import Footer from '../../GenericComponents/Footer'
import RentalHomes from './RentalHomes'
import InfoForRenter from './InfoForRenter'
import AdvicesForRenter from './AdvicesForRenter'
import NarInfo from '../../GenericComponents/NarInfo'
import AdditionalResources from '../../GenericComponents/AdditionalResources'

function RentalsPage() {
    const [underlined,setUnderlined]=useState("rent")
    const reducedFooter=false
    const searchInputPlaceholder="Address, School, City, Zip or Neighborhood"
    const narLinksListNumber=2
    const additionalResourceListNumber=2
    const titleObject={
        title:"Discover your perfect rental",
        subTitle:"Search nearby apartments, condos, and homes for rent",
        sup:"®",
        image:"https://static.rdc.moveaws.com/images/hero/default/landing/2022-2/webp/hp-hero-rent-desktop-xl.webp"
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
    <RentalHomes/>
    <InfoForRenter/>
    <AdvicesForRenter/>
    <NarInfo narLinksListNumber={narLinksListNumber}></NarInfo>
    <AdditionalResources additionalResourceListNumber={additionalResourceListNumber}></AdditionalResources>
    <Footer reducedFooter={reducedFooter}></Footer>
    </>
  )
}

export default RentalsPage