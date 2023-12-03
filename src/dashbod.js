import React, { useEffect, useState } from 'react'
import Mohead from './Mohead'
import './dashbod.css'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import {  CurrencyExchange,  Download, LocationOn, Receipt, ReceiptLong, Store } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import Banned from './Banned'
import { db } from './firebase'
import Translip from './Translip'
import ver4 from './asset/ver4.json'
import Notver from './Notver'
import Lottie from 'lottie-react'
import Bott from './Bott'
import Foru from './Foru'
import axios from 'axios'

const Dashboard =()=> {

  const [color, setcolor] = useState('true')
  const info = useSelector(selectInfo)




  const [ver, setver] = useState('true')


  const getcookie=()=>{
    let mycolor1 = Cookies.get('ver')
    setver(mycolor1)
    
    let mycolor = Cookies.get('myCat')
    setcolor(mycolor)
  }

  const [tran, settran] = useState([])


  const numft = new Intl.NumberFormat('en-us')


useEffect(()=>{
  db.collection('transaction').onSnapshot((snapshot)=>
  settran(
   snapshot.docs.map((doc)=>({
     id: doc.id,
     data : doc.data()
   }))
  )
  )
},[])


 const str = (30 + "" + info?.userinfo.accountnumber).slice(6)

const dash = true


const [location, setlocation] = useState({})
 
 
  useEffect(()=>{
      getLocation()
  },[])

  const getLocation =async()=>{
      const locate = await axios.get('https://ipapi.co/json')
      setlocation(locate.data)
  }


  return (
        <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>

    {
      info?.userinfo.valid  ?
      <>
        <Mohead/>

          <div className='dashbod' >
            <div className='ballbox'> 
 
            {/* account ballance */}

              <motion.div transition={{delay:1}} animate={{scale:1}} initial={{scale:0}} className='babox'>
                <h2>Hi, {info?.userinfo.displayName}</h2>
                  <small>Your current location <LocationOn/> </small>
                  <p>
                  <img className='flaggg' src={`https://flagcdn.com/${location?.country_code?.toLowerCase()}.svg`} width="20" alt='' />
                    { location.country_name}</p>
                <div className='bsb'>
                  

                  <div className='babox1'>

                    <h3>{
                      info?.userinfo?.balance !== null ?
                      <>
                        { 
                      info?.userinfo?.balance >= 0 ?
                      <>
                        {
                          info?.userinfo?.balance === 0 ?
                          <>$0.00</>
                          :
                          <>${numft.format(info?.userinfo?.balance)}</>
                        }
                      </>
                      :
                      <>$0.00</>
                    }
                      </>
                      :
                    <Lottie style={{width:'40px'}} animationData={ver4} />

                    }
                    </h3>
                    <small>Account Balance</small>
                  </div>

                  {
                    str ?
                  <div className='babox1'>
                    <h3>****{str}</h3>
                    <small> Account Number</small>
                  </div>
                  :
                  <Lottie style={{width:'40px'}} animationData={ver4} />
                  }
                 
                </div>



                {/* <div className='piec1'>
                      <div className='percnt'>
                          <div style={{boxShadow:'2px 4px 14px -3px green'}} >
                          <div style={{border:'1px solid green',width:'85%', height:'100%', backgroundColor:'green',padding:'2px'}} ></div>
                          </div>
                      </div>
                      <small>SIGNAL SRENGTH </small>
                </div> */}
              </motion.div>

            {/* mini links */}

              {
                info?.userinfo.ban  ?
              <>
                <h3 style={{marginTop:'1em', fontSize:'15px'}} >Quick Access</h3>
              <motion.div transition={{delay:2}} animate={{scale:1}} initial={{scale:0}} className='link_boxes'>

                <Link to='/sendmoney'  className='box1'>
                  <div className={color !== 'true' ?'minbox minbox' : 'minbox1 ' } >
                    <CurrencyExchange/>
                  </div> 
                  <small>TRANSFER</small>
                </Link>

                <Link to='/paybills' className='box1'>
                  <div className={color !== 'true' ?'minbox minbox' : 'minbox1 ' } >
                    <Store/>
                  </div>
                  <small>PAY BILLS</small>
                </Link>

                <Link to='/transactions' className='box1'>
                <div className={color !== 'true' ?'minbox minbox' : 'minbox1 ' } >
                  <Receipt/>
                </div>
                  <small>TRANSACTIONS</small>
                </Link>

                <Link to='/applyloan' className='box1'> 
                <div className={color !== 'true' ?'minbox minbox' : 'minbox1 ' } >
                  <Download/>
                </div>
                  <small>REQUEST LOAN</small>
                </Link>
                </motion.div>
              </>
                :
                null
              }
            </div>

            {
              !info?.userinfo.ban ?
              <Banned/>
              :
              <motion.div  transition={{delay:3}} animate={{scale:1}} initial={{scale:0}} className='dbbox'>
              <div className='transaction_head'>
                <h3 >Latest Transactions</h3>

                <Link to='/transactions' className='viewall' >
                  <p>View all </p> 
                  <ReceiptLong/>
                </Link>
              </div>
            

                    <div className='trnslp'>
                    {
                      tran?.map(({id, data})=>(
                          <Translip  id={id} color={color} tran={data} />
                        ))
                    }
                    </div>
               
              </motion.div>
            }
          </div>

          <Foru/>

          <Bott dash={dash} color={color} />
      </> 
        :
      <Notver  />
    }
       

    </div>
  )
}

export default Dashboard