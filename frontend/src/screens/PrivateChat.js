import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function PrivateChat() {
  const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <div className='p-5 d-flex flex-column align-items-center justify-content-center'>
        <h1>Page is currently not available.</h1>
        <button className='btn btn-danger m-2' onClick={()=>navigate("/")}>Back</button>
      </div>
    </>
  )
}
