import { CameraAlt, SystemUpdate } from '@mui/icons-material'
import React from 'react'
import './depositbod.css'

function Depositbod() {
  return (
    <div className='dashbod'>
        <h3 style={{marginTop:'4em'}}>
        <SystemUpdate/> 
        Deposit </h3>

        <div className='depositbod'>
            <small style={{width:'100%', fontWeight:'800', marginLeft:'2em'}} >Deposit account</small>
            <input/>
            <small style={{width:'100%', fontWeight:'800', marginLeft:'2em'}} >amount</small>
            <input/>

           <div className='deposit_bod'>
           <div>
                <input style={{display:'none'}} type='file' id='fil' />
                <label htmlFor='fil' className='lab' >
                <CameraAlt/>
                <small>Front of check</small>
                </label>
            </div>

           <div>
                <input style={{display:'none'}} type='file' id='fill'/>
                
                <label htmlFor='fill' className='lab'>
                <CameraAlt/>
                <small>Back of check</small>
                </label>
            </div>
           </div>

            <button>Confirm Deposit</button>
        </div>
    </div>
  )
}

export default Depositbod