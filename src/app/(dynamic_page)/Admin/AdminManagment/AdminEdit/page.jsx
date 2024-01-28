"use client"
import SidebarAdmin from '@/app/components/SidebarAdmin/SidebarAdmin'
import styles from "./page.module.css"
import { useState } from 'react'
import FormAdminEdit from '@/app/components/FormAdminEdit/FormAdminEdit'



export default function AdminEdit() {
    const [UserName,setUsername]=useState("SamohnSamohn");
    const [Email,setEmail]=useState("SamohnSamohn@gmail.com");
    const [Password,setPassword]=useState("");

  return (
    <div className={styles.container}>
      <SidebarAdmin/>
      <div className={styles.right}>
        <FormAdminEdit
        UserName={UserName}
        setUsername={setUsername}
        Email={Email}
        setEmail={setEmail}
        Password={Password}
        setPassword={setPassword}
        />
      </div>
    </div>
  )
}
