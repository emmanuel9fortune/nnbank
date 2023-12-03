import React, { useEffect, useRef } from 'react'
import './message.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { SupportAgent } from '@mui/icons-material'

function Message({mg}) {

  const user = useSelector(selectUser)

   const ref = useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:'smooth'})
  },[mg])


  return (
    <>
      {
        mg?.email !== user.email ?
        <div ref={ref} className='mssg' >
          <SupportAgent/>
          {
          mg?.message ?
          <div ref={ref} className='message' >
              <p>{mg?.message}</p>
              <small>{new Date(mg?.timestamp?.toDate()).toLocaleTimeString()}</small>
          </div>
        : null
        }

          {
            mg?.photoURL ?
              <div ref={ref} className='messageimg2'>
              <img src={mg?.photoURL} alt='' />
              <small>{new Date(mg?.timestamp?.toDate()).toLocaleTimeString()}</small>
              </div> 
            : null
          }
      </div>
      :
      <div ref={ref} className='mssg1' >
        {
          mg?.message ?
          <div ref={ref} className='message' >
            <p>{mg?.message}</p>
            <small>{new Date(mg?.timestamp?.toDate()).toLocaleTimeString()}</small>
        </div>
        : null
        }

        {
            mg?.photoURL ?
            <div ref={ref} className='messageimg' >
            <img src={mg?.photoURL} alt='' /> 
            <small>{new Date(mg?.timestamp?.toDate()).toLocaleTimeString()}</small>
            </div>
            : null
          }
    </div>
      }
    </>
  )
}

export default Message