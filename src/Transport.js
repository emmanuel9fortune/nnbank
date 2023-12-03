import Cookies from 'js-cookie'
import React, { useState } from 'react'
import Bott from './Bott'
import Mohead from './Mohead'

function Transport() {
    const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const help = true

  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>

        <div className='payyy'>
            <h3>Transport</h3>

            <div className=' lfst betbod' >
              <p>Service Provider</p>
              <select>
                <option>select</option>
              </select>

              <p>Package</p>
              <input placeholder='package' />

              <p>Phone Number</p>
              <input placeholder='Phone Number' />

              <div className='betamt'>
                <p>Amount</p>
                <small>Balance : </small>
              </div>
              <input disable  placeholder='$' />


              <button>Next</button>
            </div>
        </div>
        
        <Bott help={help} color={color} />
        
    </div>
  )
}

export default Transport