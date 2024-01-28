"use client"
import SidebarAdmin from '@/app/components/SidebarAdmin/SidebarAdmin'
import styles from "./page.module.css"
import FormAdmin from '@/app/components/FormAdmin/FormAdmin'
import { useState } from 'react'
import { Users } from '../data'


export default function Link() {
    const [UserName,setUsername]=useState("SamohnSamohn");
    const [Email,setEmail]=useState("SamohnSamohn@gmail.com");
    const [Password,setPassword]=useState("21563358588");
    const [BankName,setBankName]=useState("Bank");
    const [Ibancode,setIbancode]=useState("45626912");
    const [Editreason,setIEditreason]=useState("");

  return (
    <div className={styles.container}>
      <SidebarAdmin/>
      <div className={styles.right}>
        <FormAdmin
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
        Editreason={Editreason}
        setIEditreason={setIEditreason}
        />
      </div>
    </div>
  )
}
