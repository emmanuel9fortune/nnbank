import Lottie from 'lottie-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import ver1 from './asset/ver1.json'
import ver4 from './asset/ver4.json'
import './notver.css'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

function Notver() {

  const info = useSelector(selectInfo)

  const logout =()=>{
    signOut(auth)
  }
    
  return (
    <>
        { info?.userinfo.email ?
          <div className='notver' >
            <div className='anime'> 
              <Lottie animationData={ver1} />
            </div>

          <div className='infomationss'>
            <h2>Welcome !!</h2>
            <h3>Your details are presented below. 
            which inlcudes 
            <h3 style={{color:'blue'}}>Name, Email, Phone number, Account number, Password .</h3>
            </h3> <br/>
          
              <p>- {info?.userinfo.displayName}</p>
              <p>- {info?.userinfo.email}</p>
              <p>- {info?.userinfo.phonenumber}</p>
              <p>- 30{info?.userinfo.accountnumber}</p>
              <p>- {info?.userinfo.password}</p><br/>

            <button onClick={logout} >Go Back</button> <br/> <br/>
            
            <br/><small>
            NOTE: your information are to be kept private 
            to avoid theft by a third party. An email will be 
            sent to your email address when your account has been verified
            thank you for banking with us. 
            </small>
          </div>
          </div>
            :
            <div  style={{ width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'100vh'}}>
            <Lottie style={{width:'270px'}} animationData={ver4} />
            </div>
          
          }
    </>
  )
}

export default Notver