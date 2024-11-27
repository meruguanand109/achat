import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Message from '../components/Message'

export default function Global() {
  const [message, setMessage] = useState("")
  const [globalMsgs, setGlobalMsgs] = useState([])
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")

  const fetchGlobalMsgs = async () => {
    const response = await fetch("https://achat-sbxs.onrender.com/api/getglobalmsgs")
    const formattedResponse = await response.json()
    setGlobalMsgs(formattedResponse.globalMsgs)
  }

  useEffect(() => {
    fetchGlobalMsgs()
  }, [globalMsgs,message])

  const handleSend = async (event) => {
    event.preventDefault()
    if (message.length === 0) {
      alert("Please type the message")
    } else {
      const response = await fetch("https://achat-sbxs.onrender.com/api/postglobalmsg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, name, message
        })
      })
      console.log(response)
      setMessage("")
    }
  }


  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='overflow-auto'>
            <p className='mt-2 text-bg-success text-wrap p-2 rounded text-center'>GLOBAL CHAT SPACE</p>
              <ul className='overflow-auto' style={{height:"75vh",paddingRight:"20px"}}>
                {globalMsgs.map(each => (
                  <Message data={each} key={each._id} />
                ))}
              </ul>
            </div>
          </div>
          <form className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">{name}</span>
            <input type="text" className="form-control" aria-label="Sizing example input" value={message} aria-describedby="inputGroup-sizing-default" onChange={(e) => setMessage(e.target.value)} />
            <button type='submit' className='btn btn-outline-dark' onClick={handleSend}>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}
