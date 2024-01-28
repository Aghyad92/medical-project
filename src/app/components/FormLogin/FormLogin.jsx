import Image from "next/image"
import styles from "./FormLogin.module.css"
import email from '@/Images/iconamoon_email-bold (1).svg'
import eye from "@/Images/solar_eye-bold (1).svg"
import Link from "next/link"
import GreenButton from "@/app/Elements/Button2/GreenButton"

export default function FormLogin({Email,setEmail,Password,setPassword}) {
  const handlerClick=()=>{
    let img=document.querySelector("#icon");
    img.style.cssText="display:none"
  }
  const handlerdisplay=()=>{
    let ph=document.querySelector("#eye");
    ph.style.cssText="display:none"
  }
  const handlerSign=()=>{
    window.location.href="/Login/ServicesLogin"
  }
  return (
    <div className={styles.container}>
      <form className={styles.form}>
      <div className={styles.email}>
        <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" value={Email} onChange={e=>setEmail(e.target.value)} onClick={handlerClick}/>
        <Image 
        className={styles.icon}
        id="icon"
        src={email}
        width={30}
        height={30}
        alt="email"
        />
        </div>
        <div className={styles.password}>
        <label htmlFor="Password">Password:</label>
        <input type="password" id="password" value={Password} onChange={e=>setPassword(e.target.value)}onClick={handlerdisplay}/>
        <Image 
        className={styles.icon}
        id="eye"
        src={eye}
        width={30}
        height={30}
        alt="eye"
        />
        </div>
        <Link href="/Login/Forgetpass">Forget Password?Reset Password</Link>
        <GreenButton label="Login"/>
        <span className={styles.or}>OR</span>
      
      </form>
      <button className={styles.sign} onClick={handlerSign}>Sign up</button>
    </div>
  )
}
