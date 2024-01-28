import styles from './Logo.module.css'
import Link from "next/link";
import Image from 'next/image';
import imageLogo from"@/Images/images 7.svg"
export default function Logo() {
  return (
    <div>
       <Link href="/" className={styles.logo}>
        <span className={styles.care}>Care</span>
       <Image className={styles.Image}
       src={imageLogo}
       width={126}
       height={84}
       alt="logo"
       />
       </Link>
    </div>
  )
}
