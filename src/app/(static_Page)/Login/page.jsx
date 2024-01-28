
import Button from '@/app/Elements/Button/Button'
import styles from "@/app//components/Navbar/Navbar.module.css"
import ImageHome from '@/app/Elements/ImageHome/page'

export default function Login() {
  return (
    <main className={styles.Auth}>
      <div className={styles.co}>
     <ImageHome/>
     <Button label="Login"/>
     <Button label="Create Account"/>
     </div>
    </main>
  )
}