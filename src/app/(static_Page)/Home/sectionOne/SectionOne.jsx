import GreenButton from '@/app/Elements/Button2/GreenButton'
import Image from 'next/image'
import styles from "./SectionOne.module.css"
import Doctor from "@/Images/vbn 1.png"

export default function SectionOne() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla saepe exercitationem in vero corporis quam nisi rem quaerat repellat cumque id ea culpa veritatis expedita asperiores voluptatum nesciunt, deserunt ipsum.</p>
            
        </div>
      <Image
      src={Doctor}
      width={488}
      height={456}
      alt="Doctor"
      />
      <GreenButton label="Get started"/>
    </div>
  )
}
