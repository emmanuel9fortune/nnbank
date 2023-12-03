import Cookies from 'js-cookie'
import React, { useEffect, useRef, useState } from 'react'
import Bott from './Bott'
import Mohead from './Mohead'
import gft from './gift.json'
import { Avatar } from '@mui/material'
import { Search, ArrowBack } from '@mui/icons-material'
import data from './gift.json'
import { useDispatch, useSelector } from 'react-redux'
import { gift } from './features/giftSlice'
import { selectgift } from './features/giftSlice'
import { selectInfo } from './features/infoSlice'



function Gift() {
    const [color, setcolor] = useState('true')

  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    }

    const help = true

  const [filt, setfilt] = useState([])

  const handlefilt=(event)=>{
    const word = event.target.value
    const newfilt = data.filter((value)=>{
      return value.name.toLowerCase().includes(word.toLowerCase())
    })

    if(word === '' ){
      setfilt([])
    }else{
      setfilt(newfilt)
    }
  }


  const [enterpin, setenterpin] = useState(false)

  const ref = useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:'smooth'})
  },[enterpin])



  const giff = useSelector(selectgift)
  const info = useSelector(selectInfo)


  const dispatch = useDispatch()

  const handlegift =(gf)=>{
    setenterpin(true)

    dispatch(
      gift({
        gif : gf
      })
    )
    
  }


  const numft = new Intl.NumberFormat('en-us')









  return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>

        <div className='payyy'>

            
            

            <div className='lfst' >
              <h3>Gift Cards</h3>
                <div className='srchhh'>
                  <Search style={{color:'cadetblue'}} />
                  <input onChange={handlefilt}  placeholder='Search for gift card' />
                </div>
                <div className='lfbox' >
                  {
                    filt?.length === 0 ?
                    <>
                    {
                        gft.map((gf)=>(
                          <div style={{cursor:'pointer'}} onClick={()=>handlegift(gf)} className={color !== 'true' ?'lfboxs lf1' : 'lfboxs1 lf1' }>
                              <Avatar src={gf?.img} />
                              <p>{gf.name}</p>
                          </div>
                        ))
                      }
                    </>
                    :
                    <>
                    {
                        filt.map((gf)=>(
                          <div style={{cursor:'pointer'}} onClick={()=>handlegift(gf)} className={color !== 'true' ?'lfboxs lf1' : 'lfboxs1 lf1' }>
                              <Avatar src={gf?.img} />
                              <p>{gf.name}</p>
                          </div>
                        ))
                      }
                    </>
                  }
                  
                </div>
              </div>
        </div>


            {
              enterpin ?
              <div  className='user_pin' ref={ref} >
                <div style={{backgroundColor:'white', borderRadius:'20px', height:'100%', color:'black', justifyContent:'left'}} className='lfst' >

                  <div className='giftshd'>
                    <ArrowBack onClick={()=>setenterpin(false)} />
                    <p></p>
                  </div>

                  <h3 style={{fontWeight:'800', textAlign:'center', width:'100%', fontSize:'25px'}} >{giff?.gif.name}</h3>

                  <Avatar id='giftmgs' src={giff?.gif.img} />

                  <p className='giftrng' >Range : 
                    <strong>{giff?.gif.range}</strong>
                  </p>

                  <div className='betamt'>
                    <p>Amount</p>
                    <small>Balance : ${numft.format(info?.userinfo?.balance)}</small>
                  </div>
                  <input className='giftinpp'  placeholder='$5.00' />


                  <button className='giffbtn'>Buy</button>
                  <small className='giffsmll'>The ecode of this giftcard will be sent to your email after purchase </small>
                </div>
              </div>
              : null
            }

        
        
        <Bott help={help} color={color} />
        
    </div>
  )
}

export default Gift