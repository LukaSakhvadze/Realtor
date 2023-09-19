import React,{useState,useEffect} from 'react'
import Header from '../../GenericComponents/Header'
import ResponsiveHeader from '../../GenericComponents/ResponsiveHeader'
import Search from '../../GenericComponents/Search'
import Footer from '../../GenericComponents/Footer'
import AdditionalResources from '../../GenericComponents/AdditionalResources'
import Tools from './Tools'
import Rates from './Rates'
import Articles from './Articles'
import CommonTerms from './CommonTerms'
import LenderSearch from './LenderSearch'
import AdditionalInfo from './AdditionalInfo'

function RentalsPage() {
    const [underlined,setUnderlined]=useState("mortgage")
    const [width,setWidth]=useState(window.innerWidth)
    const searchInputPlaceholder="City or ZIP code"
    const reducedFooter=true
    const additionalResourceListNumber=3
    const titleObject={
        title:"Get Pre-Approved",
        subTitle:"Find a lender who can offer you competitive mortgage rates",
        sup:"",
        image:"https://static-mortgage.rdc.moveaws.com/static/images/homepage/2022-01/jpg/hp-hero-mortgage-desktop-xl.jpg"
    }
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
    <Tools/>
    <Rates/>
    <Articles/>
    <CommonTerms/>
    <LenderSearch/>
    <AdditionalInfo/>
    <AdditionalResources additionalResourceListNumber={additionalResourceListNumber}></AdditionalResources>
    <Footer reducedFooter={reducedFooter}></Footer>
    </>
  )
}

export default RentalsPage