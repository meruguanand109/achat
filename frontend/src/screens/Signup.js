import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const navigate=useNavigate()
    const handleSignup=async(event)=>{
        event.preventDefault()
        const response=await fetch("https://achat-sbxs.onrender.com/api/createuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,password:pass
            })
        })
        const json=await response.json()
        if(json.success){
            navigate("/login")
        }else{
            alert("Please Enter Valid Details")
        }
    }
    return (
        <div className='container p-5'>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInputname1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputname1" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary m-3" onClick={handleSignup}>Sign up</button>
                    <button className='btn btn-success m-3' onClick={() => navigate("/login")}>Old User</button>
                </div>
            </form>
        </div>
    )
}
