import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import { ClosedCaption, Email, Home, Person, Phone, TrackChanges } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'
import Mohead from './Mohead'

function Personal() {
    const [color, setcolor] = useState('true')


    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const info = useSelector(selectInfo)
  
    return (
      <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
          <Mohead/>
            <div className='asset' >
                <div className='personal'>
                    <Avatar src={info?.userinfo.photoURL} id='avt' />
                    <div className='pesbox b1'>
                        <div className='pesbod'>
                            <Email/>
                            <p>EMAIL</p>
                        </div>
                        <p>{info?.userinfo.email}</p>
                    </div>


                    <div className='pesbox'>
                        <div className='pesbod'>
                            <Phone/>
                            <p>MOBILE NUMBER</p>
                        </div>
                        <p>{info?.userinfo.phonenumber}</p>
                    </div>


                    <div className='pesbox b1'>
                        <div className='pesbod'>
                            <Person/>
                            <p>FIRST NAME</p>
                        </div>
                        <p>{info?.userinfo.fstn}</p>
                    </div>

                    
                    <div className='pesbox'>
                        <div className='pesbod'>
                            <Person/> 
                            <p>LAST NAME</p>
                        </div>
                        <p>{info?.userinfo.secn}</p>
                    </div>


                    <div className='pesbox b1'>
                        <div className='pesbod'>
                            <TrackChanges/>
                            <p>STREET ADDRESS</p>
                        </div>
                        <p>{info?.userinfo.street}</p>
                    </div>



                    <div className='pesbox'>
                        <div className='pesbod'>
                            <ClosedCaption/>
                            <p>POST CODE</p>
                        </div>
                        <p>{info?.userinfo.zipcode}</p>
                    </div>



                    <div className='pesbox b1'>
                        <div className='pesbod'>
                            <Home/>
                            <p>CITY</p>
                        </div>
                        <p>{info?.userinfo.city}</p>
                    </div>


                    <div className='pesbox b1'>
                        <div className='pesbod'>
                            <Home/>
                            <p>COUNTRY</p>
                        </div>
                        <p>{info?.userinfo.country}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Personal