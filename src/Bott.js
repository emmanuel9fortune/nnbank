import { BarChart, Home, ListAlt, Notifications, PersonOutline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Bott({color, dash, not, help , stat, prof}) {
  return (
    <div className={color !== 'true' ? 'bottom2' : 'bottom1'} >
            <Link to='/' className={dash ? 'bottomlnk2' : 'bottomlnk'}>
                <Home/>
                <p>Home</p>
            </Link>

            <Link to='/statistics' className={stat ? 'bottomlnk2' : 'bottomlnk'}>
              <BarChart/>
                <p>Dashboard</p>
            </Link> 

            <Link to='/pay' className={help ? 'bottomlnk2' : 'bottomlnk'}>
                <ListAlt/>
                <p>Pay</p> 
            </Link>
            
            <Link to='/notification' className={not ? 'bottomlnk2' : 'bottomlnk'}>
              <Notifications />
                <p>Notifications</p>
            </Link>
            <Link to='/profile' className={prof ? 'bottomlnk2' : 'bottomlnk'}>
              <PersonOutline  />
                <p>Profile</p>
            </Link>
          </div>
  )
}

export default Bott