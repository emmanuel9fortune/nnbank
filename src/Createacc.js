import React from 'react'
import Leftbar from './Leftbar'
import Createaccbod from './Createaccbod'
import Rightbar from './Rightbar'
import Mocreateacc from './Mocreateacc'

function Createacc() {
  return (
    <>
        <div className='deskdash'>
            <Leftbar/>
            <Createaccbod/>
            <Rightbar/>
        </div>

        <div className='modash'>
            <Mocreateacc/>
        </div>
    </>
  )
}

export default Createacc