import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Trpagebod from './Trpagebod'
import Motrpage from './Motrpage'

function Trpage() {
    const trans = true
    return (
      <>
      <div className='deskdash' >
          <Leftbar trans={trans} />
          <Trpagebod/>
          <Rightbar/>
      </div>
  
      <div className='modash'>
          <Motrpage/>
        </div>
  
      </>
    )
}

export default Trpage