import { Email, LocationOn, Phone } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Governance() {

  const [stick, setstick] = useState(false)

  const scrollfunction =()=>{
    if(window.scrollY > window.innerHeight ){
      setstick(true)
    }
  }

  return (
    <div onMouseOver={scrollfunction} className='about'>
    <Header stick={stick} />
    <div className='abt_banner'>
      <div className='lns'>
        <Link to='/' className='ln'>
          <p>Home </p>
        </Link>
        <p>/ Governance</p>
      </div>
    </div>




    <div className='mid_abt'>
    <div className='line'></div>
    <div className='abt_writes'>
    <h1>The Board</h1>

    <p>The Board meets regularly throughout the year. Substantive agenda items have briefing papers, which are circulated in a timely manner before each meeting. The Board will ensure that it is satisfied that it is supplied with all the information that it requires and requests in a form and quality to enable to fulfil its duties. In addition to ongoing matters concerning the strategy and management of the AL Group, the Board has determined certain items, which are reserved for decision by itself. These matters include the acquisition and disposal of other than minor businesses, the issue of capital by any Voom Trust Bank, major investments and any transaction by a subsidiary company that cannot be made without its own resources or that is not in the normal course of its business.
    Voom Trust Bank is a “boutique” private bank focused on working in partnership with clients to help them achieve their financial goals. The bank believes in a truly tailored personal experience that adapts over time to support the wealth journey. AL itself and through its subsidiaries (together with AL, the AL Group) offers private and commercial banking, comprehensive wealth planning and an investment management service, as well as asset finance.

  Voom Trust Bank and its Board endorse the principles of openness, integrity and accountability, which underlie good corporate governance and as a business authorised to undertake regulated business under the Financial Services and Markets Act 2000, Voom Trust Bank operates to the high standards of corporate accountability and regulatory compliance appropriate for its business. Voom Trust Bank and the Board accept that good governance is critical to delivering a sound and well-run business and at the centre of good governance is an effective board.
    </p>
    </div>

      <img src='https://voomtrust.com/en/img/bg-img/14.jpg' alt='' />
    </div>









      <div className='bottom'>
        <div className='sm_info'>
          <div className='det'>
            <LocationOn/>
            <p>1415 Louisiana St, Houston, TX 77002, USA</p>
          </div>

          <div className='det'>
            <Phone/>
            <p>+1 XXX-XXX-XXXX</p>
          </div>


          <div className='det'>
            <Email/>
            <p>bank@gmail.com</p>
            <small>REPLY WITHIN 24HRS</small>
          </div>


        </div>



        <div>
        <p>Subscribe to our newsletter</p>

            <div className='input_field'>
              <input placeholder='example@gmail.com' />
              <p>SUBSCRIBE</p>
            </div>

        <small>Get latest updates periodically from us to keep you informed</small>
        </div>


      </div>
  </div>
  )
}

export default Governance