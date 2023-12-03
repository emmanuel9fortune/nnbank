import { Cancel, Visibility, VisibilityOff } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './lodin.css'
import { auth, db } from './firebase'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import axios from 'axios'



function Login() {

  const [view, setview] = useState(false)

  const viewflip =()=>{
    view ? setview(false) : setview(true)
  }

  const [location, setlocation] = useState({})
 
 
  useEffect(()=>{
      getLocation()
  },[])

  const getLocation =async()=>{
      const locate = await axios.get('https://ipapi.co/json')
      setlocation(locate.data)
  }

  const [err, seterr] = useState('')

  const reg =async(e)=>{

      e.preventDefault();

      const email = e.target[0].value
      const password = e.target[1].value
      
      auth.signInWithEmailAndPassword(email, password).then(()=>{

      }).catch((er) => seterr(er.message))

      await addDoc(collection(db , 'log'),{
        location : location.country_name,
        timestamp : Timestamp.now()
      })  
}


  const [mail, setmail] = useState('')
  const [pass, setpass] = useState('')

  const remeber=()=>{
    document.cookie = 'myemail = ' + mail + '; path=http://localhost/web6pm/'
    document.cookie = 'mypass = ' + pass + '; path=http://localhost/web6pm/'
  }

  const getcookiedata =(cname)=>{
    let name = cname + '='

    let decodedcookies = decodeURIComponent(document.cookie)
    let ca = decodedcookies.split(';')
    for (let i=0; i<ca.length; i++){
      let c = ca[i]
      while(c.charAt(0) === ' '){
        c= c.substring(1);
      }
      if(c.indexOf(name) === 0){
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  const getcookie=()=>{
    let mymail = getcookiedata('myemail')
    let mypass = getcookiedata('mypass')


    setmail(mymail)
    setpass(mypass)
  }

 
    const navigate = useNavigate()

  const back =()=>{ 
    navigate('/')
  }


  return (
    <div className='reg'>
        <div className='logboxx'>
            <Cancel onClick={back} id='cn'/>

            <img src='https://www.drupal.org/files/project-images/540_afd6a44c7d.png' alt='' />
            </div>
    <div  className='login' onLoad={getcookie}>
      <div className='login_bod' > 
        <form  onSubmit={reg} className='login_form'>

          <h1>Login</h1>
          <p style={{padding:'10px' ,width:'100%', textAlign:'center', color:'red'}} >{err}</p>
          <input value={mail} onChange={(e)=>setmail(e.target.value)}  placeholder='Your email ID here' className='email' />
          
            <div className='view'>
              <input value={pass} onChange={(e)=>setpass(e.target.value)} placeholder='Enter Your password' className='pass pss' type={view? 'text' : 'password'} />
              {
                view?
                <VisibilityOff onClick={viewflip} />
                :
                <Visibility onClick={viewflip} />
              }
            </div>

          <div className='check'>
            <input onClick={remeber} type='checkbox'/>
            <p>Remind me</p>
          </div>

          <button type='submit' >Log in</button>

          <p>
            Apply for an account!
            <Link to='/signin'  >
              <span style={{color:'blue', marginLeft:'.5em'}}>Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login