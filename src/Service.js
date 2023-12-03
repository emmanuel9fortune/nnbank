import React, { useState } from 'react'
import Custbod from './Custbod'
import Mohead from './Mohead'
import Cookies from 'js-cookie'

function Service() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  return (
    <>
      <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
        <Custbod/>
      </div>
    </>
  )
}

export default Service;