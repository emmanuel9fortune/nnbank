import React from 'react'
import { selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { rct } from './features/rctSlice'

function TransSlips({tran, setfst}) {

  const numft = new Intl.NumberFormat('en-us')

  const str = tran?.accountnumber

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const rect =()=>{
    setfst(false)
    dispatch(
      rct({
        rct : tran
      })
    )
  }

  return (
   
    <>
      {
        tran?.email === user?.email ?
         <> 
            {
              tran?.name || tran?.businessname? 
              
              <div className='transact_list' onClick={rect} >
              <div className='transact_info'>
              {
                tran?.status === 'debit' || tran?.status === 'bill'?
                      <small className='tim1' >Debited</small>
                      : 
                      <small className='tim1' >credited</small>
              }
              <small className='tim'>{
                tran?.time ?
                tran?.time :
                new Date(tran?.timetsamp?.toDate()).toLocaleDateString()
              }</small>
                <div className='flexed'>
                  <div className='flex' >
                    <p>{tran.bankname}</p>
                    <p>{tran?.payeetype}</p>
                    {
                      tran?.status === 'debit' || tran?.status === 'bill'?
                      <small style={{fontSize:'10px'}} >Transactions made here are end-to-end encrypted not even sber bank can see your transactions.you were debited on your previouse transaction made between your account and </small>
                      : 
                      <small style={{fontSize:'10px'}} >Transactions made here are end-to-end encrypted not even sber bank can see your transactions.you were credited on your previouse transaction made between your account and</small>
                    }
                    <small>{tran?.businessname}</small>
                    <small>{tran?.name} account .</small>
                    <small> {tran?.paymentservice? 
                      <p>for {tran?.paymentservice} bill.</p>
                    : null} </small>
                  </div>

                  


                  
                  
                </div>
                <div className='transact_det'> 
                    {
                      tran?.status === 'debit' || tran?.status === 'bill'?
                      <p style={{color:'brown'}} className='tram' >-${numft.format(tran?.amount)}</p>
                      : 
                      <p className='tram' style={{color:'green'}} >+${numft.format(tran?.amount)}</p>
                    }
                  </div>
                <span className='accnum' >Account Number : {str} </span>

                <p>Click to view receipt.</p>
              </div>
            
            </div>
            : null
            }
          </>
         :
         null
      }
    </>

  )
}

export default TransSlips