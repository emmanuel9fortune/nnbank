import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import './contact.css'
import cont from './img/Contact.png'
import Bottom from './Bottom'
import Cookies from 'js-cookie'

function Contact() {

  const [color, setcolor] = useState('true')


    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }





 
  return (
    <div onLoad={getcookie} className={color !== 'true' ? 'dashboard2' : 'dashboard'}>
      <Header/>
     

     <div className='fstbod'>
     <img src={cont} alt='' className='secuban1'/>

      <div className='lns1'>
          <Link to='/' className='ln'>
            <p>Home </p>
          </Link>
          <p>/ Contact</p>
      </div>

      <form className='form'>
        <input placeholder='Enter name'/>
        <input placeholder='Enetr Email'/>
        <select>
          <option>Get a Loan</option>
          <option>Get a Credit Card</option>
          <option>Open Account</option>
        </select>
        <textarea placeholder='Send Message' className='text'/>
        <button>SUBMIT</button>
      </form>
     </div>

      <Bottom/>
    </div>
  )
}

export default Contact