import { Cancel, TransferWithinAStation } from '@mui/icons-material'
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import suc from './img/suc.png'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'


function Trpagebod() {
  const [pin, setpin] = useState('')
  const [verify, setverify] = useState('')
  const [err, seterr] = useState(false)

  const [agree, setagree] = useState(false)
  const [enterpin, setenterpin] = useState(false)
  const [ver, setver] = useState(false)
  const [succ, setsucc] = useState(false)

  const info = useSelector(selectInfo)


  const [fst, setfst] = useState('')
  const [sec, setsec] = useState('')
  const [trd, settrd] = useState('')

  const transfer=()=>{
    if(fst !== '' && sec !== '' && trd !== '' ){
      setenterpin(true)
    }
  }

  const handlepin=()=>{
    if(pin === info?.userinfo.pin){
      setver(true)
      setenterpin(false)
    }else{
      seterr(true)
    }
  }

  return (
    <div style={{position:'relative'}}  className='dashbod'>
      <div className='accountbod'>
          <h3 style={{display:'flex', alignItems:'center'}}>
          <TransferWithinAStation/>
          Transfer money</h3>

          <div className='send_funds'>
            <p>Transfer to own ccount</p>
            <div className='send_input'>
              <p>Transfer from</p>
              <input value={info?.userinfo.accounttype + " " + 'account'} />
            </div>

            <div className='send_input'>
              <p>Account Number</p>
              <input value={ '30' + info?.userinfo.accountnumber} />
            </div>

            <div className='send_input'>
              <p>Beneficiary Account name Holder</p>
              <input onChange={(e)=>setfst(e.target.value)} placeholder='Account name Holder' />
            </div>

            <div className='send_input'>
              <p>Beneficiary Account Number</p>
              <input onChange={(e)=>setsec(e.target.value)} placeholder='Account Number' />
            </div>

            <div className='send_input'>
              <p>Amount</p>
              <input onChange={(e)=>settrd(e.target.value)} placeholder='amount' />
            </div>

          <button onClick={transfer} >Transfer</button>
          </div>

          <div className='trans_wr'>
            <h3>Note:</h3>
            <p>To ensure you accurately Add Payee, please pay attention to the following details:</p>
            <small>1. The Payee Account Number and Bank information refers to RMB denominated accounts opened in standard Chartered bank</small>
            <small>2. In order to secure custormer data corresponding payee account name will be partially masked</small>
          </div>

      </div>


      {
        enterpin?
        <div className='user_pin' style={{zIndex:'1'}}>
        <div className='pin' style={{zIndex:'1000', position:'relative'}}  >
        <div  onClick={()=>setenterpin(false)} style={{position:'absolute', left:0, top:0}}>
            <Cancel/>
          </div>
          <h2>Enter Pin Code</h2>
          <p style={{fontSize:'12px'}} >Enter account COT code</p>
          <OTPInput
            value={pin}
            onChange={setpin}
            inputStyle={{padding:'10px', 
            width:'3em', height:'3em',border:'1px solid black',
            fontSize: '15px', osuccflow:'hidden',counterReset:'none'}}
            numInputs={5}
            disabled={false}
            autoFocus
            inputType={'password'}
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
          ></OTPInput>
          <div className='user_check'>
            <input onClick={()=>{
              agree ? setagree(false) : setagree(true)
            }} type='checkbox' />
            <p>you agree to our online banking terms & privacy </p>
          </div>
          {
            !agree?
            <button style={{opacity:'.6'}} >Verify</button>
            : 
            <button onClick={handlepin} >Verify</button>
          }

          { err?
            <small style={{width:'90%', textAlign:'center', fontSize:'12px',backgroundColor:'red', color:'white',marginTop:'1em', padding:'5px'}}>
            wrong pin entered you only 
            have 4 more tries or you will be logged out
            </small>
            : null
          }
        </div>
      </div>
        : null
      }




     {
      ver ?
      <div className='user_pin' style={{zIndex:'1', position:'relative'}}>
        <div className='pin2' style={{zIndex:'1000'}}>
          <div onClick={()=>setver(false)}  style={{position:'absolute', left:0}}>
            <Cancel/>
          </div>
          <h2>Verify Code</h2>
          <p style={{fontSize:'12px'}} >Enter code sent to your email</p>
          <OTPInput
            value={verify}
            onChange={setverify}
            inputStyle={{padding:'10px', marginTop:'2em',width: '3em',
            height: '3em',border:'1px solid black', position:'relative',
            fontSize: '15px'}}
            numInputs={4}
            disabled={false}
            autoFocus
            inputType={'password'}
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
          ></OTPInput>
          <div className='user_check'>
            <input onClick={()=>{
              agree ? setagree(false) : setagree(true)
            }} type='checkbox' />
            <p>you agree to our online banking terms & privacy </p>
          </div>
          {
            !agree?
            <button style={{opacity:'.6'}} >Verify</button>
            : 
            <button>Verify</button>
          }

          {
            <small style={{width:'90%', textAlign:'center', fontSize:'12px',backgroundColor:'red', color:'white',marginTop:'1em', padding:'5px'}}>
            wrong verification code make sure you have the right one
            </small>
          }
        </div>
      </div>
      : null
     }


     { succ?
      <div className='user_pin' onClick={()=>setver(false)} >
        <div className='pin2' >
          <img style={{width:'6em'}} src={suc}  alt='' />
          <h2>Sent Successfully !!</h2>
          <p style={{fontSize:'12px'}} >Thank You For Banking With Us</p>
          <button onClick={()=>setsucc(false)} >Go Back</button>
        </div>
      </div>
      :
      null
     }
    </div>
  )
}

export default Trpagebod