import React from 'react'
import Image from 'next/image'
import personal from "@/Images/personal.svg"
import styles from "./page.module.css"
import Sidebar from '@/app/Elements/Sidebar/Sidebar'
import FormPatient from '@/app/components/FormPatient/FormPatient'

export default function Account() {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <div className={styles.right}>
      <Image className={styles.per}
    src={personal}
    width={182}
    height={184}
    alt="personal"
    />
    <p>Edit Photo </p>
    <FormPatient/>
      </div>
     
    </div>
  )
}
