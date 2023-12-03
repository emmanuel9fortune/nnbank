import React, { useState } from 'react'
import Header from './Header'
import Bottom from './Bottom'
import { Link } from 'react-router-dom'
import acct from './img/acct.png'
import accf from './img/accf.png'
import accf2 from './img/accf2.png'
import accf3 from './img/accf3.png'
import accf4 from './img/accf4.png'
import ck1 from './img/ck1.webp'
import ck2 from './img/ck2.webp'
import ck3 from './img/ck3.webp'
import './account.css'
import { Add } from '@mui/icons-material'
import Cookies from 'js-cookie'

function Account() {

  

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
      <Header  />
      
      <div className='fstbod'> 
        <img src={acct} alt='' />      
        <div className='fstwrites'>
              <div className='nod'>
              </div>
              <p>The right financial help, at the right time</p>
              <h1>An Account You Can Truly Bank Upon</h1>

              <p>
              Change the way you manage your money.We have a fine range of accounts to help you manage your finances seamlessly
              </p>

              <Link to='/signin' className='regg1'>
                <p>Apply Now</p>
              </Link>
        </div>
    </div>






    <div className='trdbod'>
          <p>Open your account from anywhere in the world</p>
          <h1>An account, designed for you</h1>
          <small>Power up your business and personal life with a full-stack online bank account that fits your needs.</small>

          <div className='trd_body'>

            <div className='savings_box'>
              <div className='save_ball'>
                <img src={accf} alt='' />
              </div>
              <div>
              <h3>No Minimum Balance Required</h3>
              <p>Taking the first step towards your dreams should be a breeze, not a burden.</p>
              </div>
            </div>



            <div className='savings_box'>
              <div className='save_ball'>
                <img src={accf2} alt='' />
              </div>
              <div>
              <h3>SSN Needed</h3>
              <p>All we need is basic information about you, your visa and passport</p>
              </div>
            </div>


            <div className='savings_box'>
              <div className='save_ball'>
                <img src={accf3} alt='' />
              </div>
              <div>
              <h3>No Monthly Account Fees</h3>
              <p>So that every month, you can focus on investing in your ambitions</p>
              </div>
            </div>

          </div>
        </div>








        <div className='fstbod'> 
        <div className='fstwrites'>
              <div className='nod'>
              </div>
              <h1>Our trust is built on your security</h1>

              <p>
              We keep your money safe with FDIC insurance $250,0000 through our partner bank
              </p>
        </div>
        <img src={accf4} alt='' />      
    </div>
















    <div className='trdbod'>
          <p>Open your account from anywhere in the world</p>
          <h1>Solutions for Every Business Need.</h1>
          <small>Power up your business and personal life with a full-stack online bank account that fits your needs.</small>

          <div className='trd_body'>

            <div className='savings_box'>
              <div className='save_ball'>
                <img src={ck1} alt='' />
              </div>
              <div>
              <h3>Checking Account</h3>
              <p>Choose from our checking options that allow you to earn interest, avoid fees, and easily manage your account.</p>
              </div>
              <Link to='/signin'>
                <p>Open Account</p>
              </Link>
            </div>



            <div className='savings_box'>
              <div className='save_ball'>
                <img src={ck2} alt='' />
              </div>
              <div>
              <h3>Savings Accounts</h3>
              <p>Save for your goals and watch your money grow with a CD, a money market account, a savings account.Your future starts now.</p>
              </div>
              <Link to='/signin'>
                <p>Open Account</p>
              </Link>
            </div>


            <div className='savings_box'>
              <div className='save_ball'>
                <img src={ck3} alt='' />
              </div>
              <div>
              <h3>Business Account</h3>
              <p>Take charge of your business banking with a business bank account. Services including virtual cards, team management and more.</p>
              </div>
              <Link to='/signin'>
                <p>Open Account</p>
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

export default Account