"use client"
import ImageHome from '@/app/Elements/ImageHome/page'
import FormProvider from '@/app/components/FormProvider/FormProvider'
import styles from "./page.module.css"
import { useState } from 'react'

export default function AccountProvider() {
  const[UserName,setUsername]=useState("")
  const[Email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const[ConfirmPassword,setConfirmPassword]=useState("")
  const[BankName,setBankName]=useState("")
  const[Ibancode,setIbancode]=useState("")
  return (
    <div>
        <h2 className={styles.text}>Create Account As provider</h2>
        <div className={styles.content}>
         <ImageHome/>
         <div className={styles.form}>
         <FormProvider
         UserName={UserName}
         setUsername={setUsername}
         Email={Email}
         setEmail={setEmail}
         Password={Password}
         setPassword={setPassword}
         ConfirmPassword={ConfirmPassword}
         setConfirmPassword={setConfirmPassword}
         BankName={BankName}
         setBankName={setBankName}
         Ibancode={Ibancode}
         setIbancode={setIbancode}
         text="Create account"
         />
         </div>
    </div>
    </div>
  )
}
