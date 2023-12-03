import React from 'react'
import { Link } from 'react-router-dom'
import { ReceiptLong } from '@mui/icons-material'
import './accs.css'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'

function Acccs() {

  const info = useSelector(selectInfo)

  const numft = new Intl.NumberFormat('en-us')


  return (
    <div  className='secacc'>
             <div className='fstacc_head'>
                 <h3>Account Name</h3>
             </div>
             
             <div className='fstacc_head'>
                 <p style={{fontSize:'14px'}}>Time credited</p>
                 <p style={{fontSize:'12px'}} >Available</p>
             </div>



             <div className='acc_writes' >
                 <p style={{fontSize:'12px'}} >Account balance</p>
              <p style={{fontSize:'17px', fontWeight:800}}>${numft.format(info?.userinfo.balance)}</p>
            </div>

              <Link to='/transactions' className='accr' >
                  <div></div>
                  <div className='accr1' style={{color:'black'}} >
                    <p>Transactions</p>
                    <ReceiptLong/>
                  </div>
              </Link>
    </div>
  )
}

export default Acccs