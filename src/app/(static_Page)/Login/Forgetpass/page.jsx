
import styles from "./page.module.css"
import ImageHome from "@/app/Elements/ImageHome/page"
import Forget from "@/app/components/Forget/Forget"

export default function Forgetpass({Email,setEmail}) {
  return (
    <div className={styles.container}>
      <h1>Create Account</h1>
      <div className={styles.content}>
     <ImageHome/>
     <Forget
     Email={Email}
     setEmail={setEmail}
     />
     </div>
    </div>
  )    
}
