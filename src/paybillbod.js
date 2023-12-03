import { Cancel, Payment } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import OTPInput from 'react-otp-input'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import { selectUser } from './features/userSlice'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { ToastContainer, toast } from 'react-toastify'
import Lottie from 'lottie-react'
import animate from './asset/animate.json'
import sucs from './asset/succ.json'



function Paybillbod() {
  const [pin, setpin] = useState('')
  const [verify, setverify] = useState('')

  const [agree, setagree] = useState(false)
  const [enterpin, setenterpin] = useState(false)
  const [ver, setver] = useState(false)
  const [err, seterr] = useState(false)
  const [otp, setotp] = useState(false)
  const [succ, setsucc] = useState(false)


  const [fst, setfst] = useState('')
  const [sec, setsec] = useState('')
  const [trd, settrd] = useState('')
  const [frt, setfrt] = useState('')
  const [fif, setfif] = useState('')
  const [six, setsix] = useState('')
  const [sev, setsev] = useState('')
  const [eit, seteit] = useState('')
  const [nin, setnin] = useState('')

  const [amt, setamt] = useState('')

  const info = useSelector(selectInfo)



  const transfer=()=>{
    if(fst !== '' && sec !== '' && trd !== '' && frt !== '' && fif !== '' && six !== ''&&
      sev !== '' && eit !== '' && nin !== ''
    ){
      setenterpin(true)
      setpin('')
      setamt(six)
    }
    
  }

  const handlepin=()=>{
    if(pin === info?.userinfo.pin){
      setotp(true)
      setenterpin(false)
      setagree(false)
      seterr(false)
    }else{
      seterr(true)
    }
  }

  const user = useSelector(selectUser)

  const sendotp =async()=>{
    const fst = Math.floor(Math.random() * 10);
    const sec = Math.floor(Math.random() * 10);
    const trd = Math.floor(Math.random() * 10);
    const frt = Math.floor(Math.random() * 10);

    const otpp = fst + ''+ sec  + trd + frt

    await updateDoc(doc(db, 'users', user.uid),{
      otp : otpp,
    })

    toast.success('otp sent successfully')

    setver(true) 

    setotp(false)
    setagree(false)


    await updateDoc(doc(db, 'notification', user.uid),{
      notification:arrayUnion({
        success : 'transaction successfull',
        status: 'bill',
        timestamp :  Timestamp.now(),
      })
    })
    
  }




  const verifyotp =async()=>{
    if(verify === info?.userinfo.otp){
      setver(false)
      setsucc(true)
      setverify('')
      seterr(false)
    }else{
      seterr(true)
      setverify('')
    }
    setagree(false)

    const newbalance = info?.userinfo.balance - sev


    await updateDoc(doc(db, 'users', user.uid),{
      balance : newbalance
    })

    const id = user.uid

    await updateDoc(doc(db, 'transaction', id),{
      transaction:arrayUnion({
        payment : fst,
        paymentservice : sec,
        businessname: frt,
        payeetype : fst,
        amount : sev,
        accountnumber : six,
        status: 'bill',
        timestamp :  Timestamp.now(),
      })
    })


    await updateDoc(doc(db, 'notification', id),{
      notification:arrayUnion({
        success : 'transaction successfull',
        status: 'bill',
        timestamp :  Timestamp.now(),
      })
    })

    setfst('')
    setsec('')
    settrd('')
    setfrt('')
    setfif('')
    setsix('')
    setsev('')
    seteit('')
    setnin('')
  }

  const ref = useRef(null);
  const rest = useRef()

  useEffect(()=>{
    rest.current?.scrollIntoView({behavior:'smooth'})
  },[enterpin])

  

  const numft = new Intl.NumberFormat('en-us')

  return (
    <>
        <div className='dashbod' >
    <ToastContainer/>
      <div className='accountbod'>
          <h3 style={{display:'flex', alignItems:'center'}}>
          <Payment/>
          Pay bill</h3>

          <div className='send_funds'>
            <p>Eneter Payee Detials</p>
            <div className='send_input'>
              <p>i'm paying a</p>
              <select value={fst} onChange={(e)=>setfst(e.target.value)} className='select_acc' >
                <option >select payee</option>
                <option >Businees</option>
                <option >Person</option>
              </select>
            </div>

            <div className='send_input'>
              <p>Payee Category</p>
              <select value={sec} onChange={(e)=>setsec(e.target.value)} className='select_acc' >
                  <option>Bills & Utilities</option>
                  <option>Electricity</option>
                  <option>Home Phone</option>
                  <option>Internet</option>
                  <option>Magazine Subscription</option>
                  <option>Miscellaneous Bills</option>
                  <option>Television</option>
                  <option>Trash and water</option>                
              </select>
            </div>

            <div className='send_input'>
              <p>Zipcode</p>
              <input value={trd} onChange={(e)=>settrd(e.target.value)} placeholder='enter zipcode' />
            </div>

            <div className='send_input'>
              <p>Name of Business or individual</p>
              <input value={frt} onChange={(e)=>setfrt(e.target.value)} placeholder='enter name' />
            </div>

            <div className='send_input'>
              <small>we will mail a check to the email available below</small>
              <p>Payees Address</p>
              <input value={fif} onChange={(e)=>setfif(e.target.value)} placeholder='Payees address' />
            </div>

            <div className='send_input'>
              <p> Account Number</p>
              <input value={six} onChange={(e)=>setsix(e.target.value)} placeholder='Account Number' />
            </div>

            <div className='send_input'>
              <p>Amount</p>
              <input value={sev} onChange={(e)=>setsev(e.target.value)} placeholder='amount' />
            </div>

            <div className='send_input'>
              <p>Memo</p>
              <input value={eit} onChange={(e)=>seteit(e.target.value)} placeholder='Memo' />
            </div>

            <div className='send_input'>
              <p>Send on</p>
              <input value={nin} onChange={(e)=>setnin(e.target.value)} type='date' />
            </div>

          <button onClick={transfer} >Submit Paymment</button>
          </div>

          <div className='trans_wr'>
            <h3>Note:</h3>
            <p>To ensure you accurately Add Payee, please pay attention to the following details:</p>
            <small>1. The Payee Account Number and Bank information refers to RMB denominated accounts opened in standard Chartered bank</small>
            <small>2. In order to secure custormer data corresponding payee account name will be partially masked</small>
          </div>

      </div>
    </div>






    {
  enterpin && !ver ?
  <div  className='user_pin' ref={ref} >
  <div className='pin' ref={rest} style={{zIndex:'1000', position:'relative'}}  >
  <div  onClick={()=>setenterpin(false)} style={{position:'absolute', left:0, top:0}}>
      <Cancel/>
    </div>
    <h2 style={{color:'black'}}>Enter Pin Code</h2>
    <p style={{fontSize:'12px', color:'black'}} >Enter account COT code</p>
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
      <p  style={{color:'black'}}>you agree to our online banking terms & privacy </p>
    </div>
    {
      !agree?
      <button style={{opacity:'.6'}} >Verify</button>
      : 
      <button onClick={handlepin}>Verify</button>
    }

    {err?
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
otp ?
<div className='user_pin' onClick={()=>setver(false)} >
  <div className='pin2' >
    <h2  style={{color:'black'}}>Send Otp Code</h2>
    <p style={{fontSize:'12px', color:'black'}} >Send otp code to email</p>

    <Lottie style={{width:'100px'}} animationData={animate} />

      <button onClick={sendotp} >Send</button>
  </div>
</div>
: null
}


{
ver ?
<div className='user_pin'  >
  <div className='pin2' style={{zIndex:'1000', position:'relative'}}  >
  <div  onClick={()=>setver(false)} style={{position:'absolute', left:0, top:0}}>
      <Cancel/>
    </div>
    <h2 style={{color:'black'}}>Verify Code</h2>
    <p style={{fontSize:'12px', color:'black'}} >Enter code sent to your email</p>
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
      <p style={{color:'black'}}>you agree to our online banking terms & privacy </p>
    </div>
    {
      !agree?
      <button style={{opacity:'.6'}} >Verify</button>
      : 
      <button onClick={verifyotp} >Verify</button>
    }

    {err?
      <small style={{width:'90%', textAlign:'center', fontSize:'12px',backgroundColor:'red', color:'white',marginTop:'1em', padding:'5px'}}>
      wrong otp entered you only 
      have 4 more tries or you will be logged out
      </small>
      : null
    }
  </div>
</div>
: null
}


{ succ && six < info?.userinfo.balance ?
<div className='user_pin' onClick={()=>setver(false)} >
  <div className='pin3' >
  <Lottie style={{width:'150px'}} animationData={sucs} />
    <h2 style={{color:'black'}}>Sent Successfully !!</h2>
    <h3 style={{color:'black'}}>${numft.format(amt)}</h3>
    <small style={{fontSize:'12px', color:'green'}}>money should be received by beneficiary within 5 minutes</small>
    <p style={{fontSize:'12px', color:'green', marginBottom:'2em'}} >Thank You For Banking With Us</p>


    <button onClick={()=>setsucc(false)} >Go Back</button>
  </div>
</div>
:
null
}
   </>
  )
}

export default Paybillbod