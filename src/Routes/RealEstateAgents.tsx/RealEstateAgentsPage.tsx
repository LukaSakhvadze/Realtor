import React,{useState,useEffect} from 'react'
import Header from '../../GenericComponents/Header'
import ResponsiveHeader from '../../GenericComponents/ResponsiveHeader'
import Footer from '../../GenericComponents/Footer'
import SearchRealtor from './SearchRealtor'
import RealtorAdvantages from './RealtorAdvantages'
import RealtorBenefits from './RealtorBenefits'
import GuidesForSellingHome from './GuidesForSellingHome'
import AdditionalInfoForRealtors from './AdditionalInfoForRealtors'

function RentalsPage() {
    const [underlined,setUnderlined]=useState("realestateagents")
    const reducedFooter=true
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
    <SearchRealtor/>
    <RealtorAdvantages/>
    <RealtorBenefits/>
    <GuidesForSellingHome/>
    <AdditionalInfoForRealtors/>
    <Footer reducedFooter={reducedFooter}></Footer>
    </>
  )
}

export default RentalsPage