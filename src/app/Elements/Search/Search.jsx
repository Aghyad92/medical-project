"use client"
import React from 'react'
import Image from 'next/image'
import logoSearch from"@/Images/majesticons_search.svg"
import logoSearch2 from"@/Images/solar_filter-bold-duotone.svg"
import styles from "./Search.module.css"
export default function Search() {
  const handlerSearch=()=>{
    window.location.href="/FilterSection"
  }
  return (
    <div className={styles.conatiner}>
       <input type='search' placeholder='Search' id='search0' onClick={handlerSearch}/>
       <Image className={styles.search}
            src={logoSearch}
            width={20}
            height={20}
            alt='Search'
            />
            <Image className={styles.log}
            src={logoSearch2}
            width={19}
            height={20}
            alt='Search'
            />
    </div>
  )
}
