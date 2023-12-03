import { Payment } from '@mui/icons-material'
import React, { useState } from 'react'
import './cardbod.css'
import Cookies from 'js-cookie'
import Mohead from './Mohead'
import crd from './img/crd.png'
import Bott from './Bott'

function Cardbod() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  return (
        <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
     <div className='cd' style={{backgroundColor:'transparent'}}>
     <div className='cardbod_head '>
          <h3 style={{display:'flex', alignItems:'center'}}>
          <Payment/>
          Request Card
          </h3>
      </div>

      <img className='crdd' src={crd} alt='' />

      <div className='cardbod'>
        <h3>Application Form New ATM Card</h3>

        <p>Mr. Branch Manager</p>
        
        <div className='request'>
        <div className='reqq1'>
          <div className='fstlet'>
            <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}} />
            <p>(write your branch name)</p>
          </div>
          
          <div className='fstlet'>
            <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
            <p>(write the name of your city)</p>
          </div>
        </div>


        <div className='reqq2'>
          <p>Subject: for making a new ATM card</p> 

          
          <div>
            <h3>Sir</h3>
            
            <div className='fstlet'>
              <p>
                i humbly request that my name is 
              </p>
              <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
              <p>(write your name)</p>
              <p>i am an account holder of your bank for the last</p>
              <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
              <p>year</p>.
            </div>

            <div className='fstlet' style={{borderBottom:'2px solid whitesmoke', paddingBottom:'1em'}} >
              <p>this is my savings account, A/C. </p>
                <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
              <p>i did not take ATM card  when i opened the account</p>
              <p>Now i am facing difficulty in doing cash transactions and online shopping.thats why i need a new ATM card</p>
            </div>

            <div style={{marginTop:'4em'}}>
              <h3>My account details are as follows </h3>
              <div className='fstlet'>
                A/C  Number : <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
              </div>
              <div className='fstlet'>
                Name : <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
              </div>
              <div className='fstlet'>
                Mobile No : <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
              </div>
              <div className='fstlet'>
                Address : <input style={{borderBottom:'1px solid cadetblue', color:'cadetblue'}}/>
              </div>
            </div>
          </div>
        </div>
        </div>

        <button className='rbtn'>SUBMIT</button>
      </div>
     </div>

     <Bott color={color} />
    </div>
  )
}

export default Cardbod