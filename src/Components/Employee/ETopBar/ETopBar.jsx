import React from 'react'
import logo from '../../../assets/s-logo.png'
import { Link,Outlet } from 'react-router-dom'
import './ETopBar.css'
import {AiFillStar} from 'react-icons/ai'
import {PiShareFatThin} from 'react-icons/pi'

function ETopBar() {
  return (
    <div className='e-topbar'>
        <div className='e-topbar-1'>
                <div>
                        <img src={logo}></img>
                        <span>Communication Site</span>
                </div>
                 <div>
                        <div>
                        <span><AiFillStar/></span>
                        <span>Following</span>
                        </div>
                        <div>
                        <span><PiShareFatThin/></span>
                        <span>share</span>
                        </div>
                 </div>
        </div>
        
        <div className='e-topbar-2'>
                <span>Documents</span>
                <span>Pages</span>
                <span>Site contents</span>
                <span>Tasks</span>
                <span><Link to='/employee/view' className='emp-links' style={{color:"white",textDecoration:"none"}}>Edit</Link></span>
        </div>
        <Outlet/>
    </div>
    
  )
}

export default ETopBar