import React, { useState } from 'react'
import Cookies from 'js-cookie'
import './profilebod.css'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { Lock, Logout, Person,Settings} from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, db, storage } from './firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { v4 } from "uuid";
import { selectInfo } from './features/infoSlice'
import Mohead from './Mohead'
import { signOut } from 'firebase/auth'
import Bott from './Bott'







function Profile1() {
  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  const user = useSelector(selectUser) 
  const info = useSelector(selectInfo)

    const [img, setimg] = useState(null)

    const handleClick =async(e) =>{
      e.preventDefault()

      if(img !== null){
        if(img !==null){
          const imgRef =  ref(storage,`files/${v4()}`)
          uploadBytes(imgRef,img).then(value=>{
              getDownloadURL(value.ref).then(async(url)=>{
                  await updateDoc(doc(db, 'users', user.uid),{
                   photoURL : url
                  })
              })
          })
       }
      }

      setimg(null)
      alert('Profile picture uploaded')
     }

     const prof = true


  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
      <Mohead/>

      <div className='dashbod' >
        <div className='profbod1'>
          <div className='pbox'>
            <Avatar src={img !== null ? URL.createObjectURL(img) : info?.userinfo.photoURL} id='avt'/>
            <h3>{user.displayName}</h3> 


            <input onChange={(e)=>setimg(e.target.files[0])} accept='image/*' id='fil' type='file' style={{display:'none'}} />
            {
              img !== null ?
              <label onClick={handleClick}>
              <p>Upload photo</p>
            </label>
            :
            <label htmlFor='fil'>
              <p>Edit photo</p>
            </label>
            }
          </div>

        </div>


        <div className='profbod1'>

        <Link to='/userprofile' className='plink'>
              <div style={{backgroundColor:'#3e3c61'}}>
                <Person/>
              </div>
                <p>Profile</p>
            </Link>

           <Link to='/updatepassword' className='plink'>
              <div style={{backgroundColor:'cadetblue'}}>
                <Lock/>
              </div>
                <p>Update Password</p>
            </Link>
            
           <Link to='/setting' className='plink'>
              <div style={{backgroundColor:'green'}}>
                <Settings/>
              </div>
                <p>Account Setting</p>
            </Link>
            
           <div className='plink' onClick={()=>signOut(auth)}>
              <div style={{backgroundColor:'skyblue'}}>
                <Logout/>
              </div>
                <p>Logout</p>
            </div>
        </div>

      </div>

      <Bott prof={prof} color={color} />
    </div>
  )
}

export default Profile1