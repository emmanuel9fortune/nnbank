import React from 'react'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'


function Loged() {

const info = useSelector(selectInfo)

  return ( 
    <div  className='login ' >
    <div className='login_bod lgn' >
      <div className='log_img'> 
              <img src={'https://www.drupal.org/files/project-images/540_afd6a44c7d.png'} alt='' /> 
        </div>    
      <form  className='login_form'>
        <h1 style={{color:'green'}} >Account created successfully</h1>
        <small>Here are you detials please secure. You 
        will receive an email when your account 
        has been verified </small>
        <p>Name : {info?.userinfo.displayName}</p>
        <p>Email : {info?.userinfo.email}</p>
        <p>Account Number : { '30' + info?.userinfo.accountnumber}</p>
        <p>Password : {info?.userinfo.password}</p>

        <p>Note : Do no disclose information with anyone 
        and keep password safe. Thank you for banking with us</p>

        <button style={{marginTop:'2em'}} onClick={()=>signOut(auth)} >Go Back</button>

      </form>

    </div>
  </div>
  )
}

export default Loged