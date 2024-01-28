"use client"
import Image from 'next/image'
import SidebarM from '../Sidebar/SidebarM'
import styles from "./page.module.css"
import FormProvider from '@/app/components/FormProvider/FormProvider'
import person from "@/Images/personal.svg"
import { useState } from 'react'

export default function Account() {
  const[UserName,setUsername]=useState("SamohnSamohn")
  const[Email,setEmail]=useState("SamohnSamohn@gmail.com")
  const[Password,setPassword]=useState("21563358588")
  const[BankName,setBankName]=useState("Bank")
  const[Ibancode,setIbancode]=useState("45626912")
  return (
    <div className={styles.container}> 
      <SidebarM/>
      <div className={styles.content}>
        <Image
        src={person}
        width={182}
        heighy={153}
        alt="person"
        />
        <FormProvider
        UserName={UserName}
        setUsername={setUsername}
        Email={Email}
        setEmail={setEmail}
        Password={Password}
        setPassword={setPassword}
        BankName={BankName}
        setBankName={setBankName}
        Ibancode={Ibancode}
        setIbancode={setIbancode}
        text="Edit account"
        />
      </div>
    </div>
  )
}
