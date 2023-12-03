import React, { useState } from 'react'
import './rightbar.css'
import { Link } from 'react-router-dom'
import an4 from './img/an4.jpg'
import { Key, MoreVert, ReceiptLong, TrendingDown, TrendingUp } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectInfo } from './features/infoSlice'

function Rightbar({loan}) {

  const info = useSelector(selectInfo)

  const [sta, setsta] = useState()

  return (
    <div className='rightbar'>
 
      {
        info?.userinfo.pin === '' ?
        <div style={{width:'90%', borderRadius:'10px'}} className='dash_writes dashloan'>
          <Key/>
          <h3>Complet Your Account setup</h3>
          <p>set your COT code</p>
          <small style={{width:'100%', textAlign:'center'}}>Your security is our top priority. You'll need this to log into your bankio account</small>
            <Link to='/profile' className='aploan' >
              <p>Set Now</p>
            </Link>
        </div>
      : null
      }


      <div style={{width:'90%', borderRadius:'10px', position:'relative'}} className='dash_writes dashloan'>
          <h3 style={{width:'100%', textAlign:'left' , padding:'5px'}} >Statistics</h3>
            
            <div className='trnds'>
            <div  className='trnd' >
              <TrendingDown/>
              <p>(18) Debits</p>
            </div>
            <div  className='trnu' >
              <TrendingUp/>
              <p>(8) Credits</p>
            </div>
            </div>


            <div  style={{position:'absolute', top:0, right:0}} className='more_link'>
                   {sta?
                        <div className='link_more' >
                        <Link to='/transactions' className='more_lk' >
                            <ReceiptLong/>
                            <small>View More</small>
                        </Link>                         
                        </div>
                        : null
                   }
                        <MoreVert  onClick={()=>
                            sta ? setsta(false) : setsta(true)
                        }
                       />
                   </div>

      </div>


      

      { !loan?
        <div className='dashloan' >
          <img src={an4} alt='' />
          <div className='dash_writes'>
            <h3>Looking for a home Loan ?</h3>
            <p>Owning a home loan is a big decision.A good start 
            can make all the difference. Thats why we offer 
            a home loan to help you save money and build wealth.
            Wheather you are buying, building or removing a house
            you can receive advise from us 
            </p>
          </div>
          <Link to='/applyloan' className='aploan' >
            <p>Apply Now</p>
          </Link>
        </div>
        : null
      }

    </div>
  )
}

export default Rightbar