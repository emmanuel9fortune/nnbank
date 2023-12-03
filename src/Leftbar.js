import { Dashboard, History, Payment, Logout, TransferWithinAStation, Notifications, SupportAgent, Help } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './leftbar.css'
import logo from './img/vt.png'
import { signOut } from 'firebase/auth'
import { auth, db } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import { selectUser } from './features/userSlice'
import { doc, onSnapshot } from 'firebase/firestore'
import { iD } from './features/idSlice'


function Leftbar({dash, trans, transc, acc, cust, card, not}) {

    const info = useSelector(selectInfo)
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
    <div className='leftbar'>
        <div className='logovt2'>
            <img  src={logo} alt='' /> 
        </div> 

        <Link to='/profile' className='p_link' >
            <Avatar id='av' />
            <p>View Profile</p>
        </Link>

        <div className='sidebar_links'>
                    <Link to='/' className={!dash? 'slink' : 'cll'}>
                    <Dashboard/>
                    <p>Dashboard</p>
                    </Link>
            {
                info?.userinfo.ban ?
                <>
                    <Link to='/transfer' className={!trans? 'slink' : 'cll'}>
                        <TransferWithinAStation/>
                        <p>Pay & Transfer</p>
                    </Link>
                    <Link to='/transactions'  className={!transc? 'slink' : 'cll'}>
                        <History/>
                        <p>Transactions</p>
                    </Link>
                </>
                : null
            }
            
            {
                Object.entries(chatid)?.map((id)=>(
                    <>
                        {
                            id?
                            <Link onClick={()=>dispatchID(id)} to='/service' className={!cust? 'slink' : 'cll'}>
                                <SupportAgent/>
                                <p style={{display:'flex'}} >Customer care
                                <div className='nots' ></div>
                                </p>
                            </Link>
                            : null
                        }
                    </>
                ))
            }
            
            {
                info?.userinfo.ban ?
                <>
                <Link to='/cards' className={!card? 'slink' : 'cll'}>
                    <Payment/>
                    <p>Cards</p>
                </Link>
                <Link to='/notification' className={!not? 'slink' : 'cll'}>
                    <Notifications/>
                    <p style={{display:'flex'}}  >Notification
                        <div className='nots' ></div>
                    </p>
                </Link>
                <Link to='/help'  className={!acc? 'slink' : 'cll'}>
                    <Help/>
                    <p>Help</p>
                </Link>
                </>
                :
                null
            }
        </div>

        <div className='logout' onClick={()=>signOut(auth)}>
            <Logout/>
            <p>Sign out</p>
        </div>
    </div>
  )
}

export default Leftbar