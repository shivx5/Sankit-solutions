import React from 'react'
import logo from '../../../assets/s-logo.png'
import unknown from '../../../assets/unknown.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiLogoGmail} from 'react-icons/bi'
import './TopBar.css'
import { Link ,Outlet,useNavigate} from 'react-router-dom'
export default function TopBar() {
  const navigate=useNavigate();
  return (
    <div className='topbar'>

        <div className='t-logo'>
                <div>
                <img src={logo}></img>
                </div>
                <span>ankit  Solution</span>
        </div>
        <div className='t-content'>
              <span>Calender</span>
              <span>Static</span>
              <Link to='/admin/allemployee'><span className='hover-link' style={{color:"white",textDecoration:"none"}}>Employee</span></Link>
              <span>Client</span>
              <span>Equipment</span>
        </div>
        <div className="t-profile">
        <span><IoMdNotificationsOutline/></span>
        <span><BiLogoGmail/></span>
        <div >
                <img src={unknown}></img>
        </div>
        </div>
      
    </div>
  )
}
