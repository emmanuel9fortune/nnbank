import React, { useState } from 'react'
import Header from './Header'
import Bottom from './Bottom'
import { Link } from 'react-router-dom'
import ref1 from './img/ref1.png'
import ref2 from './img/ref2.png'
import rf1 from './img/rf1.png'
import rf2 from './img/rf2.png'
import rf3 from './img/rf3.png'
import rw1 from './img/rw1.png'
import rw2 from './img/rw2.png'
import rw3 from './img/rw3.png'
import vcard from './img/vcard.jpg'
import './affiliate.css'
import { Add, CopyAll, Share } from '@mui/icons-material'
import Cookies from 'js-cookie'

function Affiliate() {

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
      <Header />


      <div className='aff'>
        <div style={{backgroundColor:'transparent'}} className='aff_head'>
          <h1>Give Credit, Get Credit!</h1>
          <p>Refer-Reward-Repeat</p>
        </div>

        <div className='affbod'>
          <img src={ref1} alt='' />

          <div className='affbod_mid'>
            <h1>$25</h1>
            <p>Per Friend</p>
          </div>

          <img src={ref2} alt='' />
        </div>

        <Link to='/signin' className='regg1' >
          <p>Refer now</p>
        </Link>
      </div>









      <div className='trdbod'>
          <p>Make money through your network</p>
          <h1>What goes around, comes around, and we take it seriously!</h1>
          <small>You got credit, now it’s time to give your friends some credit too. With Bankio’s Refer-a-Friend program, you can earn a $25 referral reward when your friend activates a Bankio credit card using your link. What’s more, your friend gets $25 credited to their Bankio credit card balance too!</small>

          <div className='trd_body'>

            <div className='savings_box'>
              <div className='save_ball'>
                <img src={rf1} alt='' />
              </div>
              <div>
              <h3>Rewarding Commissions</h3>
              <p>Get paid for every new friend that joins</p>
              </div>
            </div>



            <div className='savings_box'>
              <div className='save_ball'>
                <img src={rf2} alt='' />
              </div>
              <div>
              <h3>Simple and Free</h3>
              <p>Anyone can participate</p>
              </div>
            </div>


            <div className='savings_box'>
              <div className='save_ball'>
                <img src={rf3} alt='' />
              </div>
              <div>
              <h3>Personalized Dashboard</h3>
              <p>Share, monitor and track your referrals all in one place</p>
              </div>
            </div>

          </div>
        </div>




        <div className='fstbod'>    
        <div className='fstwrites'>
              <div className='nod'>
              <img src={rw1} alt='' />
              </div>
              <p>Refer Voom Trust credit card and earn $25!</p>
              <h1>How it Works</h1>

              <p>
              It's easier than you think. Follow the following simple easy steps & make sure you are logged in
              </p>
              <p>Share Your Unique Referral Link With Friends</p>
        </div>
        <div className='af_ball'>
          <div className='ball_box' style={{color:'black'}}>
            <p>Share the below link with your friends to earn the rewards!</p>
            <div className='copy'> 
              <input value='voomtrust.web/get/yU78has9' />
              <CopyAll/>
            </div>
            <div className='share'>
              <Share/>
              <p>Share Link</p>
            </div>
          </div>
        </div>   
        </div>


        <div className='fstbod'> 
        <div className='af_ball'>
          <img src={vcard} alt='' className='rot' />
        </div>      
        <div className='fstwrites'>
              <div className='nod'>
              <img src={rw2} alt='' />
              </div>
              <p>
              Your friends have to sign up and activate their Voom Trust Credit Card
              </p>
        </div>


        </div>
        <div className='fstbod'>      
        <div className='fstwrites'>
              <div className='nod' >
              <img src={rw3} alt='' />
              </div>
              <p >
              Both you and your friend get $25 credited to your Voom Trust credit card balance!
              </p>
        </div>
        <div className='af_ball'>
          <div className='ball_box' style={{color:'black'}}>
              <h3>Congratulations</h3>
              <p>You’ve Earned</p>
              <h1>$25</h1>
          </div>
        </div> 
        </div>



        <div className='secbod'> 
            <div className='stp'>
              <div className='credit_box'>
              <h3>Even better, your friends will earn $25 too!</h3>
              <h1>Invite Your Friends & Earn $25 for Each Referral</h1>
              <p>Sign in to your account for your personalized link and share it with friends. Once they apply for a Voom Trust account, you both get paid!</p>
              </div>
              <div className='ban_link'>
              <Link to='/contact' className='log_link' >
                <p>Refer a friend Now</p>
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

export default Affiliate