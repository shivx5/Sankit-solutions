import React from 'react'
import './EmpDetails.css'
import unknown from '../../../assets/unknown.png'
import {CiEdit} from 'react-icons/ci'
import {MdOutlineDeleteOutline} from 'react-icons/md'
export default function EmpDetails() {
  return (
    <div className='e-details e-details-1'>
       <div className='e-profile'>
          <img src={unknown}></img>
          <span>siva</span>
       </div>
       
       <span>salary</span>
       <span>status</span>
       <span>front End</span>
       <div className='e-manage'>
        <span><CiEdit/></span>
        <span style={{color:"red"}}><MdOutlineDeleteOutline/></span>
       </div>
    </div>
  )
}
