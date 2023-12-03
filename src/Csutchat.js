import React, { useEffect, useState } from 'react'
import Message from './Message'
import { useSelector } from 'react-redux'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import { selectiD } from './features/idSlice'

function Csutchat() {

  const iD = useSelector(selectiD)

  const [msg, setmsg] = useState([])

    useEffect(()=>{
      const unsub = onSnapshot(doc(db, "chat", iD?.id), (doc) => {
          setmsg(doc.data().message);
      });
      return ()=>{
        unsub()
      }
  },[iD.id])
  
  
  return (
    <div className='chat_bod'> 
      <div className='mesg'>
        {
          msg?.map((mg)=>(
            <Message mg={mg} key={mg.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Csutchat