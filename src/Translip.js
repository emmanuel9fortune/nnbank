import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Translip({tran ,id}) {

  const numft = new Intl.NumberFormat('en-us')

  const user = useSelector(selectUser)


  


  return (
    <>
       {
        tran?.email === user?.email ?
        <>
      
      { 
      tran?.bankname || tran?.status === 'bill' ?
      <div className='transctslips'>
          <div className='transctslips_head'> 
              
              {
                tran?.status === 'debit'?
                <div style={{backgroundColor:'cadetblue', display:'flex', alignItems:'center', justifyContent:'center',fontWeight:'800',  width:'2.5em',borderRadius:'10px'}} className='boxtr' >
                  {tran?.bankname.charAt(0).toUpperCase()}
                </div>
                  : null
              }
              { 
                tran?.status === 'bill'?
                <div className='boxtr' style={{backgroundColor:'cadetblue', display:'flex', alignItems:'center', justifyContent:'center',fontWeight:'800', borderRadius:'10px',   margin:'5px'}} >
                  {tran?.bankname.charAt(0).toUpperCase()}
                </div>
                : null
              }
              <div> 
              {
                tran.bankname ?
                null:
                tran.paymentservice
              }
              </div>
              <p style={{display:'flex', flexDirection:'column', width:'80%', margin:'5px'}} className='trsn'>
              <span style={{fontSize:'10px'}} >{tran.bankname}</span><br/>
              <small style={{fontWeight:'600'}} >{tran?.status}</small>
              </p>
              { tran.status === 'bill'?
                    <div>
                    <p style={{color:'brown', }} className='tram' >-${numft.format(tran?.amount)}</p>
                    <small>{  
                      tran?.time ?
                      tran?.time : 
                      new Date(tran?.timestamp?.toDate()).toLocaleDateString()}
                    </small>
                    </div>
                    : 
                    null
                  }
                  {
                    tran.status === 'debit'?
                    <div>
                    <p style={{color:'brown', }} className='tram' >-${numft.format(tran?.amount)}</p>
                    <small>{  
                      tran?.time ?
                      tran?.time : 
                      new Date(tran?.timetsamp?.toDate()).toLocaleDateString()}
                    </small>
                    </div>
                    : null
                  }
                  {
                    tran.status === 'credit'?
                    <div>
                    <p className='tram' style={{color:'green'}} >+${numft.format(tran?.amount)}</p>
                    <small>{  
                      tran?.time ?
                      tran?.time : 
                      new Date(tran?.timestamp?.toDate()).toLocaleDateString()}
                    </small>
                    </div>
                    : null
                  }
                  
          </div>
          
      </div>
      : null
    }
  </>
       : null
       }
    </>
  )
}

export default Translip