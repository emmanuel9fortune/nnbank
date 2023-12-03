import { Business } from '@mui/icons-material'
import React, { useState } from 'react'
import './loanbod.css'
import Cookies from 'js-cookie'
import Mohead from './Mohead'

function Loanbod() {
  const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }
      
  
  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
    <div className='transact' >
        <h3 style={{display:'flex', alignItems:'center'}}>
        <Business/>
        Request Loan</h3>



        
      <div className='loanbod' >
        <div className='laon1'>
          <div className='loanb'>
            <h3>Desired Loan Amount $</h3>
            <input/>
          </div>

          <div className='loanb'>
            <h3>Annual Income $</h3>
            <input/>
          </div>
        </div>


        <div className='loan2'>
          <h3>Loan will be used for</h3>

          <div className='loan_check'>
            <div className='loanss' >
              <div className='loanc'>
                <input type='checkbox' />
                <p>Business Launching</p>
              </div>

              <div className='loanc'>
                <input type='checkbox' />
                <p>Home Improvement</p>
              </div>

              <div className='loanc'>
                <input type='checkbox' />
                <p>Education </p>
              </div>
            </div>

            <div className='loanss'>
              <div className='loanc'>
                <input type='checkbox' />
                <p>Investment</p>
              </div>

              <div className='loanc'>
                <input type='checkbox' />
                <p> House Buying </p>
              </div>

              <div className='loanc'>
                <input type='checkbox' />
                <p>Other </p>
              </div>

            </div>
          </div>
        </div>




        <div className='loanbtm'>
          <h2 style={{width:'100%', textAlign:'center'}} >CONTACT INFORMATION</h2>
            <h3>Name</h3>
          <div className='loanbtms'>

            <div className='loanbtm1'>
              <input/>
              <p>Title</p>
            </div>

            <div className='loanbtm1'>
              <input/>
              <p>First Name</p>
            </div>

            <div className='loanbtm1'>
              <input/>
              <p>Last Name</p>
            </div>
          </div>
        </div>


        <button className='rbtn' > SUBMIT </button>


      </div>
    </div>

    </div>
  )
}

export default Loanbod