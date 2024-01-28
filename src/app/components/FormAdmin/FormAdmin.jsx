"use client"
import Image from "next/image"
import person from "@/Images/per-Admin.svg"
import email from "@/Images/message-Admin.svg"
import eye from "@/Images/eye-Admin.svg"
import styles from "./FormAdmin.module.css"
import OTPInput from "react-otp-input"
import { useState } from "react"

export default function FormAdmin({label,UserName,setUsername,Email,setEmail,Password,setPassword,BankName,setBankName,Ibancode,setIbancode,Upload,Editreason,setIEditreason}) {
  const[otp,setOtp]=useState("")
    return (
    <form className={styles.form}>
    <div className={styles.user}>
      <label htmlFor="UserName">User Name:</label>
      <input type="text" id="username" value={UserName} onChange={e=>setUsername(e.target.value)}/>
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
      <div className={styles.bank}>
      <label htmlFor="BankName">Bank Name:</label>
      <input type="text" id="BankName" value={BankName} onChange={e=>setBankName(e.target.value)}/>
      </div>
      <div className={styles.Iban}>
      <label htmlFor="Ibancode">Iban code</label>
      <input type="text" id="Ibancode" value={Ibancode} onChange={e=>setIbancode(e.target.value)}/>
      </div>
      <div className={styles.swift}>
      <label htmlFor="Swiftcode">Swift  code</label>
        <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        containerStyle={styles.otp}
        inputStyle={styles.Code}
        renderSeparator={<span> </span>}
        renderInput={(props) => <input {...props} />}
        ></OTPInput>
      </div>
      <div className={styles.pdf}>
      <label htmlFor="Pdffile">Pdf file </label>
      <div className={styles.custom}> 
      <span>Upload</span>
      <input type="file" id="pdf" value={Upload}/>
      </div>
      </div>
      <div className={styles.Editreason}>
      <label htmlFor="Editreason">Edit reason</label>
      <textarea  id="Editreason" value={Editreason} onChange={e=>setIEditreason(e.target.value)}/>
      </div>
     <button type="submit" className={styles.btn}>Edit</button>
  </form>
  )
}
