import React, { useState } from 'react'
import Header from './Header'
import Bottom from './Bottom'
import psln from './img/psln.webp'
import an7 from './img/fg.png'
import { Link } from 'react-router-dom'
import abtim1 from './img/abtimg.webp'
import abtim2 from './img/abtimg2.webp'
import abtim3 from './img/abtimg3.webp'
import unm from './img/unm.png'
import card from './img/card.png'
import { Add } from '@mui/icons-material'
import Cookies from 'js-cookie'

function Credit() {


  const [fstbod , setfstbod] = useState(false)
  const [secbod , setsecbod] = useState(false)
  const [trdbod , settrdbod] = useState(false)
  const [frtbod , setfrtbod] = useState(false)
  const [fifbod , setfifbod] = useState(false)
  const [sixbod , setsixbod] = useState(false)


  const fstclick =()=>{
    fstbod ? setfstbod(false) : setfstbod(true)
    setsecbod(false)
    settrdbod(false)
    setfrtbod(false)
    setfifbod(false)
    setsixbod(false)
  }

  const secclick =()=>{
    secbod ? setsecbod(false) : setsecbod(true)
    setfstbod(false)
    settrdbod(false)
    setfrtbod(false)
    setfifbod(false)
    setsixbod(false)
  }

  const trdclick =()=>{
    trdbod ? settrdbod(false) : settrdbod(true)
    setsecbod(false)
    setfstbod(false)
    setfrtbod(false)
    setfifbod(false)
    setsixbod(false)
  }

  const frtclick =()=>{
    frtbod ? setfrtbod(false) : setfrtbod(true)
    setsecbod(false)
    settrdbod(false)
    setfstbod(false)
    setfifbod(false)
    setsixbod(false)
  }

  const fifclick =()=>{
    fifbod ? setfifbod(false) : setfifbod(true)
    setsecbod(false)
    settrdbod(false)
    setfrtbod(false)
    setfstbod(false)
    setsixbod(false)
  }
  const sixclick =()=>{
    sixbod ? setsixbod(false) : setsixbod(true)
    setsecbod(false)
    settrdbod(false)
    setfrtbod(false)
    setfifbod(false)
    setfstbod(false)
  }
  
  
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }






