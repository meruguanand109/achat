import React from 'react'
import { format } from "date-fns";

export default function Message(props) {
    const {data}=props 
    const {name,message,email,date}=data 
    const admin=localStorage.getItem("email")
    const adminStyle= admin!==email?`text-primary`:`text-secondary`
    const formattedTime = format(new Date(date), "h:mm a");
    let msgDate=format(new Date(date),"dd/MM/yyyy")
    let todayDate=format(new Date(),"dd/MM/yyyy")
    const day=(todayDate===msgDate)?"today":`${msgDate}`
    console.log(day)
  return (
    <li className='list-group-item'>
        <p className={`fw-medium ${adminStyle}`}>{name} 
        <p className='d-flex justify-content-between fst-italic text-black fw-normal  ms-3 text-break'>{message} <span className='text-end'>{formattedTime}</span></p>
        </p>
    </li>
  )
}
