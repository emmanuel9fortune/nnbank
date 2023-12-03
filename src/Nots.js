import { Mail } from '@mui/icons-material'
import React from 'react'

function Nots({tran}) {
  return (
    <>
    {
      tran?.success ?
      <div className='transact_list'>
    <div className='transact_info'>
      <p style={{display:'flex' , alignItems:'center'}} >
        <Mail/>
      {tran?.success}</p>
      <span>
        {
          tran?.status === 'bill' || tran?.status === 'debit' ?
          <p> Transaction made</p>
          : null
        }

        {
          tran?.status === 'credit' ?
          <p> Account credited</p>
          : null
        }
        {
          tran?.status === 'ban' ?
          <p style={{color:'red'}} > Account Restricted</p>
          : null
        }
      </span>
    </div>

    <small>{
      tran?.time ?
        tran?.time :
        new Date(tran?.timestamp?.toDate()).toLocaleDateString()
    }</small>
  </div>  
  :
  null
    }
    </>
  )
}

export default Nots