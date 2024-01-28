import Image from "next/image"
import styles from "./Footer.module.css"
import facebook from "@/Images/facebook.jpg"
import instagram from "@/Images/instagram.jpg"
import youtube from "@/Images/youtube.jpg"
import linkedin from "@/Images/linkedin.jpg"
import twitter from "@/Images/twitter.jpg"



export default function Footer() {
  return (
        <div className={styles.container}>
        <div className={styles.text}>All rights reserved ® uifry.com  | Terms and conditions apply!</div>
        <div className={styles.social}> 
        <Image
        src={facebook}
        width={20}
        height={20}
        alt="facebook"
        />
        <Image
        src={instagram}
        width={20}
        height={20}
        alt="instagram"
        />
        <Image
        src={youtube}
        width={20}
        height={20}
        alt="youtube"
        />
        <Image
        src={linkedin}
        width={20}
        height={20}
        alt="linkedin"
        />
        <Image
        src={twitter}
        width={20}
        height={20}
        alt="twitter"
        />
        
        </div>
      </div>
  )
}
