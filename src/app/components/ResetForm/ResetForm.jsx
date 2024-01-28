import Image from "next/image"
import styles from "./ResetForm.module.css"
import eye from "@/Images/solar_eye-bold (1).svg"
import GreenButton from "@/app/Elements/Button2/GreenButton"

export default function ResetForm({Password,setPassword,ConfirmPassword,setConfirmPassword}) {
  return (
    <div >
      <form className={styles.form}>
        
      <div className={styles.password}>
        <label htmlFor="Password">New password:</label>
        <input type="password" id="password" value={Password} onChange={e=>setPassword(e.target.value)}/>
        <Image 
        className={styles.icon}
        src={eye}
        width={30}
        height={30}
        alt="eye"
        />
        </div>
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
        <GreenButton label="Reset password"/>
      </form>
    </div>
  )
}
