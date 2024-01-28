import React from 'react'
import Link from 'next/link'
import { links } from './data'
import styles from "./Navbar.module.css"
import Search from '@/app/Elements/Search/Search'
import Logo from '@/app/Elements/Logo/Logo'
import Toggle from '@/app/Elements/ToggleNav/Toggle'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.toggle}><Toggle/></div>
      <div className={styles.Link}>
         {links.map(link=>
            <Link key={link.id} href={link.url} className={styles.Link}>{link.title}</Link>
            )}
            </div>
    <Search/>
    <Logo/>
    </div>
  )
}
