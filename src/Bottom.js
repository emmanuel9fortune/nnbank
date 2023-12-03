import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './bottom.css'
import na7 from './img/an7.webp'

function Bottom() {
  return (
    <div style={{width:'100%'}} >
    <div className='bottom' style={{color:'cadetblue'}}>
    <img src={na7}  alt=''  className='sub'/>
    <div className='fst_bottom'>
      <img src='' alt='' />
      <h3>SBER BANK</h3>
      <small>IMPORTANT INFORMATION: Information Security is a top priority of SBER BANK Bank. You will never be asked for personal information via this website, email, or other electronic means. If you are ever asked to furnish any personal information, please ignore the request and contact our security officer immediately. As always, you can contact us with any questions or concerns.  •  SBER BANK Bank has no control over information at any site hyperlinked to from this Site. SBER BANK Bank makes no representation concerning and is not responsible for the quality, content, nature, or reliability of any hyperlinked site and is providing this hyperlink to you only as a convenience. The inclusion of any hyperlink does not imply any endorsement, investigation, verification or monitoring by SBER BANK Bank or any information in any hyperlinked site. In no event shall SBER BANK Bank be responsible for your use of a hyperlinked site.  •  Remember, confidential and sensitive information such as account numbers or personal identifying information should not be communicated via e-mail.</small>
      <div className='icons'>
        <Facebook/>
        <Twitter/>
        <Instagram/>
      </div>
    </div>

    <div className='sec_bottom'>
      <h3>Company</h3>
      <Link to='/about' className='bottom_links'>
        <p>About Us</p>
      </Link>
      <Link to='/Contact' className='bottom_links'>
        <p>Contact Us</p>
      </Link>
      <Link to='/career' className='bottom_links'>
        <p>Careers</p>
      </Link>
      <Link to='/credit' className='bottom_links'>
        <p>Credit cards</p>
      </Link>
    </div>

    <div className='trd_bottom'>
      <h3>Useful Links</h3>
      <Link to='/businessloan' className='bottom_links'>
        <p>Business Loan</p>
      </Link>
      <Link to='/affiliate' className='bottom_links'>
        <p>Affiliate Program</p>
      </Link>
      <Link to='/blog' className='bottom_links'>
        <p>Blog</p>
      </Link>
      <Link to='/fraud' className='bottom_links'>
        <p>Fraud awareness</p>
      </Link>
    </div>

    <div className='sm_info'>   
    <p>Subscribe to our newsletter</p>

        <div className='input_field'>
          <input placeholder='example@gmail.com' />
          <p>SUBSCRIBE</p>
        </div>

    <small>Get latest updates periodically from us to keep you informed</small>
    </div>
    </div>



    <div className='private'>
      <p style={{fontSize:'10px'}} > © 2023 SBER BANK Bank.
        <span> All rights reserved.  </span>
      </p>
      <Link to='/' className='prvt'>
        <p>Privacy | Terms & Condition</p>
      </Link>
    </div>

  </div>
  )
}

export default Bottom