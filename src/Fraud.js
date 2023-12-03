import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Bottom from './Bottom'
import secuban from './img/secban.png'
import secu from './img/secu.png'

function Fraud() {

  const [stick, setstick] = useState(false)

  const scrollfunction =()=>{
    if(window.scrollY > window.innerHeight ){
      setstick(true)
    }
  }

  return (
    <div onMouseOver={scrollfunction} className='about'>
    <Header stick={stick} />
    <img src={secuban} alt='' className='secuban'/>
    <div className='lns1'>
        <Link to='/' className='ln'>
          <p>Home </p>
        </Link>
        <p>/ Fraud Awareness</p>
      </div>




    <div className='fstbod'>
    <div className='fstwrites'>
    <h1>Fraud News & Updates</h1>

    <p>Regulators warn public of pension scammer tactics as victims report losing an average of £91,000 in 2017 • The Financial Conduct Authority (FCA) and The Pensions Regulator (TPR) launch joint TV advertising campaign to raise awareness of pension scams and the most common tactics used by fraudsters • New statistics show that pension scam victims lose an average of £91,000 each
    </p>
    <h1>Convenience</h1>

    <p>Every step of saving is now simple. You can easily link your Voom Trust Bank Personal Savings account to up to 3 bank accounts, set up recurring deposits, and access your funds 24/7 online or by phone. All you need are your current routing and account numbers.
    </p>
    <h1>Powerful Earning</h1>

    <p>Take advantage of a high APY and zero fees. Voom Trust BankPersonal Savings Accounts don't have monthly balance requirements or maintenance fees. That means you can maximize your interest earnings and save with confidence.
    </p>
    </div>

      <img src={secu} alt='' />
    </div>









     <Bottom/>
  </div>
  )
}

export default Fraud