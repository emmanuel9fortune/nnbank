import React, { useEffect, useState } from 'react'
import Header from './Header'
import './home.css'
import not from './img/not.webp'
import sv from './img/sheled.webp'
import { Add, Done,Payments, Savings, TrendingUp } from '@mui/icons-material'
import Ban from './Ban'
import pat1 from './img/pat1.png'
import pat2 from './img/pat2.png'
import pat3 from './img/pat3.png'
import pat4 from './img/pat4.png'
import vid from './img/vid.mp4'
import vid2 from './img/vid3.mp4'
import vid4 from './img/vid4.mp4'
import { Link } from 'react-router-dom'
import ln1 from './img/ln1.webp'
import ln2 from './img/ln2.webp'
import ln3 from './img/ln3.webp'
import ln4 from './img/ln4.webp'
import Bottom from './Bottom'
import AliceCarousel from 'react-alice-carousel'
import im1 from './img/secimg.jpg'
import img2 from './img/loan.jpg'
import img3 from './img/fstimg.jpg'
import ban from './img/pplog.png'
import axios from 'axios'
import Cookies from 'js-cookie'
import flag1 from './img/us.svg'
import flag2 from './img/flag2.svg'
import flag3 from './img/flag3.svg'
import flag4 from './img/flag4.svg'
import { motion } from 'framer-motion'
import vi from './img/g1.gif' 
import vi2 from './img/g3.gif' 
import vi3 from './img/g2.gif' 




