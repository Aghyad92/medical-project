"use client"
import React, { useState } from 'react'
import FC from '@/app/components/FormContact/FC'
import Form from '@/app/components/FormCreate/Form'
import styles from "./page.module.css"
import Image from 'next/image'
import map from "@/Images/Rectangle.png"
import line from "@/Images/Group.svg"
import QuestionC from './QuestionC/QuestionC'
import time from "@/Images/time 1.svg"
import pin from "@/Images/pin 1.svg"
import telephone from "@/Images/telephone (1) 1.svg"
import chat from "@/Images/live-chat 1.svg"


export default function Contact() {
  const [FirstName,setFirstName]=useState("");
  const [LastName,setLastName]=useState("");
  const [Email,setEmail]=useState("")
  const [PhoneNumber,setPhoneNumber]=useState("");
  const [selectedData,setselectedData]=useState(new Date());
  const [Message,setMessage]=useState("");

  return (
    <div className={styles.container}>
      <h1>Get in touch</h1>
      <Image 
      className={styles.line}
      src={line}
      width={326}
      height={5}
      alt='line'
      />
      <p>Book an Appointment to treat your teeth right now.</p>
      <div className={styles.content}>
      <div className={styles.left}>
        <Image
        src={map}
        width={503}
        height={325}
        alt='map'
        />
        <div className={styles.office}>
        <Image
          className={styles.time}
        src={pin}
        width={26.5}
        height={26.5}
        alt='pin'
            />  
          <p>Office Address</p>
          <span>1441 Morris Ave, Union, NJ 07083</span>
        </div>
        <ul>
          <li>
          <Image
          className={styles.time}
        src={time}
        width={26.5}
        height={26.5}
        alt='time'
            />
          <p>Office Timings</p>
          <span>Monday - Saturday (9:00am to 5pm) Sunday (Closed)</span></li>
          <li>
          <Image
          className={styles.time}
        src={pin}
        width={26.5}
        height={26.5}
        alt='pin'
            />  
          <p>Emai Address</p>
          <span>Smile01@gmail.com</span></li>
          <li>
          <Image
          className={styles.time}
        src={telephone}
        width={26.5}
        height={26.5}
        alt='telephone'
            /> 
          <p>Phone Number</p>
          <span>0900-78601</span></li>
          <li>
          <Image
          className={styles.time}
        src={chat}
        width={26.5}
        height={26.5}
        alt='chat'
            />  
          <p>Live chat</p>
          <span>+1-2064512559</span></li>
        </ul>
      </div>
     <FC
     FirstName={FirstName}
     LastName={LastName}
     Email={Email}
     PhoneNumber={PhoneNumber}
     selectedData={selectedData}
     Message={Message}
     />
    </div>
    <QuestionC/>
    </div>
  )
}
