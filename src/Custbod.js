import React, { useEffect, useRef, useState } from 'react'
import Csutchat from './Csutchat'
import { Image, Send } from '@mui/icons-material'
import './custbod.css'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectiD } from './features/idSlice'
import { db, storage } from './firebase'
import { selectUser } from './features/userSlice'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Null from './Null'
import Cookies from 'js-cookie'
import { v4 } from "uuid";


function Custbod() {

  const [input, setinput] = useState('')

  const iD = useSelector(selectiD)

  const user = useSelector(selectUser)

  const [img, setimg] = useState(null)
  const res = useRef()


  const send=async()=>{
    
      if(img === null){
         if(iD !== null){
        await updateDoc(doc(db, 'chat', iD?.id ),{
          message:arrayUnion({
            email : user.email,
            message : input,
            timestamp : Timestamp.now(),
          })
        })
    }



    }else{
        if(iD !== null){
          if(img !==null){
            const imgRef =  ref(storage,`files/${v4()}`)
            uploadBytes(imgRef,img).then(value=>{
                getDownloadURL(value.ref).then(async(url)=>{
                  await updateDoc(doc(db, 'chat', iD?.id),{
                    message:arrayUnion({
                    email : user.email,
                    message : input,
                    photoURL : url,
                    timestamp : Timestamp.now(),
                })
                })
            })
         })
      }}
    }
    setimg(null)
    setinput('')

      res.current.style.padding = 10 + 'px'
      res.current.style.height = 0 + 'px'
  }


  useEffect(()=>{
    res.current.style.height = 2 + 'em'
      if(res.current.style.height <= 60 + 'px'){
        res.current.style.height = res.current.scrollHeight + "px"
      }else if(res.current.style.height > 60 + 'px'){
        res.current.style.height= 10 + 'em'
      }
  },[input])


  const [color, setcolor] = useState('true')


  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }

  return (
     
        <div style={{position:'relative'}} className={color === 'true' ?  'chat1' :  'chat2'} onLoad={getcookie}>
      {
        iD ? 
        <Csutchat/> 
        : <Null/>
      }

      <div className='chat_field'>
        <textarea ref={res} value={input} onChange={(e)=>setinput(e.target.value)} 
        placeholder= {img?.name ? 'send image' : 'send a message'  }  />
        
        <input accept='image/*' onChange={(e)=>setimg(e.target.files[0])} type='file' style={{display:'none'}} id='fl'  /> 

        <label htmlFor='fl'  >
        <Image style={{color:'whitesmoke'}} />
        </label>

        {
          input.length > 0 || img?.name ?
          <div onClick={send} className='sendbtn'>
            <Send/>
          </div>
          :
          <div style={{backgroundColor:'grey'}} className='sendbtn'>
          <Send/>
        </div>
        }
      </div>
    </div>
  )
}

export default Custbod