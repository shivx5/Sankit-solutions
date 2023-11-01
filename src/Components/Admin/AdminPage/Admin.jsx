import React from 'react'
import TopBar from '../TopBar/TopBar'
import Employee from '../Employee/Employee'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <TopBar/>

      <Employee/>
     
    </div>
  )
}
