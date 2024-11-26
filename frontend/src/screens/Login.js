import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault()
    const response = await fetch("http://192.168.29.221:5000/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password: pass })
    })
    const json = await response.json()
    console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.jwtToken)
      localStorage.setItem("name",json.name)
      localStorage.setItem("email",json.email)
      navigate("/")
    } else {
      alert("Enter Valid Credentials")
    }
  }

  return (
    <div className='container p-5'>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary m-3" onClick={handleLogin}>Login</button>
          <button className='btn btn-success m-3' onClick={()=>navigate("/signup")}>New User</button>
        </div>
      </form>
    </div>
  )
}