function Home() {

  const [location, setlocation] = useState({})
  

    useEffect(()=>{
        getLocation()
    },[])

    const getLocation =async()=>{
        const locate = await axios.get('https://ipapi.co/json')
        setlocation(locate.data)
    }


  

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

  const imgs = [pat1, pat2, pat3, pat4]



  const items = imgs.map((coin)=>{
    return(
        <div style={{textDecoration:'none', display:'flex', alignItems:'cnetre',
        flexDirection:'column', width:'50%', marginLeft:'1em'}} >
            <img 
                src={coin}
                alt={coin.name}
                height='50'
                width='80'
                className='imgss'
             />
        </div>
    )
})

  const resposive ={
    0:{
        items: 2,
    },
    512:{
        items: 4
    }
}


    const [color, setcolor] = useState('true')


    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
      
    }



 

 
  return (
    <div onLoad={getcookie}  className={color !== 'true' ? 'dashboard2' : 'dashboard'}>

        <Header   />        
        <div style={{width:'100%'}}>
          <Ban />
        </div>

        <div className='ban22 bnmg'>
          <img className='ban22img' src={ban} alt='' />

          <div  className='banwrt'>
              <h3> Statistics</h3>
              <p>Dashboard which shows monthly transactions and enable user to control their spending. The chart comes in different forms</p>
          </div> 

          
        </div> 

        <div className='parts' style={{backgroundColor:'transparent'}}>
            <div className='partners' style={{border:"none"}}>
              <AliceCarousel  
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                    responsive={resposive}
                    autoPlay
                    items={items}
                />
            </div>
          </div>





        <div className='midimgs' >
          <div className='midimgs1' >
            <p>We take care of you
            <small>Tell us who you are and what you like, 
            to see what offers are available to you.</small>
            </p>
            <img src={im1} alt='' />
          </div>


          <div className='midimgs1'>
            <p>Fast & easy loans
              <small>You can submit your loan application online 
              and get instant approval in multiple ways.</small>
            </p>
            <img src={img2} alt='' />
          </div>


          <div className='midimgs1'>
            <p>Credit Cards
              <small>It will only take a minute and won’t impact your credit score.</small>
            </p>
            <img src={img3} alt='' />
          </div>
        </div>


 


        <div className= {color !== 'true' ? 'flags' : 'flags2' }>

        <div className='fg_writeups'>
                <h3>Bank with us</h3>
                <p> from anywhere in the world</p>
            </div>

        <div className='flag_group1'> 
                <motion.img transition={{delay:2}} animate={{scale:1}} initial={{scale:0}} src={flag1} alt=' ' />
                <motion.img transition={{delay:3}} animate={{scale:1}} initial={{scale:0}} src={flag2} alt=' ' />
                <motion.img transition={{delay:4}} animate={{scale:1}} initial={{scale:0}} src={flag3} alt=' ' />
                <motion.img transition={{delay:5}} animate={{scale:1}} initial={{scale:0}} src={flag4} alt=' ' />
            </div>
            </div>




















        
        <div className='fstbod'>
            <div className='fstwrites'>
              <div className='nod'>
              <img src={not} alt='' />
              </div>
              <p>Smart Banking</p>
              <h1>Real time Notifications</h1>

              <p>
              Your customer stay informed in real time with everything that’s happening on his account: payments, transfer, advice. Get visibility on your customers' flows to anticipate their needs.
               </p>

              <div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Cards that work all across the world.
                </div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  No ATM fees. No minimum balance. No overdrafts.
                </div>
              </div>
            </div>

            <video className='notvid'  autoPlay loop muted >
              <source src={vid} type='video/webm' />
              <source src={vid} type='video/mp4' />
              <source  type='video/ogg' />
            </video>

            <img src={vi} alt='' className='vi' />

        </div>




















        <div className='fstbod'> 
        <div className='fstwrites'>
              <div className='nod'>
              <img src={sv} alt='' />
              </div>
              <p>Safe Investments</p>
              <h1>The Better Way to Save & Invest</h1>

              <p>
              Voom helps over 2 million customers achieve their financial goals by helping them save and invest with ease. Put that extra cash to use without putting it at risk with Voom.
               </p>
 
              <div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Profitable to invest and Handy to manage
                </div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Highest Returns on your investments
                </div>
              </div>
            </div>
            <video className='notvid'  autoPlay loop muted >
              <source src={vid2} type='video/webm' />
              <source src={vid2} type='video/mp4' />
              <source  type='video/ogg' />
            </video>

            <img src={vi2} alt='' className='vi' />
        </div>


















        <div className='fstbod'> 
        <img src={vi3} alt='' className='vi' />
        <video className='notvid' autoPlay loop muted >
              <source src={vid4} type='video/webm' />
              <source src={vid4} type='video/mp4' />
              <source  type='video/ogg' />
            </video>    
        <div className='fstwrites'>
              <div className='nod'>
              <img src={sv} alt='' />
              </div>
              <p>Banking at Your Fingertips</p>
              <h1>Your banking experience anytime, anywhere</h1>

              <p>
                Get your money moving with our simple to use, accessible web app. As good as a bank branch within your phone!
              </p>

              <div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Bill Payments ,Funds Transfer ,QR payments  
                </div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Credit card payments and Order food
                </div>
              </div>
            </div>

            
        </div>
































        <div className='trdbod'>
          <p>Open your account from anywhere in the world</p>
          <h1>Solutions for Every Business Need.</h1>
          <small>Power up your business with a full-stack online bank account that fits your needs.</small>

          <div className='trd_body'>

            <div className='savings_box'>
              <div className='save_ball'>
                <TrendingUp/>
              </div>
              <div>
              <h3>All the loans</h3>
              <p>You can submit your loan application online and get instant approval in multiple ways. Banks also give pre-approval loan offers to their existing customers or new customers based on income, company category, credit score and history.</p>
              </div>
              <Link className='log_link' to='/signin'>
                <p>Open Account</p>
              </Link>
            </div>



            <div className='savings_box'>
              <div className='save_ball'>
                <Payments/>
              </div>
              <div>
              <h3>Credit Cards</h3>
              <p>Tell us who you are and what you like, to see what offers are available to you. It will only take a minute and won’t impact your credit score. Already a customer? Be sure to sign in when you check for offers to see what’s already waiting for you.</p>
              </div>
              <Link className='log_link' to='/signin' >
                <p>Open Account</p>
              </Link>
            </div>


            <div className='savings_box'>
              <div className='save_ball'>
                <Savings/>
              </div>
              <div>
              <h3>Savings</h3>
              <p>Keeping cash elsewhere that you don’t plan to spend in the immediate future is unsafe, and using a savings account has a psychological benefit: It’s tempting to spend money in hand. A savings account, however, can be a means of setting aside funds to reach longer-term goals</p>
              </div>

              <Link className='log_link' to='/signin'>
                <p>Open Account</p>
              </Link>
            </div>

          </div>
        </div>
















        <div className='secbod'> 
            <div className='stp'>
              <h1>Ready to make the leap?</h1>
              <h1>Let us help you.</h1>
              <div className='ban_link'>
              <Link className='log_link' to='/signin'  >
                <p>Open Account</p>
              </Link>
              <Link className='log_link' to='/contact' >
                <p>Get in touch</p>
              </Link>
            </div>
            </div>
        </div>
















      <div className='frt_body'>
        <div className='wrts'>
          <h3>Financial Planning</h3>
          <h1>Let's plan your finances the right way</h1>
          <p>Lending that doesn't weigh you down.We know how hard is it to start something new, that’s why we have the perfect plan for you.</p>
          <Link to='/signin' className='log_link' >
            <p>Apply For a loan</p>
          </Link>
        </div>

        <div className='ln_box'>
          <div className='box_ln'>
            <img src={ln1} alt='' /> 
            <h3>Home Loans</h3>

            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div>
              Lowest interest rates
            </div>

            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div>
              Fast Loan Processing
            </div>

          </div>



          <div className='box_ln'>
            <img src={ln2} alt='' /> 
            <h3>Car Loans</h3>
            
                        
            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div>
              Competitive rates
            </div>

            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div>
              Quick Easy
            </div>
          </div>

          <div className='box_ln'>
            <img src={ln3} alt='' /> 
            <h3>Education Loans</h3>

            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div>
              Pay back conveniently
            </div>

            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div>
              Fast Loan Processing
            </div>
          </div>



          <div className='box_ln'>
            <img src={ln4} alt='' /> 
            <h3>Business Loans</h3>


            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div>
              Easy Approvals
            </div>


            <div className='done'>
            <div className='done_btn'>
                <Done/>
              </div> 
              Full Assistance
            </div>
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

export default Home