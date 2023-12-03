import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from './Cionfig'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

export function numberWithCommas (x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function Carosel() {

    const [currency, setcurrency] = useState([])

    const fetchtrendingcoins =async()=>{
        const {data} = await axios.get(TrendingCoins('USD'))
        setcurrency(data)
    }
  

    const items = currency.map((coin)=>{
        let profit = coin.price_change_percentage_24h >= 0

        return(
            <Link style={{textDecoration:'none', display:'flex', alignItems:'cnetre',
            flexDirection:'column', width:'100%',borderLeft:"1px solid grey", 
            borderRight:"1px solid whitesmoke"
            }} to='https://www.coingecko.com/' >
                 <div style={{width:'100%',display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <span style={{fontSize:'10px', color:'black',textTransform:'uppercase'}}>{coin?.symbol}
                        <span style={profit ? {color:'green'} : {color:'red'}}>
                            {profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%
                        </span>
                    </span>
                    <p style={{fontSize:'10px', color:'black'}}>
                        USD {numberWithCommas(coin?.current_price.toFixed(2))}
                    </p>
                 </div>
            </Link>
        )
    })

    useEffect(()=>{
        fetchtrendingcoins()
    },[])

    const resposive ={
        0:{
            items: 4,
        },
        512:{
            items: 4
        }
    }

  return (
    <div className='crypts'  style={{backgroundColor:'whitesmoke', padding:'5px'}} >
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={resposive}
            autoPlay
            items={items}
        />
    </div>
  )
}

export default Carosel