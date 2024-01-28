"use client"
import Image from "next/image"
import person from "@/Images/per-Admin.svg"
import email from "@/Images/message-Admin.svg"
import eye from "@/Images/eye-Admin.svg"
import styles from "./FormAdminEdit.module.css"


export default function FormAdminEdit({label,UserName,setUsername,Email,setEmail,Password,setPassword}) {
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
     <button type="submit" className={styles.btn}>Edit</button>
  </form>
  )
}
