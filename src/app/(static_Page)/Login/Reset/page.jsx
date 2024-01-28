"use client"
import ImageHome from '@/app/Elements/ImageHome/page';
import ResetForm from '@/app/components/ResetForm/ResetForm'
import { useState } from 'react';
import styles from "./page.module.css"

export default function Reset() {
    const[Password,setPassword]=useState("");
    const[ConfirmPassword,setConfirmPassword]=useState("");
  return (
    <div className={styles.container}>
      <h1>Reset password</h1>   
        <div className={styles.content}>
        <ImageHome/>
        <ResetForm
       Password={Password}
       setPassword={setPassword}
       ConfirmPassword={ConfirmPassword}
       setConfirmPassword={setConfirmPassword}
      />
        </div>
    </div>
  )
}
