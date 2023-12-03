import { ArrowCircleDown, VerifiedUser } from '@mui/icons-material'
import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { dbauth } from './firebase'
import Ad from './Ad'
import Cookies from 'js-cookie'
import Mohead from './Mohead'




function Passup() {

    const [fst , setfst] = useState('')
    const [elv , setelv] = useState(false)

    const Register=()=>{
        setelv(true)
        const email =fst

        sendPasswordResetEmail(dbauth, email).then((data)=>{
          alert('password reset link sent')
        }).catch((err)=>{
          alert(err.message)
        })
    }


    const [color, setcolor] = useState('true')


    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }
  
    

  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
      <div className='reg' >
        <div className='logbox'>

            <div style={{width:'100%'}}>
                <Ad/>
            </div>

            <div className='regi'>
            <div style={{color:'palegreen'}} className='regb'>
                    <ArrowCircleDown id='regic'/>
                    <h3>Enter Email to Receive Password Reset Link</h3>
                </div>

                <div style={{color:'palegreen'}} className='vline'>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </div>

                <div className='regb'>
                    <VerifiedUser id='regic'/>
                    <h3>Go to Your email And Reset Your Password</h3>
                </div>
        </div>
        </div>

        <div className='reg_form' style={{marginTop:'0'}}>
            <div className='reimg' style={{marginTop:'0'}}>
            </div>
            <div className='regin'>
                <input placeholder='enter email' type='email' onChange={(e)=>setfst(e.target.value)} />
                {
                    elv && fst === '' ?
                    <small className='err'>Email needed to reset pasword </small>
                    : null
                }
            </div>

            <div className='regin'>
                <button onClick={Register}>Reset</button>
            </div>
            </div>

            
    </div>
    </div>
  )
}

export default Passup