import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Transbod from './Transbod'
import Motransfer from './Motransfer'

function Transfer() {
    const trans = true
  return (
    <>
    <div className='deskdash' >
        <Leftbar trans={trans} />
        <Transbod/>
        <Rightbar/>
    </div>

    <div className='modash'>
        <Motransfer/>
      </div>

    </>
  )
}

export default Transfer