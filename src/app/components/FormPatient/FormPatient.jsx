"use client"
import Image from "next/image"
import person from "@/Images/mdi_person-outline (1).svg"
import email from "@/Images/iconamoon_email-bold (1).svg"
import eye from "@/Images/solar_eye-bold (1).svg"
import styles from "./FormPatient.module.css"
import { useState } from "react"
import GreenButton from "@/app/Elements/Button2/GreenButton"



export default function FormPatient() {
  const [UserName,setUserName]=useState("");
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  return (
      <form className={styles.form}>
      <div className={styles.user}>
        <label htmlFor="UserName">UserName:</label>
        <input type="text" id="username" value={UserName} onChange={e=>setUserName(e.target.value)}/>
        <Image 
        className={styles.icon}
        src={person}
        width={30}
        height={30}
        alt="person"
        />
    </div>
        <div className={styles.email}>
        <label htmlFor="Email">Email:</label>
        <input type="email" id="email" value={Email} onChange={e=>setEmail(e.target.value)}/>
        <Image 
        className={styles.icon}
        src={email}
        width={30}
        height={30}
        alt="email"
        />
        </div>
        <div className={styles.password}>
        <label htmlFor="Password">Password:</label>
        <input type="password" id="password" value={Password} onChange={e=>setPassword(e.target.value)}/>
        <Image 
        className={styles.icon}
        src={eye}
        width={30}
        height={30}
        alt="eye"
        />
        </div>
        <div className={styles.edit} >
        <button className={styles.btn} type="submit">Edit Account</button>
        </div>
    </form>
  )
}
