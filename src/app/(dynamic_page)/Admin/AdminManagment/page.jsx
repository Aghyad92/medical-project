"use client"
import SidebarAdmin from '@/app/components/SidebarAdmin/SidebarAdmin'
import styles from "./page.module.css"
import Image from 'next/image'
import pencil from "@/Images/pencil-alt.png"
import trash from "@/Images/trash.png"
import { useRef,useState } from 'react'
import { Users } from '../data'

export default function AdminManagment() {
    const handleEdit=()=>{
        window.location.href="/Admin/AdminManagment/AdminEdit"
      }
    return (
        <div className={styles.container}>
          <SidebarAdmin/>
          <div className={styles.right}>
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              {Users.map((user)=>( <tbody key={user.id} >
                <tr>
                  <td>{user.id}</td>
                  <td>{user.Name}</td>
                  <td>{user.Status}</td>
                  <td className={styles.Action}>
                    <Image className={styles.pencel}
                    src={pencil}
                    width={20}
                    height={20}
                    alt='pen'
                    onClick={handleEdit}
                    />
                    <Image
                    src={trash}
                    width={20}
                    height={20}
                    alt='trash'
                    />
                  </td>
                </tr>
              </tbody>))}
            </table>
          </div>
        </div>
      )
    }
    
