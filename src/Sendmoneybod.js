import { Cancel, CurrencyExchange } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import './sendmoney.css'
import OTPInput from 'react-otp-input'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import { selectUser } from './features/userSlice'
import { db } from './firebase'
import { Timestamp, addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Lottie from 'lottie-react'
import animate from './asset/animate.json'
import suc from './asset/succ.json'
import data from './Bank.json'


function Sendmoneybod() {

  const [pin, setpin] = useState('')
  const [verify, setverify] = useState('')

  const [agree, setagree] = useState(false)
  const [enterpin, setenterpin] = useState(false)
  const [ver, setver] = useState(false)
  const [otp, setotp] = useState(false)
  const [succ, setsucc] = useState(false)

  const [err, seterr] = useState(false)

  const info = useSelector(selectInfo)

  const [fst, setfst] = useState('')
  const [sec, setsec] = useState('')
  const [trd, settrd] = useState('')
  const [frt, setfrt] = useState('')
  const [fif, setfif] = useState('')
  const [six, setsix] = useState('')

  const [amt, setamt] = useState('')


  const ref = useRef(null);



  const transfer=()=>{
    if(fst !== '' && sec !== '' && trd !== '' && frt !== '' && fif !== '' && six !== ''){
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

    await updateDoc(doc(db, 'notification', user.uid),{notification:[]})

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

   if(six < info?.userinfo.balance){
    const newbalance = parseInt(info?.userinfo.balance) - parseInt(six)


    await updateDoc(doc(db, 'users', user.uid),{
      balance : newbalance
    })
    
    await addDoc(collection(db, 'transaction'),{
      bankname: fst,
      name : frt,
      amount : six,
      accountnumber : fif,
      status: 'debit' ,
      timetsamp : Timestamp.now(),
      email : user?.email,
      uid : user?.uid,
    })

    await addDoc(collection(db, 'notification'),{
        success : 'transaction successfull',
        status: 'bill',
        timestamp :  Timestamp.now(),
    })


    navigator.vibrate(3000);


    setfst('')
    setsec('')
    settrd('')
    setfrt('')
    setfif('')
    setsix('')
   }else{
    alert('insuficient funds')
   }
  }

  const numft = new Intl.NumberFormat('en-us')











  const rest = useRef()

  useEffect(()=>{
    rest.current?.scrollIntoView({behavior:'smooth'})
  },[enterpin])








  // const [filter, setfilter] = useState([])
  // const [wrd, setwrd] = useState('')

  // const handlefilter=(event)=>{
  //   const word = event.target.value
  //   setwrd(word)
  //   const newfilter = data.filter((value)=>{
  //     return value.name.toLowerCase().includes(word.toLowerCase())
  //   })

  //   if(word === '' ){
  //     setfilter([])
  //   }else{
  //     setfilter(newfilter)
  //   }
  // }





 


  return (
    <>
        <div className={'dashbod'} >
      <ToastContainer/>
      <div className='accountbod' >
          <h3 style={{display:'flex', alignItems:'center'}}>
          <CurrencyExchange/>
          Transfer money</h3>

          <div className='send_funds'>
          <div className='send_input'>
              <p>Transfer from</p>
              <input value={info?.userinfo.accounttype + " " + 'account'} />
            </div>

            <div className='send_input'>
              <p>Account Number</p>
              <input value={ '30' + info?.userinfo.accountnumber} />
            </div>

            <div className='send_input'>
              <p>Beneficiary Bank Name</p>
              <input value={fst} onChange={(e)=>setfst(e.target.value)} placeholder='Account Bank Name' />
              

            </div>

            <div className='send_input'>
              <p>Beneficiary Bank Branch</p>
              <input value={sec} onChange={(e)=>setsec(e.target.value)} placeholder='Bank Branch' />
            </div>

            <div className='send_input'>
              <p>Beneficiary Bank Swift Code</p>
              <input value={trd} onChange={(e)=>settrd(e.target.value)} placeholder='Bank Swift Code' />
            </div>

            <div className='send_input'>
              <p>Beneficiary Account name Holder</p>
              <input value={frt} onChange={(e)=>setfrt(e.target.value)} placeholder='Account name Holder' />
            </div>

            <div className='send_input'>
              <p>Beneficiary Account Number</p>
              <input value={fif} onChange={(e)=>setfif(e.target.value)} placeholder='Account Number' />
            </div>

            <div className='send_input'>
              <p>Amount</p>
              <input value={six} onChange={(e)=>setsix(e.target.value)}  placeholder='amount' />
            </div>

           <a href='#top' className='trsbtn' onClick={transfer} >
            <button>Transfer</button>
           </a>

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
  <Lottie style={{width:'150px'}} animationData={suc} />
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

export default Sendmoneybod