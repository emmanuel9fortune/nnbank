import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { CameraAlt } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from './firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { v4 } from "uuid";
import { selectUser } from './features/userSlice'
import Mohead from './Mohead'


function Veradd() {
    const [color, setcolor] = useState('true')


    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const navigate = useNavigate()

    const handleback=()=>{
        navigate('/verifyaccount')
    }

    const info = useSelector(selectInfo)

    const user = useSelector(selectUser)

    const [img, setimg] = useState(null)

    const handleClick =async(e) =>{
      e.preventDefault()

      if(img !== null){
          const imgRef =  ref(storage,`files/${v4()}`)
          uploadBytes(imgRef,img).then(value=>{
              getDownloadURL(value.ref).then(async(url)=>{
                  await updateDoc(doc(db, 'verifyad', user.uid),{
                   photo : url
                  })
              })
          })
      }else{
        alert('select image')
      }

      setimg(null)
      alert('Profile picture uploaded')
     }


  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>

        <div className='asset'>
            <div className='veradd'>
                <h2>Address Verification</h2>
                <p>City 
                    <span>{info?.userinfo?.city}</span>
                </p>

                <p style={{backgroundColor:'transparent'}}>State 
                    <span>{info?.userinfo?.state}</span>
                </p>

                <p>POST_Code 
                    <span>{info?.userinfo?.zipcode}</span>
                </p>

                <p style={{backgroundColor:'transparent'}}>Country 
                    <span>{info?.userinfo?.country}</span>
                </p>

                <p>Street Address 
                    <span>{info?.userinfo?.street}</span>
                </p>

                <div className='vrid_img'>
                    <input onChange={(e)=>setimg(e.target.files[0])} id='file1' type='file' style={{display:'none'}}/>
                    {
                        img === null?
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSW5fs4hlU7lepBmsaq2bIS6xhewYPc0l9urDXb2_yXF4_AVqp2zvUlpCxydXRdemvXTk&usqp=CAU' alt='' />
                        :
                        <img src={URL.createObjectURL(img)} alt='' />
                    }
                    <label htmlFor='file1'>
                      <CameraAlt/>
                      <p>SELECT BILL</p>
                    </label>
                </div>

                <button onClick={handleClick}>UPLOAD</button>
                <button onClick={handleback} style={{color:'white', backgroundColor:'skyblue'}} >GO BACK</button>
            </div>
        </div>
    </div>
  )
}

export default Veradd