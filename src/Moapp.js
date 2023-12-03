import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Accounts from './Accounts';
import Transaction from './Transaction';
import Payment from './Payment';
import Card from './Card';
import Loanchart from './Loanchart';
import Transfer from './Transfer';
import Accdet from './Accdet';
import Profile from './Profile';
import Trpage from './Trpage';
import Sendmoney from './Sendmoney';
import Paybill from './Paybill';
import Deskdash from './Deskdash';
import Service from './Service';
import Notification from './Notification';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Deposit from './Deposit';
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import { info } from './features/infoSlice';
import Stats from './Stats';
import Personal from './Personal';
import Upaddress from './Upaddress';
import Verifyacc from './Verifyacc';
import Verid from './Verid';
import Veradd from './Veradd';
import Setting from './Setting';
import Passup from './Passup';
import Pay from './Pay';
import Bet from './Bet';
import Gift from './Gift';
import Transport from './Transport';
import { Atm } from '@mui/icons-material';
import Cardd from './Cardd';




function Moapp() {

  const user = useSelector(selectUser)

  const [userinfo, setuserinfo] = useState([])

  const dispatch = useDispatch()

  
  


  useEffect(()=>{
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            setuserinfo( doc.data());
        });

        return ()=>{
          unsub()
        }
  },[user.uid])

  useEffect(()=>{
    if(userinfo){
      dispatch(
        info({
          userinfo : userinfo,
        })
      )
    }
},[dispatch, userinfo])

  return ( 
    <Router>
        <Routes>
        <Route path='/' element={<Deskdash/>}/>
        <Route path='/service' element={<Service/>} />
          <Route path='/help' element={<Accounts/>} />
          <Route path='/transactions' element={<Transaction/> } />
          <Route path='/transfer' element={<Transfer/> } />
          <Route path='/Payments' element={<Payment/>} />
          <Route path='/pay' element={<Pay/>} />
          <Route path='/signin' element={<Deskdash/>} />
          <Route path='/login' element={<Deskdash/>} />
          <Route path='/cards' element={<Card/>} />
          <Route path='/applyloan' element={<Loanchart/>} />
          <Route path='/accountdetails' element={<Accdet/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/deposit' element={<Deposit/>} /> 
          <Route path='/bet' element={<Bet/>} /> 
          <Route path='/atm' element={<Atm/>} /> 
          <Route path='/card' element={<Cardd/>} /> 
          <Route path='/transport' element={<Transport/>} /> 
          <Route path='/giftcards' element={<Gift/>} /> 
          <Route path='/transfermoney' element={<Trpage/>} />
          <Route path='/sendmoney' element={<Sendmoney/>} />
          <Route path='/paybills' element={<Paybill/>} />
          <Route path='/notification' element={<Notification/>} />
          <Route path='/statistics' element={<Stats/>} />
          <Route path='/userprofile' element={<Personal/>} />
            <Route path='/notification' element={<Notification/>} />
            <Route path='/updateaddress' element={<Upaddress/>} />
            <Route path='/verifyaccount' element={<Verifyacc/>} />
            <Route path='/idverification' element={<Verid/>} />
            <Route path='/addressverification' element={<Veradd/>} />
            <Route path='/setting' element={<Setting/>} />
            <Route path='/updatepassword' element={<Passup/>} />
        </Routes>
    </Router>
  )
}

export default Moapp