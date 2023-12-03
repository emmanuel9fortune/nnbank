import React, { useEffect, useState } from 'react'
import Nots from './Nots'
import { Notifications } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { db } from './firebase'
import { selectUser } from './features/userSlice'
import Cookies from 'js-cookie'
import Mohead from './Mohead'
import Bott from './Bott'

function Notbod() {

  const [tran, settran] = useState([])

  const user = useSelector(selectUser)  

useEffect(()=>{
  db.collection('notification').onSnapshot((snapshot)=>
  settran(
  snapshot.docs.map((doc)=>({
    id: doc.id,
    data : doc.data()
  }))
  )
  )
},[user.uid])

const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const not = true
      
  
  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
    <div className='transact'>
        <h3 style={{display:'flex', alignItems:'center'}}>
        <Notifications/>
        Notifications</h3>

        {
          tran?.map(({id, data})=>(
            <Nots tran={data} key={id} />
          ))
        }
      </div>

      <Bott not={not} color={color} />
    </div>
  )
}

export default Notbod