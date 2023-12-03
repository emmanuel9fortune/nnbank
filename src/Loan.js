import React, { useState } from 'react'
import Header from './Header'
import Bottom from './Bottom'
import loanb from './img/loanb.png'
import bsloan from './img/bsloan.png'
import { Link } from 'react-router-dom'
import { Done } from '@mui/icons-material'
import hloan from './img/hloan.png'
import cloan from './img/cloan.png'
import eloan from './img/eloan.png'
import ploan from './img/ploan.png'
import './home.css'
import Cookies from 'js-cookie'
 
function Loan() {

  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }






return (
  <div onLoad={getcookie} className={color !== 'true' ? 'dashboard2' : 'dashboard'}>
      <Header  />


      <div className='fstbod'> 
        <img src={loanb} alt='' />      
        <div className='fstwrites'>
              <h1>Request any Loan</h1>
              <p>Get business loans, House Loans, Car Loan, Education Loan & Personal Loan approved within days with transparent lending criteria and transparent processes.</p>
              <Link to='/signin' className='regg1'>
                <p>Request Now</p>
              </Link>
        </div>
        </div>




        <div className='fstbod'> 
        <div className='fstwrites'>
              <p>Business loan – without hidden fees & charges</p>
              <h1>A business Loan, Just as You Need It</h1>

              <p>
              Get business loans approved within days with transparent lending criteria and transparent processes.
              </p>

              <div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Same day approval and multiple funding options  
                </div>

                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Access loans without origination fees
                </div>

                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Borrow up to $250,000
                </div>

                <Link to='/signin' className='regg1'>
                <p>Apply For Business Loan</p>
              </Link>
              </div>
            </div>

            <img src={bsloan} alt='' />      

        </div>




























        <div className='fstbod'> 
        <img src={hloan} alt='' />      
        <div className='fstwrites'>
              <p>Helping you own your home sooner</p>
              <h1>A simple way to buy a home or refinance</h1>

              <p>
              Whether you’re building, investing or simply fixing up your current home, a housing loan is the best way to hammer in the first nail to your dream home.
              </p>

              <div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Same day approval and multiple funding options  
                </div>

                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Access loans without origination fees
                </div>

                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Borrow up to $250,000
                </div>

                <Link to='/signin' className='regg1'>
                <p>Apply For Home Loans</p>
              </Link>
              </div>
            </div>
        </div>

















        <div className='fstbod'> 
        <div className='fstwrites'>
              <p>Why should you demand a bankio loan</p>
              <h1>Smarter car loans. Designed for you.</h1>

              <p>
              Voom Trust expands access to fair credit with a simple and fast loan application that looks at you – not just your credit score.A flexible hassle-free financing facility that enables you to own your dream car
              </p>


                <Link to='/signin' className='regg1'>
                <p>Apply Now</p>
              </Link>
            </div>

            <img src={cloan} alt='' />      

        </div>














        <div className='fstbod'> 
        <img src={eloan} alt='' />      

        <div className='fstwrites'>
              <p>Varied offers for boundless ambitions</p>
              <h1>Educations loans for everyone</h1>

              <p>
              Make the smart choice. Get education loan offers at great interest rates
              </p>


              <div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  No SSN or credit history required  
                </div>

                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Checking for rate won't impact credit score
                </div>

                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  No prepayment fees
                </div>
                </div>


                <Link to='/signin' className='regg1'>
                <p>Apply for Education Loan</p>
              </Link>
            </div>


        </div>

























        <div className='fstbod'> 
        <div className='fstwrites'>
              <p>Meet your financial needs</p>
              <h1>Borrow better for the planned and unexpected</h1>

              <p>
              Flexible and dependable, personal loans can be used to cover almost any expense.Break big expenses into manageable payments              
              </p>


              <div>
                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  100% Safe & Secure 
                </div>

                <div className='done'>
                  <div className='done_btn'>
                    <Done/>
                  </div>
                  Instant Process
                </div>


                <Link to='/signin' className='regg1'>
                <p>Aplly for Personal Loan</p>
              </Link>
            </div>

        </div>
            <img src={ploan} alt='' />      
        </div>





      <Bottom/>
    </div>
  )
}

export default Loan