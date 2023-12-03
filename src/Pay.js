import { CardGiftcard, CreditCard, DirectionsCar, LightbulbCircle, LiveTv, Phone, Score, Wifi } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Bott from './Bott'
import Mohead from './Mohead'
import Cookies from 'js-cookie'
import './pay.css'

function Pay() {

    const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const help = true

  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>


        <div className='payyy'>
        <div className='lfst' >
            <h3>Lifestyle</h3>

            <div className='lfbox '>
                <Link to={'/bet'} className={color !== 'true' ?'lfboxs lf1' : 'lfboxs1 lf1' }>
                    <Score/>
                    <p>Betting</p>
                </Link>

                <Link to={'/giftcards'} className={color !== 'true' ?'lfboxs lf2' : 'lfboxs1 lf2'}>
                    <CardGiftcard/>
                    <p>Gift Card</p>
                </Link>

                <Link to={'/transport'} className={color !== 'true' ?'lfboxs lf3' : 'lfboxs1 lf3'}>
                    <DirectionsCar/>
                    <p>Transport</p>
                </Link>
            </div>
        </div>

        <div className='lfst' >
            <h3>Essentials</h3>

            <div className='lfbox '>
                <Link to={'/paybills'} className={color !== 'true' ?'lfboxs lf6' : 'lfboxs1 lf1' }>
                    <Phone/>
                    <p>Phone bill</p>
                </Link>

                <Link to={'/paybills'} className={color !== 'true' ?'lfboxs lf7' : 'lfboxs1 lf1'}>
                    <LightbulbCircle/>
                    <p>Electricity</p>
                </Link>

                <Link to={'/paybills'} className={color !== 'true' ?'lfboxs lf7' : 'lfboxs1 lf1'}>
                    <LiveTv/>
                    <p>TV</p>
                </Link>

                <Link to={'/paybills'} className={color !== 'true' ?'lfboxs lf7' : 'lfboxs1 lf1'}>
                    <Wifi/>
                    <p>Internet</p>
                </Link>
            </div>
        </div>


        <div className='lfst'>
            <h3>Cardless Payments</h3>
            <div className='lfbox'>
                <Link to={'/cards'}className={color !== 'true' ?'lfboxs lf5' : 'lfboxs1 lf5'}>
                    <CreditCard/>
                    <p>Card</p>
                </Link>
            </div>
        </div>
        </div>


        <Bott help={help} color={color} />
    </div>
  )
}

export default Pay