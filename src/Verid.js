import React, {  useState } from 'react'
import Cookies from 'js-cookie'
import { CameraAlt, Cameraswitch } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from './firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { v4 } from "uuid";
import Mohead from './Mohead'


function Verid() {
    const [color, setcolor] = useState('true')


    



    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const navigate = useNavigate()

    const handleback=()=>{
        navigate('/verifyaccount')
    }


    const user = useSelector(selectUser)


    const [img, setimg] = useState(null)
    const [img2, setimg2] = useState(null)

    const handleClick =async(e) =>{
      e.preventDefault()
        
        if(img && img2){
                const imgRef =  ref(storage,`files/${v4()}`)
                uploadBytes(imgRef,img).then(value=>{
                    getDownloadURL(value.ref).then(async(url)=>{
                        await updateDoc(doc(db, 'verifyid', user.uid),{
                         photo1 : url,
                        })
                    })
                })
      
                const imgRef1 =  ref(storage,`files/${v4()}`)
                uploadBytes(imgRef1,img2).then(value=>{
                    getDownloadURL(value.ref).then(async(url)=>{
                        await updateDoc(doc(db, 'verifyid', user.uid),{
                         photo2 : url,
                         status : 'pending'
                        })
                    })
                })
        }else{
            alert('select expected images')
        }
      setimg(null)
      setimg2(null)
      alert('id uploaded successfully')
     }




  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/> 

        <div className='asset'>
            <div className='verid'>
                <h2>Verify Your Identity</h2>
                <p>Please verify your identity by uploading a valid government issued identification card. You may experience difficulties when uploading from an ios device. Make sure your browser has camera access in your ios settings.</p>

                <div className='vrid_img'>
                    <input onChange={(e)=>setimg(e.target.files[0])} id='file1' type='file' style={{display:'none'}}/>
                    {
                        img === null ?
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSW5fs4hlU7lepBmsaq2bIS6xhewYPc0l9urDXb2_yXF4_AVqp2zvUlpCxydXRdemvXTk&usqp=CAU' alt='' />
                        :
                        <img src={URL.createObjectURL(img)} alt='' />
                    }
                    <label htmlFor='file1'>
                      <CameraAlt/>
                      <p>SELECT FRONT</p>
                    </label>
                </div>

                <div className='vrid_img'>
                    <input onChange={(e)=>setimg2(e.target.files[0])} id='file2' type='file' style={{display:'none'}} />
                    {
                        img2 === null ?
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSW5fs4hlU7lepBmsaq2bIS6xhewYPc0l9urDXb2_yXF4_AVqp2zvUlpCxydXRdemvXTk&usqp=CAU' alt='' />
                        :
                        <img src={URL.createObjectURL(img2)} alt='' />
                    }
                    <label htmlFor='file2'>
                    <Cameraswitch/>
                    <p>SELECT BACK</p>
                    </label>
                </div>

                <button onClick={handleClick}>UPLOAD</button>
                <button onClick={handleback} style={{color:'white', backgroundColor:'skyblue'}} >GO BACK</button>
            </div>
        </div>
    </div>
  )
}

export default Verid