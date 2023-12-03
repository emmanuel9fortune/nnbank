import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Wiremoneybod from './wiremoneybod'
import Mowiremoney from './Mowiremoney'

function Wiremoney() {
    const trans = true
    return (
      <>
      <div className='deskdash' >
          <Leftbar trans={trans} />
          <Wiremoneybod/>
          <Rightbar/>
      </div>
  
      <div className='modash'>
          <Mowiremoney/>
        </div>
  
      </>
    )
}

export default Wiremoney