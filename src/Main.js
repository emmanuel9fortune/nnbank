import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Credit from './Credit';
import Fraud from './Fraud';
import Contact from './Contact';
import Login from './Login';
import Signing from './Signing';
import Privacy from './Privacy';
import Blog from './Blog';
import Career from './Career';
import Affiliate from './Affiliate';
import Account from './Account';
import Loan from './Loan';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Main() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path={user ? '/home' : '/'} element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/loan' element={<Loan/>} />
          <Route path='/credit' element={<Credit/>} />
          <Route path='/fraud' element={<Fraud/>} />
          <Route path='/contact' element={<Contact/>} /> 
          <Route path='/login' element={<Login/>} />
          <Route path='/signin' element={<Signing/>} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/affiliate' element={<Affiliate/>} />
          <Route path='/career' element={<Career/>} />
          <Route path='/businessloan' element={<Loan/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Home/>} />
          <Route path='/help' element={<Home/>} />
          <Route path='/createaccounts' element={<Home/>} />
          <Route path='/transactions' element={<Home/> } />
          <Route path='/transfer' element={<Home/> } />
          <Route path='/Payments' element={<Home/>} />
          <Route path='/signin' element={<Home/>} />
          <Route path='/login' element={<Home/>} />
          <Route path='/cards' element={<Home/>} />
          <Route path='/statistics' element={<Home/>} />
          <Route path='/applyloan' element={<Home/>} />
          <Route path='/accountdetails' element={<Home/>} />
          <Route path='/profile' element={<Home/>} />
          <Route path='/transfermoney' element={<Home/>} />
          <Route path='/sendmoney' element={<Home/>} />
          <Route path='/userprofile' element={<Home/>} />
          <Route path='/paybills' element={<Home/>} />
          <Route path='/notification' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
