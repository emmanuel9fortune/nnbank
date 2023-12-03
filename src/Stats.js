import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { selectInfo } from './features/infoSlice'
import { useSelector } from 'react-redux'
import Mohead from './Mohead'
import Inchart from './Inchart'
import Barchat from './Barchat'
import './stats.css'
import Legend from './Legend'
import Piechat from './Piechat'
import Bott from './Bott'
import Foru from './Foru'

function Stats() {
    const [color, setcolor] = useState('true')

    const info = useSelector(selectInfo)
  
  
    const getcookie=()=>{
      let mycolor = Cookies.get('myCat')
  
      setcolor(mycolor)
    } 
      
  
    const numft = new Intl.NumberFormat('en-us')


    const [bar, setbar] = useState('bar')

    const stat = true
  
  
    return (
    <div className={color !== 'true' ? 'dashboard2' : 'dashboard'} onLoad={getcookie}>
        <Mohead/>
        
        <div className='dashbod stbb' >
            <div className='statbod1'>
             <h3 >Statistics</h3>
                <div className='stathd'>
                    
                    <select onChange={(e)=>setbar(e.target.value)}>
                        <option value={'bar'} >Linechat View</option>
                        <option value={'lin'} >Barchat View</option>
                        <option value={'sim'} >Simple View</option>
                    </select>

                    <div className='accnm'>
                        <small>current balance</small>
                        ${numft.format(info?.userinfo?.balance)}
                    </div>
                </div> 
                
                <div className={color !== 'true' ? 'lnchart2' : 'lnchart'}>
                    {
                        bar === 'lin' ?
                        <Inchart/>
                        :
                        null
                    }
                    {
                        bar === 'bar' ?
                        <Barchat/>
                        :
                        null
                    }
                    {
                        bar === 'sim' ?
                        <Legend/>
                        :
                        null
                    }
                </div>
            </div>

            <div className='pchat'>
                <div className='pchatbod'>
                    <Piechat/>
                </div>
                <div className='percent'>
                    <div className='perc1'>
                        <small>Active</small>
                        <div></div>
                    </div>
                    <div className='perc2'>
                        <small>Debits</small>
                        <div></div>
                    </div>
                    <div className='perc3'>
                        <small>Credits</small>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

        <Foru/>

       <Bott stat={stat} color={color} />
    </div>
  )
}

export default Stats