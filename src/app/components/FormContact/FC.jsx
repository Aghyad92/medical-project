"use client"
import { useState } from 'react'
import Phone from '@/app/Elements/PhoneValidtion/Phone'
import styles from './FC.module.css'
import DataPicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Button from '@/app/Elements/Button/Button'

export default function FC() {
  const [FirstName,setFirstName]=useState("");
  const [LastName,setLastName]=useState("");
  const [Email,setEmail]=useState("")
  const [PhoneNumber,setPhoneNumber]=useState("");
  const [selectedData,setselectedData]=useState("");
  const [Message,setMessage]=useState("");
  const onSubmit=async(e)=>{
    e.preventDefault();
  }
  return (
    <div className={styles.form} onSubmit={onSubmit}>
        <div className={styles.head}>
      <div className={styles.first}>
        <label htmlFor="FirstName">First name</label>
        <input type="text" id={styles.FirstName} value={FirstName} onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div className={styles.last}>
        <label htmlFor="FirstName">Last name</label>
        <input type="text" id={styles.LastName} value={LastName} onChange={e=>setLastName(e.target.value)}/>
        </div>
        </div>
        <div className={styles.email}>
        <label htmlFor="Email">Email</label>
        <input type="email" id="email" value={Email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <Phone className={styles.phone}/>
        <div className={styles.Date}>
        <label htmlFor='Select date' className={styles.ld}>Select date</label>
        <DataPicker
        className={styles.date}
        selected={selectedData}
        onChange={data=>setselectedData(data)}
        dateFormat="yyyy- mm -dd"
        placeholderText='December - 02 - 2022'
        showYearDropdown
        scrollableMonthYearDropdown
        />
        </div>
        <div className={styles.Message}>
        <label htmlFor="Message">Message</label>
        <textarea id='Message' value={Message} onChange={e=>setMessage(e.target.value)}/>
        </div>
        <button className={styles.btn}>Book an appointment</button>
    </div>
  )
}
