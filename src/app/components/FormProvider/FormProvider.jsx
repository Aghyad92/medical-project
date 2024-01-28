"use client"
import Image from "next/image"
import person from "@/Images/mdi_person-outline (1).svg"
import email from "@/Images/iconamoon_email-bold (1).svg"
import eye from "@/Images/solar_eye-bold (1).svg"
import loading from"@/Images/load.png"
import styles from "./FormProvider.module.css"
import OTPInput from "react-otp-input"
import { useState } from "react"

export default function FormProvider({label,UserName,setUsername,Email,setEmail,Password,setPassword,ConfirmPassword,setConfirmPassword,BankName,setBankName,Ibancode,setIbancode,Upload,text}) {
  const[otp,setOtp]=useState("")
  const [load,setLoad]=useState(false)
  const handlerhide=()=>{
      const icon=document.getElementById("icon")
      icon.style.cssText="display:none"
  }
  const onSubmit=async(e)=>{
    e.preventDefault();
    setLoad(true)
  }
    return (
    <form className={styles.form} onSubmit={onSubmit}>
    <div className={styles.user}>
      <label htmlFor="UserName">User Name:</label>
      <input type="text" id="username" value={UserName} onChange={e=>setUsername(e.target.value)} onClick={handlerhide}/>
      <Image 
      id="icon"
      className={styles.icon}
      src={person}
      width={30}
      height={30}
      alt="person"
      />
      </div>
      <div className={styles.email}>
      <label htmlFor="Email" id="Email">Email:</label>
      <input type="email" id="email" value={Email} onChange={e=>setEmail(e.target.value)}  onClick={handlerhide}/>
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
      <input type="password" id="password" value={Password} onChange={e=>setPassword(e.target.value)}  onClick={handlerhide}/>
      <Image 
      className={styles.icon}
      src={eye}
      width={30}
      height={30}
      alt="eye"
      />
      </div>
      <span>password must contain letters and numbers and be 8 characters</span>
      <div className={styles.confirm}>
      <label htmlFor="ConfirmPassword">Confirm Password :</label>
      <input type="password" id="ConfirmPassword" value={ConfirmPassword} onChange={e=>setConfirmPassword(e.target.value)}  onClick={handlerhide}/>
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
      <input type="text" id="BankName" value={BankName} onChange={e=>setBankName(e.target.value)} />
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
     <button className={styles.btn}>{text}</button>
    {load &&  <div className={styles.load}>
      <Image
      src={loading}
      width={611}
      height={365}
      alt="load"
      />
      <p>Wait Until Admin Accept</p>
     </div>}
  </form>
  )
}
