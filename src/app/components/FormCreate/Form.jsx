import styles from "./Form.module.css"
import Image from "next/image"
import person from "@/Images/mdi_person-outline (1).svg"
import email from "@/Images/iconamoon_email-bold (1).svg"
import eye from "@/Images/solar_eye-bold (1).svg"
import GreenButton from "@/app/Elements/Button2/GreenButton"

export default function Form({label,UserName,setUsername,Email,setEmail,Password,setPassword,ConfirmPassword,setConfirmPassword}) {
  return (
    <div>
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
        <span>password must contain letters and numbers and be 8 characters</span>
        <div className={styles.confirm}>
        <label htmlFor="ConfirmPassword">Confirm Password :</label>
        <input type="password" id="ConfirmPassword" value={ConfirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
        <Image 
        className={styles.icon}
        src={eye}
        width={30}
        height={30}
        alt="eye"
        />
        </div>
       <button className={styles.btn} type="submit">Create account</button>
    </form> 
    </div>
  )
}
