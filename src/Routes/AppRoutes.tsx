import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './Home.tsx/Homepage';
import SellingPage from './Selling.tsx/SellingPage'
import RentalsPage from './Rentals.tsx/RentalsPage';
import MortgagePage from './Mortgage.tsx/MortgagePage'
import RealEstateAgentsPage from './RealEstateAgents.tsx/RealEstateAgentsPage'
import MyHomePage from './MyHome.tsx/MyHomePage';

function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sell' element={<SellingPage/>}/>
        <Route path='/rentals' element={<RentalsPage/>}/>
        <Route path='/mortgage' element={<MortgagePage/>}/>
        <Route path='/realestateagents' element={<RealEstateAgentsPage/>}/>
        <Route path='/myhome' element={<MyHomePage/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes