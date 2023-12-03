import Cookies from 'js-cookie'
import React, { useState } from 'react'
import Bott from './Bott'
import Mohead from './Mohead'


function Cardd() {
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
            
        </div>
        
        <Bott help={help} color={color} />
        
    </div>
  )
}

export default Cardd