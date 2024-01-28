import def from "@/Images/Default.png"
import Image from "next/image"
import Link from "next/link"
import styles from "./SidebarAdmin.module.css"

export default function SidebarAdmin() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Image
        src={def}
        width={40}
        height={40}
        alt="ms"
        />
        <div className={styles.text}>
            <h2>Ms. Happiness!</h2>
            <p>This is short and sweet description text.</p>
        </div>
      </div>
      <div className={styles.btn}>
      <button><Link href="/">Providers Managment</Link></button>
      <button><Link href="/">Patient Managment</Link></button>
      <button><Link href="/">Sales Reports</Link></button>
      <button><Link href="/">Services Managment</Link></button>
      <button><Link href="/">Product Managment</Link></button>
      <button><Link href="/">Reservation Managment</Link></button>
      <button><Link href="/">Admin Managment</Link></button>
      <button><Link href="/">Admin options</Link></button>
      <button><Link href="/">Logout</Link></button>
      </div>
    </div>
  )
}
