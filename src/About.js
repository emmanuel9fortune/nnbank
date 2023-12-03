import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './about.css'
import Bottom from './Bottom'
import ab from './img/ab.png'
import ab2 from './img/ab2.png'
import ab3 from './img/ab3.png'
import abtim1 from './img/abtimg.webp'
import abtim2 from './img/abtimg2.webp'
import abtim3 from './img/abtimg3.webp'
import tm1 from './img/tm1.png'
import tm2 from './img/tm2.png'
import tm3 from './img/tm3.png'
import tm4 from './img/tm4.png'
import tm5 from './img/tm5.png'
import tm6 from './img/tm6.png'
import tm7 from './img/tm7.png'
import abt from './img/abt2.mp4'
import Cookies from 'js-cookie'
import abtg from './img/abt1.gif'

function About() {

  const [color, setcolor] = useState('true')
  

    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }





 
  return (
    <div onLoad={getcookie} className={color !== 'true' ? 'dashboard2' : 'dashboard'}>
      <Header  />

        <video className='abtvideo' src={abt} autoPlay muted loop />
        <img src={abtg} alt='' className='abtn'/>




    
      <div style={{marginTop:0}} className='fstbod'>
      <div className='sbt_imgs'>
        <img src={ab} alt='' />
        <img src={ab2} alt='' />
        <img src={ab3} alt='' />
       </div>
       <div className='fstwrites'>
       <h3 className='mov'>About Us</h3>
        <h1>Your ally in achieving ambition beyond borders</h1>
        <p>We understand that with global ambition, comes global challenges, and we are here to bridge the gap by offering seamless cross-border financial services. Consider us your friendly digital guide to all things finance, helping you make the most of your money.</p>

        <div className='abt_box'>
        <div>
          <h1>98%</h1>
          <p>Customer satisfaction</p>
        </div>

        <div>
          <h1>250M</h1>
          <p>Monthly active users</p>
        </div>

        <div>
          <h1>100k</h1>
          <p>New Users per week</p>
        </div>
        </div>
       </div>

      </div>

























      <div className='trdbod'>
          <p>Our core values</p>
          <h1>Our values help us set the bar for good banking high.</h1>
          <small>Our values define us. They guide us in building and improving our product, hiring teammates, and serving our customers.</small>

          <div className='trd_body'>

            <div className='savings_box'>
              <div className='save_ball'>
                <img src={abtim1} alt='' />
              </div>
              <div>
              <h3>Customer First</h3>
              <p>We aim to provide our customers with top-notch service that helps them grow their business and put their best foot forward.</p>
              </div>
              <Link to='/signin'>
                <p>Open Account</p>
              </Link>
            </div>



            <div className='savings_box'>
              <div className='save_ball'>
                <img src={abtim2} alt='' />
              </div>
              <div>
              <h3>Passion over Pedigree</h3>
              <p>We hire for passion, because passionate people can overcome any obstacle and acquire any knowledge necessary.</p>
              </div>
              <Link to='/signin'>
                <p>Open Account</p>
              </Link>
            </div>


            <div className='savings_box'>
              <div className='save_ball'>
                <img src={abtim3} alt='' />
              </div>
              <div>
              <h3>commitment</h3>
              <p>Our first priority is to keep your money safe and secure. Every single aspect of our service is optimized to protect and grow your funds!</p>
              </div>
            </div>

          </div>
        </div>













      <div className='board'>
        <h3>The Amazing Team Behind Our Company</h3>
        <h1>The right skills wielded by the right people to make anything possible.</h1>
        <p>Our diversity and youthfulness are the sources of our strength as a team and shape our views.</p>
        <div className='board_head'>
          <p>Board</p>
          <p>Leaders</p>
          <p>Designers</p>
          <p>Developers</p>
        </div>


        <div className='images'>
          <div className='brd'>
          <img src={tm1} alt='' />
          <h3>Daniel Coman</h3>
          <p>CEO & Founder</p>
          </div>

          <div className='brd'>
          <img src={tm2} alt='' />
          <h3> L.Peter Brun</h3>
          <p>CFO</p>
          </div>

          <div className='brd'>
          <img src={tm3} alt='' />
          <h3>James O. Linthin </h3>
          <p>Business Development</p>
          </div>

          <div className='brd'>
          <img src={tm4} alt='' />
          <h3>Luis Bale</h3>
          <p>Advisor, Investor Member</p>
          </div>


          <div className='brd'>
          <img src={tm5} alt='' />
          <h3>Lane Gris</h3>
          <p>Head of Marketing</p>
          </div>

          <div className='brd'>
          <img src={tm6} alt='' />
          <h3>Dale Bryant</h3>
          <p>Business Analyst</p>
          </div>


          <div className='brd'>
          <img src={tm7} alt='' />
          <h3>Dale Bryant</h3>
          <p>Full-stack Developer</p>
          </div>
        </div>
      </div>











      






    <Bottom/>
    </div>

    
  )
}

export default About