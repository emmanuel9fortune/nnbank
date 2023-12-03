import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Accdetbod from './Accdetbod'
import Moaccountdetail from './Moaccountdetail'

function Accdet() {
    const acc = true
  return (
    <>
      <div className='deskdash' >
          <Leftbar acc={acc} />
          <Accdetbod/>
          <Rightbar/>
      </div>

      <div className='modash'>
        <Moaccountdetail/>
      </div>
    </>
  )
}

export default Accdet