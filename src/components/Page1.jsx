import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Timer from './Timer'

const Page1 = ({className}) => {
  return (
    <div className='page1 h-screen relative '>
    <Navbar></Navbar>
    <Body></Body> 
    <Timer   className={className} targetDate={"2025-02-22T00:00:00"} ></Timer>
    </div>
  )
}

export default Page1