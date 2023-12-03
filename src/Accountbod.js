import React, { useState } from 'react'
import './accountbod.css'
import { Email, Link, Phone } from '@mui/icons-material'
import Cookies from 'js-cookie'
import Mohead from './Mohead'
import Bott from './Bott'

function Accountbod() {
  const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const help = true
      
  
  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
      <div className='transact' >
        <h3>Help & Support</h3>

        <div className='help' >
          <h3>Get help</h3>
          <p>Request help for the problems you're in our bank site, 
          we will send logs to your email to assist you</p>
          <button>Get help</button>
        </div>

        <div className='help_bod' > 
          <h3>Helpdesk</h3>

          <div className='helpbod'>
            <div className='helpbox'>
              <Phone/>
              <div>
                <h3>Call</h3>
                <p>+1(800) 201-6967</p>
              </div>
            </div>



            <div className='helpbox'>
              <Email/>
              <div>
                <h3>Email</h3>
                <p>sberbank@gmail.com</p>
              </div>
            </div>



            <div className='helpbox'>
              <Link/>
              <div>
                <h3>Website</h3>
                <p>http://sberbank.com/help</p>
              </div>
            </div>



          </div>
        </div>





        <div className='helpbod'>
          <h3>Trouble with the site</h3>
          <p>Report a problem with the app or share a suggestion with Voom Trust bank</p>
        </div>

      </div>

      
    </div>
  )
}

export default Accountbod