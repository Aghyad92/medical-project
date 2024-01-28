"use client"
import ImageHome from "@/app/Elements/ImageHome/page";
import FormLogin from "@/app/components/FormLogin/FormLogin";
import styles from "./page.module.css"
import { useState } from "react";

export default function LoginPass() {
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.content}>
      <ImageHome/>
      <FormLogin
      Email={Email}
      setEmail={setEmail}
      Password={Password}
      setPassword={setPassword}
      />
      </div>
    </div>
  )
}
