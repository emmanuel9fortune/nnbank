import React from 'react'
import { Link } from 'react-router-dom'
import './ban.css'
import ban from './img/bnlog.png'

function Ban() {


  return (
    <div className='ban22'>

      <div  className='banwrt'>
          <h3> <span style={{color:'green'}}> Experience-</span>   the Difference </h3>
          <p>with SBER BANK the leading platform that allows people to grow and save their finances, join the crowd today.</p>
          <Link className='banlnk' to={'/signin'}>
              <p>Join Now</p>
          </Link>  
      </div>

      <img src={ban} alt='' />
    </div> 
  )
}

export default Ban