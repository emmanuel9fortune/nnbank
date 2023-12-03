import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Depositbod from './Depositbod'
import Modeposite from './Modeposite'

function Deposit() {
  return (
    <>
      <div  className='deskdash'>
        <Leftbar />
          <Depositbod/>
        <Rightbar/>
      </div>
      
     <div className='modash'>
        <Modeposite/>
      </div>
    </>
  )
}

export default Deposit