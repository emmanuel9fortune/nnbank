import React from 'react'
import './transbod.css'
import { CurrencyExchange, PointOfSale, SystemUpdate, TransferWithinAStation } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Banned from './Banned'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'

function Transbod() {

  const info = useSelector(selectInfo)

  return (
    <>
      {
        info?.userinfo.ban ?
        <div className='dashbod' >
      <div className='payboard'>
        <h3 style={{display:'flex', alignItems:'center'}}>
        <TransferWithinAStation/> 
         Pay&Transfer</h3>
        <div className='payopts'>  
        <div className='payopts1'>
          <Link to='/deposit' className='blck'>
            <div>
              <SystemUpdate/>
            </div>
            <p>Deposit</p>
          </Link>


          <Link to='/sendmoney' className='blu'>
            <div>
              <CurrencyExchange/>
            </div>
            <p> Send Money</p>
          </Link>
          
         <Link to='/paybills' className='trp' >
              <div>
                <PointOfSale/>
              </div>
              <p>Pay Bills</p>
            </Link>

          </div>
        </div>
      </div>
    </div>
    : 
      <Banned/>
      }
    </>
    
  )
}

export default Transbod