import Image from "next/image"
import styles from "./page.module.css"
import imageLogo from "@/Images/images 7.svg"

export default function ImageHome() {
  return (
    <div className={styles.container}>
        <p className={styles.text}>Care</p>
        <Image className={styles.Image}
       src={imageLogo}
       width={126}
       height={84}
       alt="logo"
       />   
    </div>
  )
}
