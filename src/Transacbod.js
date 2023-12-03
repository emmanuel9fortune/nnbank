import React, { useEffect, useState } from 'react'
import './transaction.css'
import TransSlips from './TransSlips'
import { History } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { db } from './firebase'
import { selectInfo } from './features/infoSlice'
import Cookies from 'js-cookie'
import Mohead from './Mohead'
import Receipt from './Receipt'
import Lottie from 'lottie-react'
import ver4 from './asset/ver4.json'

function Transacbod() {

  const [tran, settran] = useState([])

  const user = useSelector(selectUser) 
  const info = useSelector(selectInfo)
  

  useEffect(()=>{
    db.collection('transaction').onSnapshot((snapshot)=>
    settran(
    snapshot.docs.map((doc)=>({
      id: doc.id,
      data : doc.data()
    }))
    )
    )
},[user.uid])


const numft = new Intl.NumberFormat('en-us')


const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const [fst, setfst] = useState(true)
       
  
  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        
        {
          fst ?
          <>
          <Mohead/>
          <div className='transact'>
            <h3 style={{display:'flex', alignItems:'center'}}>
            <History/>
            Recent Transactions</h3>
            
            <div className='trsh' >
            <h3>Current Balance</h3>
            { info?.userinfo.balance ?
              <p> ${ numft.format(info?.userinfo.balance)}</p>
              :
              <Lottie style={{width:'80px'}} animationData={ver4} />
            }
            
            
            </div>

            <div className='trslpp'>
              {
                tran?.map(({id, data})=>(
                  <TransSlips setfst={setfst} tran={data} key={id} />
                ))
              }
            </div>
          </div>
          </>
        :
        <Receipt setfst={setfst}/>
      }
    </div>
  )
}

export default Transacbod