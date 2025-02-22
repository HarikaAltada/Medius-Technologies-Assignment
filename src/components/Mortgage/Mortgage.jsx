import React from 'react'
import MortgageCalculator from './MortgageCalculator'
import Navbar from '../Navbar/Navbar';
import PaymentBreakdown from './PaymentBreakdown';
import MortgageInfo from './MortgageInfo';
import Footer from '../Footer/Footer'
function Mortgage() {
  return (
    <div>
        <Navbar/>
        <MortgageCalculator/>
        <PaymentBreakdown/>
        <MortgageInfo/>
        <Footer/>
    </div>
  )
}

export default Mortgage