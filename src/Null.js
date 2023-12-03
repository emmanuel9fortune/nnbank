import { SupportAgent } from '@mui/icons-material'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { iD } from './features/idSlice'
import Lottie from 'lottie-react'
import nul from './asset/null.json'

function Null() {

    const user = useSelector(selectUser)

    const [chatid, setchatid] = useState([])

    useEffect(()=>{
        const getid =()=>{
            const unsub = onSnapshot(doc(db, "userchat", user.uid), (doc) => {
                setchatid( doc.data());
            });
            return ()=>{
              unsub()
            }
        }

        user.uid && getid()
    },[user.uid])


    const dispatch = useDispatch()

    const dispatchID=(id)=>{
        dispatch(
            iD({
                id : id[1]
            })
        )
    }

  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%'}} >
        <Lottie style={{width:'100px'}} animationData={nul} />
        <small>secured chat</small>
        {
                Object.entries(chatid)?.map((id)=>(
                    <>
                        {
                            id?
                            <Link style={{width:'50%'}} onClick={()=>dispatchID(id)} to='/service' className={ 'cll'}>
                                <SupportAgent/>
                                <p style={{display:'flex'}} >Click to continue
                                </p>
                            </Link>
                            : null
                        }
                    </>
                ))
            }
    </div>
  )
}

export default Null