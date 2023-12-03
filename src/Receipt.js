import React from 'react'
import { useSelector } from 'react-redux'
import { selectrct } from './features/rctSlice'
import { selectInfo } from './features/infoSlice'
import './rct.css'
import { ArrowBack } from '@mui/icons-material'

function Receipt({setfst}) {

    const rct = useSelector(selectrct)

    const numft = new Intl.NumberFormat('en-us')

    const info = useSelector(selectInfo)

  return (
    <div className='receipt'>
        <div className='rcthd'>
            <ArrowBack onClick={()=>setfst(true)} />

            RECEIPT
        </div>
        <div className='rct'>
        <div>
            <img className='rctimg' src='https://www.drupal.org/files/project-images/540_afd6a44c7d.png' alt='' />
        </div>

        <h3>Transaction Receipt</h3>

        <div className='rctwrt'>
            <strong>Transaction Amount</strong>
            <p>${numft.format(rct?.rct.amount)}</p>
        </div>

        <div className='rctwrt'>
            <strong>Transaction Type</strong>
            <p>INTER-BANK</p>
        </div>

        <div className='rctwrt'>
            <strong>Transaction Date</strong>
            <p>{new Date(rct?.rct.timetsamp?.toDate()).toLocaleDateString()}</p>
        </div>

        <div className='rctwrt'>
            <strong>Sender</strong>
            <p>{info?.userinfo.displayName}</p>
        </div>

        <div className='rctwrt'>
            <strong>Benefeciary</strong>
            <div>
                <p>{rct?.rct.name}</p>
                <p>{rct?.rct.accountnumber}</p>
                <p>{rct?.rct.bankname}</p>
            </div>
        </div>

        <div className='rctwrt'>
            <strong>Remark</strong>
            <p>TRF/ instant payment outward To {rct?.rct.name}</p>
        </div>

        <div className='rctwrt'>
            <strong>Ref</strong>
            <p>SBG{rct?.rct.accountnumber}1570734201</p>
        </div>

        <div className='rctwrt'>
            <strong>Transaction Status</strong>
            <p>Successfully Saved and Authorized</p>
        </div>

        <small style={{color:'black'}}>Thank you for choosing <span style={{color:'green'}} >Sber Bank</span></small>
    </div>
    </div>
  )
}

export default Receipt