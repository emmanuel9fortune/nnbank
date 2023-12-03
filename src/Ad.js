import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import qo from './Quotes.json'
import './reg.css'
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';


export function numberWithCommas (x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function Ad() {

    const items = qo.map((coin)=>{ 

        return(
            <div style={{textDecoration:'none', display:'flex', alignItems:'cnetre', width:'100%',  padding:'10px', justifyContent:'center'}}  >
                 <div style={{width:'100%', display:'flex'}} className='addiv'>
                 <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5Uc4yaplseKBkyPFaef6jf16aoC5kWDvrQ&usqp=CAU'} alt='' />

                    <p className='add' style={{ color:'white', display:'flex', flexDirection:'column'}}>
                        <KeyboardDoubleArrowLeft style={{margin:'10px'}}/>
                        {coin.q}
                        <KeyboardDoubleArrowRight id='secarr' style={{position:'absolute', right:'1em', bottom:'1em'}} />
                    </p>
                 </div>
            </div>
        )
    })

    const resposive ={
        0:{
            items: 1,
        },
        512:{
            items: 1
        }
    }

  return (
    <div className='crypts'>
        {/* {
            coin.map((cn)=>(
                <div>
                    <small>{cn.symbol}</small>
                    <p>{cn.current_price}</p>
                </div>
            ))
        } */}

        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={5000}
            animationDuration={5500}
            disableDotsControls
            disableButtonsControls
            responsive={resposive}
            autoPlay
            items={items}
        />
    </div>
  )
}

export default Ad