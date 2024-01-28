"use client"
import ImageHome from "@/app/Elements/ImageHome/page";
import { useState } from "react";
import Form from "@/app/components/FormCreate/Form";
import styles from "./page.module.css"

export default function Create() {
    const[Username,setUsername]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const[ConfirmPassword,setConfirmPassword]=useState("");
  return (
    <div className={styles.container}>
        <p className={styles.text}>Create Account As patient</p>
        <div className={styles.content}>
        <ImageHome/>
        <Form 
        Username={Username}
        setUsername={setUsername}
        Email={Email}
        setEmail={setEmail}
        Password={Password}
        setPassword={setPassword}
        ConfirmPassword={ConfirmPassword}
        setConfirmPassword={setConfirmPassword}
        />
        </div>
    </div>
  )
}