return (
  <div onLoad={getcookie} className={color !== 'true' ? 'dashboard2' : 'dashboard'}>
    <Header/>
      <div className='fstbod'> 
        <img src={psln} alt='' />      
        <div className='fstwrites'>
              <h3>Add value to your life</h3>
              <h1>Global Expansion Made Easy</h1>
              <p>Accelerate your ambitions with the Trust Debit and Credit Cards that comes with no annual fee, a high credit limit.</p>
              <Link to='/signin' className='regg1'>
                <p>Apply Now</p>
              </Link>
        </div>
        </div>




        
      <div className='trdbod'>
          <p>Boost your savings with the right credit card</p>
          <h1>Access Endless Possibilities With Bankio Card</h1>
          <small>All your needs covered with a full range of credit and debit cards.</small>

          <div className='trd_body'>

            <div className='savings_box'>
              <div className='save_ball'>
                <img src={abtim1} alt='' />
              </div>
              <div>
              <h3>No annual fees</h3>
              <p>Most good things in life are free. We value your hard-earned money too much to charge an annual fee.</p>
              </div>
            </div>



            <div className='savings_box'>
              <div className='save_ball'>
                <img src={abtim2} alt='' />
              </div>
              <div>
              <h3>No foreign exchange fees</h3>
              <p>You may be in the different country, but part of you will always be home. Save as you swipe in two countries</p>
              </div>
            </div>


            <div className='savings_box'>
              <div className='save_ball'>
                <img src={abtim3} alt='' />
              </div>
              <div>
              <h3>SSN Needed </h3>
              <p>Good credit is for everyone. We just need your basic personal information, visa and passport for identification .</p>
              </div>
            </div>

          </div>
        </div>




        


        <div className='fstbod'> 
        <img src={an7} alt='' />      
        <div className='fstwrites'>
              <h3>Add value to your life</h3>
              <h1>Global Expansion Made Easy</h1>
              <p>Accelerate your ambitions with the Trust Debit and Credit Cards that comes with no annual fee, a high credit limit.</p>
              <Link to='/signin' className='regg1'>
                <p>Apply Now</p>
              </Link>
        </div>
        </div>










        <div className='secbod'> 
            <div className='stp'>
              <div className='credit'>
              <div className='credit_box'>
                <h1>5%-10%</h1>
                <h3>Cashback</h3>
              </div>

              <div  className='credit_box'>
                <h1>10k+</h1>
                <h3>Merchants</h3>
              </div>

              <div  className='credit_box'>
                <h1>Giftcards</h1>
                <h3>For your friends & family</h3>
              </div>
              </div>
              <div className='ban_link'>
              <Link to='/contact' className='log_link' >
                <p>Apply Now</p>
              </Link>
            </div>
            </div>
        </div>












        <div className='fstbod'> 
        <img src={unm} alt='' />      
        <div className='fstwrites'>
              <h1>A Credit Limit That Feels Unlimited</h1>
              <p>Your journey to greateness shouldn't be confined by credit limits! Which is why we provide a hight credit limit</p>
        </div>
        </div>














        <div className='board'>
        <h3>Grow Your Confidence</h3>
        <h1>Choose the Card that Matches Your Needs</h1>
        <p>We have a fine range of accounts to help you manage your finances seamlessly</p>
        <div className='card_head'>
          <p>Credit</p>
          <p>Debit</p>
        </div>


        <div className='card'>

          <div className='card_brd'>
          <img src={card} alt='' className='cards' />
              <Link to='/contact' className='regg1' >
                <p>Get Started Now</p>
              </Link>
          </div>
        </div>
      </div>










      <div className='fif_body'>
          <h3>If you have question,we have answer</h3>
          <h1>Frequently asked questions</h1>
          <p>Get answers to all questions you have and boost your knowledge so you can save, invest and spend smarter.</p>

          <div className='qus_box'>
            <div className='ques_flip'>
            <h3>How do i Locate the nearest brach or ATM?</h3>
            <div onClick={fstclick} > 
              <Add/>
            </div>
            </div>

            { fstbod ?
              <div className='div'>
                <p>To locate the nearest branch or ATM call us at (406) 555-0120.</p>
              </div>
              : null
            }
          </div>

          <div className='qus_box'>
            <div className='ques_flip'>
            <h3>What do i do if i loose my card or it gets stolen?</h3>
            <div onClick={secclick}>
              <Add/>
            </div>
            </div>

            {
              secbod?
              <div className='div'>
              If your card is missing, let us know immediately. We’ll block your card right away send over a new one on the same day.To report a lost or stolen card, call us at (406) 555-0120.
              </div>
              : null
            }
          </div>

          <div className='qus_box'>
            <div className='ques_flip'>
            <h3>What is your customer service number ?</h3>
            <div onClick={trdclick}>
              <Add/>
            </div>
            </div>

            {
              trdbod?
              <div className='div'>
              call us at (406) 555-0120.
              </div>
              : null
            }
          </div>

          <div className='qus_box'>
            <div className='ques_flip'>
            <h3>How do i reset a pin</h3>
            <div onClick={frtclick}>
              <Add/>
            </div>
            </div>

            {
              frtbod?
              <div className='div'>
              To reset your pin call us at (406) 555-0120.
              </div>
              : null
            }
          </div>


          <div className='qus_box'>
            <div className='ques_flip'>
            <h3>What is required to use digital banking ?</h3>
            <div onClick={fifclick}>
              <Add/>
            </div>
            </div>


            {
              fifbod?
              <div className='div'>
                  To get info on this subject, call us at (406) 555-0120.
              </div>
              : null
            }
          </div>


          <div className='qus_box'>
            <div className='ques_flip'>
            <h3>is digital banking secure ?</h3>
            <div onClick={sixclick}>
              <Add/>
            </div>
            </div>

            {
              sixbod?
                  <div className='div'>
                    Yes it is Safe an for more assurance, call us at (406) 555-0120.
                  </div>
                  : null
            }
          </div>


      </div>








      <Bottom/>
    </div>
  )
}

export default Credit