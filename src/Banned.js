import React from 'react'
import './banned.css'
import Lottie from 'lottie-react'
import ban from './asset/ban.json'

function Banned() {
  return (
    <div className='banned'>
      <h3>Account Deactivated</h3>

      <div className='bannedbod'>
        <h3>ACCESS DENIED</h3>

        <div className='bannd' >
        <Lottie style={{width:'70px'}} animationData={ban} />

          <p>Unable to grant you access because your account has been restricted</p>
        </div>

        <small>We are excited to introduce you to our new online banking platform and show you all the new fearures we have lined up to make banking anywhere</small>
      </div>
    </div>
  )
}

export default Banned