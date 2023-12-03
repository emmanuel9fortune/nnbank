import React, { useState } from 'react'
import Paybillbod from './paybillbod'
import Mohead from './Mohead'
import Cookies from 'js-cookie'

function Paybill() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  return (
    <>
        <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
        <Paybillbod/> 
      </div>
  
      </>
    )
}

export default Paybill