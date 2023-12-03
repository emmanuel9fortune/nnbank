import Cookies from 'js-cookie'
import React, { useState } from 'react'
import Bott from './Bott'
import Mohead from './Mohead'
import bet from './bet.json'

function Bet() {

    const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const help = true

   const [bets, setbets] = useState('')

  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>

        <div className='payyy'>
            <h3>Betting</h3>

            <div className=' lfst betbod' >
              <p>Service Provider</p>
                    <select value={bets} onChange={(e)=>setbets(e.target.value)} >
                      {
                        bet.map((bt)=>(
                            <option>{bt.name}</option>
                        ))
                      }
                    </select>
              <p>User ID</p>
              <input placeholder='customer id' />

              <div className='betamt'>
                <p>Amount</p>
                <small>Balance : </small>
              </div>
              <input placeholder='$0.00' />


              <button>Next</button>
            </div>
        </div>
        
        <Bott help={help} color={color} />
        
    </div>
  )
}

export default Bet