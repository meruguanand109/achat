import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()
  return (
    <>
      <Navbar/>
      <div className='p-5 d-flex flex-column align-items-center justify-content-center'>
        <button className='btn btn-success m-2' onClick={()=>navigate("/globalchat")}>Enter Global Chat Space</button>
        <button className='btn btn-danger m-2' onClick={()=>navigate("/privatechat")}>Enter Private Chat Space</button>
      </div>
    </>
  )
}
