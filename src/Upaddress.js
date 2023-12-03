import Cookies from 'js-cookie'
import React, { useState } from 'react'
import cunt from './countries.json'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Mohead from './Mohead'


function Upaddress() {
    const [color, setcolor] = useState('true')


    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const user = useSelector(selectUser)

    const [fst,setfst] = useState('')
    const [sec,setsec] = useState('')
    const [trd,settrd] = useState('')
    const [frt,setfrt] = useState('')
    const [fif,setfif] = useState('')

    const handleclick =async()=>{
      await updateDoc(doc(db, 'users',user.uid ),{
        street : fst,
        zipcode : sec ,
        city : trd ,
        state : frt,
        country : fif
      })
    }
  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
      <Mohead/>

      <div className='asset'>
        <div className='upadd'>
        <div className='binp'>
                <div className='bin'>
                    <input onChange={(e)=>setfst(e.target.value)} />
                    <label >street</label>
                </div>

                <div className='bin'> 
                    <input onChange={(e)=>setsec(e.target.value)}/>
                    <label>Zip_code</label>
                </div>

                <div className='bin'>
                    <input onChange={(e)=>settrd(e.target.value)}/>
                    <label>City</label>
                </div>

                <div className='bin'>
                    <input onChange={(e)=>setfrt(e.target.value)}/>
                    <label>State</label>
                </div>

                <div className='bin'>
                    <select onChange={(e)=>setfif(e.target.value)}>
                    {
                            cunt.map((cn)=>(
                                <option value={cn.name}>{cn.name}</option>
                            ))
                        }
                    </select>
                    <label>Country</label>
                </div>

                <button onClick={handleclick}>Update</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Upaddress