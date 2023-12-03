import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Notifications, Person, VerifiedUser } from '@mui/icons-material'
import './setting.css'
import Mohead from './Mohead'

function Setting() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>

        <div className='asset' >
          <div className='setlinks'>

            <Link to={'/userprofile'} className='setlink'>
              <div className='setclbox'>
              <Person/>
              </div>
              <p>My Profile</p>
            </Link>


            <Link to={'/notification'} className='setlink'>
              <div className='setclbox' style={{backgroundColor:'brown'}}>
                <Notifications/>
              </div>
              <p>Notifications</p>
            </Link>


            <Link to={'/verifyaccount'} className='setlink'>
              <div className='setclbox' style={{backgroundColor:'purple'}}>
                <VerifiedUser/>
              </div>
              <p>Account Verificatios</p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Setting