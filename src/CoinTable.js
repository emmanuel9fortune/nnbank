import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CoinList } from './Cionfig'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { numberWithCommas } from './Carosel'

function CoinTable() {
    const [coins, setcoins ] = useState([])

    const fetcoins =async()=> {
        const {data}= await axios.get(CoinList('USD'))

        setcoins(data)
    }

    useEffect(()=>{
        fetcoins()
    },[])
    
  return (
    <div style={{width:'100%', marginTop:'4em', marginBottom:'4em',backgroundColor:'ghostwhite'}} >
      <Table>
        <TableHead style={{backgroundColor:'whitesmoke'}}>
          <TableRow>
            {
              ['Coin', 'Price', '24hChange ', 'MarketCap'].map((head)=>(
                <TableCell
                  style={{
                    color:'white',
                    fontWeight: '800',
                    fontSize:'8px',
                    padding:5
                  }}
                  key={head}
                >
                  {head}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
              { coins.slice(93).map((row)=>(
                
                <TableRow key={row.name}>
                  <TableCell 
                    component='th'
                     scope='row' 
                     style={{display :'flex', padding:5, border:'none'}}
                     >
                    <img src={row?.image} alt={row.name}
                    style={{marginBottom:5, width: '1.5em', height: '1.5em'}} 
                     />
                     <div style={{display:'flex', flexDirection:'column'}} >
                      <span style={{textTransform:'uppercase', fontSize:8}} >
                        {row.symbol}
                      </span>
                      <span style={{ fontSize:8}}>{row.name}</span>
                     </div>
                  </TableCell>
                  <TableCell style={{ fontSize:8}} align='right' >
                    USD {numberWithCommas(row.current_price.toString())}
                  </TableCell>
                  <TableCell  align='right' style={row.price_change_percentage_24h>= 0 ? {color:'green',fontSize:8} : {color:'red', fontSize:8} }  >
                    {row.price_change_percentage_24h >= 0 && '+'}
                    {row.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>
                  <TableCell style={{ fontSize:8}} align='right' >
                    USD {numberWithCommas(row.market_cap.toString().slice(0, -6) )}m
                  </TableCell>
                </TableRow>
              ))
              }
        </TableBody>
      </Table>
    </div>
  )
}

export default CoinTable