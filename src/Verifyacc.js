import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import { Email, Home, Person } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import Mohead from './Mohead'


function Verifyacc() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  const info = useSelector(selectInfo)



  

  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>

        <div className='asset'>
          <div className='vacc' >
            <Avatar src={info?.userinfo?.photo} id='avt' />
            <h3>User Name</h3>
            <p>VERIFICATIONS</p>

            <div className='vlinks'>
              <div className='vbox' style={{backgroundColor:'purple'}}>
                  <Email/>
              </div>
              <p>Email Verification
                <small>Verified</small>
              </p>
            </div>

            <div to={'/idverification'} className='vlinks'>
              <div className='vbox' style={{backgroundColor:'brown'}}>
                <Person/>
              </div>
              <p>Identity Verification
                <small>Verified</small>
              </p>
            </div>

            <div to={'/addressverification'} className='vlinks'>
              <div className='vbox' style={{backgroundColor:'#3e3c61'}}>
                <Home/>
              </div>
              <p>Address Verification
                <small>Verified</small>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Verifyacc