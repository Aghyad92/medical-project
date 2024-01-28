"use client"
import Image from "next/image"
import styles from "./Forget.module.css"
import email from "@/Images/iconamoon_email-bold (1).svg"
import GreenButton from "@/app/Elements/Button2/GreenButton"
import { useState } from "react"

export default function Forget() {
  const[Email,setEmail]=useState("");
  const handleReset=(e)=>{
    e.preventDefault();
    window.location.href="/Login/Reset"
  }
  return (
    <div className={styles.container}>
    <form className={styles.forget} onSubmit={handleReset}>
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
        <button type="submit" className={styles.btn}>Send message</button>
        </form>
    </div>
  )
}
