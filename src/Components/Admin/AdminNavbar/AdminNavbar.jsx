import React from 'react'
import {SiCivicrm} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {BiLogoReact} from 'react-icons/bi'
import {FaPython} from 'react-icons/fa'
import {CiTimer} from 'react-icons/ci'
import {RxCountdownTimer} from 'react-icons/rx'
import {SiSololearn} from 'react-icons/si'
// import AdminNavbar from '../AdminNavbar/AdminNavbar'
export default function AdminNavbar() {
  return (
        <div className='admin-nav'>

        
       <div className='e-nav'>
         
         <div className='e-nav-title' style={{textAlign:"center",color:"white"}}>
          <span >All Employees</span>
         </div>
                <span>project</span>
          <div className='e-nav-list'>
            <span><SiCivicrm/></span>
            <span>Crm</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"yellow"}}><DiJavascript/></span>
            <span>java Script</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"yellow"}}><DiJavascript/></span>
            <span>java Script</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"yellow"}}><DiJavascript/></span>
            <span>java Script</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"blue"}}><BiLogoReact/></span>
            <span>React</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"red"}}><DiJava/></span>
            <span>java</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"yellow"}}><FaPython/></span>
            <span>python</span>
          </div>
          
         
          <span>status</span>
          <div className='e-nav-list'>
            <span style={{color:"red"}}><CiTimer/></span>
            <span>part time</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"green"}}><RxCountdownTimer/></span>
            <span>full time</span>
          </div>
          <div className='e-nav-list'>
            <span style={{color:"green"}}><SiSololearn/></span>
            <span>Training</span>
          </div>
          </div>
  
 </div>
  )
}
