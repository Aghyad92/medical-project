"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Link from 'next/link';
import { links } from '@/app/components/Navbar/data';
import styles from "./Toggle.module.css"
import {faBars ,faXmark} from "@fortawesome/free-solid-svg-icons"

export default function Toggle() {
    const [isClick,setIsClick]=useState("");
    const ToggleNav=()=>{
        setIsClick(!isClick)
    };
  return (
    <div className={styles.container}>
      <button onClick={ToggleNav}>
        {isClick?(<FontAwesomeIcon icon={faXmark} size='lg'/>):(<FontAwesomeIcon icon={faBars} size='lg'/>)}
      </button>
      {isClick && (
        <div className={styles.Link}>
         {links.map(link=>
            <Link key={link.id} href={link.url} className={styles.Link}>{link.title}</Link>
            )}
            </div>
      )}
    </div>
  )
}
