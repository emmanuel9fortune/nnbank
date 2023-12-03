import { CardMembership, ContactEmergency, CurrencyExchange, DarkMode, Help, Home, LightMode, Logout, Menu, Notifications, Payment, Receipt, SupportAgent, Translate, Upgrade } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './head.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import Cookies from 'js-cookie'
import Translates from './Translate'
import { auth, db } from './firebase'
import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import { doc, onSnapshot } from 'firebase/firestore'
import { selectUser } from './features/userSlice'
import { iD } from './features/idSlice'



function Mohead({scl}) {
  const [menu, setmenu] = useState(false)

  const [color, setcolor] = useState('true')
  const info = useSelector(selectInfo)



  const remember=()=>{
           Cookies.set('myCat', 'true', { 
            secure: true,
            sameSite: 'strict',
            path: '/' 
          })
          window.location.reload()
  }
  const remember2=()=>{
           Cookies.set('myCat', 'false', { 
            secure: true,
            sameSite: 'strict',
            path: '/'
           })
           window.location.reload()
  }

  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }



  const [stick, setstick] = useState(false)

  const scrollfunction =()=>{
    if(window.scrollY >= window.innerHeight ){
      setstick(true)
    }
  }
  window.addEventListener('scroll', scrollfunction)

  const [trs, settrs] = useState(false)


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
    <div  className={color !== 'true' ? 'loghd_dark hp' : 'loghd hp'} onLoad={getcookie}>


        <div className='menu'>
          <div className='menuLogo'>
              <Menu onClick={()=>setmenu(true)} id='men' />
              <div className='hglogo'>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5Uc4yaplseKBkyPFaef6jf16aoC5kWDvrQ&usqp=CAU'} alt='' /> 
                <h3>SBER BANK</h3>
              </div>

          </div>

          {
            menu ?
            <div className='menus' onClick={()=>setmenu(false)}>
            <div className={color !== 'true' ? 'menu_links2' : 'menu_links'}>
            <img src='https://www.drupal.org/files/project-images/540_afd6a44c7d.png' alt='' />

              <Link to='/'  className={color !== 'true' ? 'links2' : 'links'} >
                <Home id='hdic'/>
                <p>Home</p>
              </Link>

              
              {
                info?.userinfo.ban ?
                <>
                <Link to='/profile' className={color !== 'true' ? 'links2' : 'links'} >
                <Avatar id='hdic'/>
                <p>Account</p>
              </Link>

              <Link to='/sendmoney' className={color !== 'true' ? 'links2' : 'links'} >
                <CurrencyExchange id='hdic'/>
                <p>Transfer</p>
              </Link>

              <Link to='/paybills' className={color !== 'true' ? 'links2' : 'links'} >
              <CardMembership id='hdic'/>
                <p>Pay bills</p>
              </Link>

              <Link to='/cards' className={color !== 'true' ? 'links2' : 'links'} >
              <Payment id='hdic'/>
                <p>Cards</p>
              </Link>

              <Link to='/transactions' className={color !== 'true' ? 'links2' : 'links'} >
                <Receipt id='hdic'/>
                <p>Transactions</p>
              </Link> 

              <Link to='/notification' className={color !== 'true' ? 'links2' : 'links'} >
                
                <Notifications id='hdic'/>
                <p>notification</p>
              </Link>

              <Link to='/applyloan' className={color !== 'true' ? 'links2' : 'links'} >
                <Upgrade id='hdic'/>
                <p>Request Loan</p>
              </Link>
                </>
              : 
              null
              }

              {
                Object.entries(chatid)?.map((id)=>(
                    <>
                        {
                            id?
                            <Link  onClick={()=>dispatchID(id)} to='/service' className={color !== 'true' ? 'links2' : 'links'}>
                              <SupportAgent id='hdic'/>
                              <p>Customer service</p>
                            </Link>
                            : null
                        }
                    </>
                ))
            }

              <Link to='/help' className={color !== 'true' ? 'links2' : 'links'} >
                <Help id='hdic'/>
                <p>Help</p>
              </Link>

              <div onClick={()=>signOut(auth)} className={color !== 'true' ? 'links2' : 'links'} >
                <Logout id='hdic'/>
                <p>Sign out</p>
              </div>
            </div>

          </div>
          : null
          }


        </div>




        <div className='sechd'  style={{display:'flex', alignItems:'center', justifyContent:'center'}}>           

        <Translate onClick={()=>trs ? settrs(false) : settrs(true)} id='hdic' />

            <div className='lit'>
                {
                  color !== 'true'?
                  <div onClick={remember}>
                    <LightMode id='hdic' />
                  </div> 
                  :
                  <div onClick={remember2}>
                    <DarkMode id='hdic' />
                  </div>
                }
                
            </div>

            <Logout onClick={()=>signOut(auth)} id='hdic'/>
        </div>

                {
                  trs ?
                  <div style={{position:'absolute', right:'.5em', bottom:'-4em'}}> 
                    <Translates/>
                  </div>
                  :
                  null
                }

    </div>
  )
}

export default Mohead