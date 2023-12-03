import React, { useState } from 'react'
import Sendmoneybod from './Sendmoneybod'
import Mohead from './Mohead'
import Cookies from 'js-cookie'

function Sendmoney() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  return (
    <>
        <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
          
          <Sendmoneybod/>
      </div>
      </>
    )
}

export default Sendmoney