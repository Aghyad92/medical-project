"use client"
import FormServices from '@/app/components/FormServices/FormServices';
import styles from "./page.module.css"
import Image from 'next/image';
import SidebarM from '../../Sidebar/SidebarM';
import { useState } from 'react';
import plus from "@/Images/plus.svg"
import add from "@/Images/Addphoto.png"

export default function EditPensel() {
    const[Name,setName]=useState("");
    const[Price,setPrice]=useState("");
    const[Before,setBefore]=useState("");
    const[After,setAfter]=useState("");
    const[Edit,setEdit]=useState(false);
    const onSubmit=async(e)=>{
      e.preventDefault();
      setEdit(true);
    }
    const handlerProduct=()=>{
        const pro=document.querySelector("#product")
        pro.style.cssText="display:Block;position:absolute;z-index:1;"
      }
  return (
    <div className={styles.container}>
      <SidebarM/>
      <div className={styles.content}>
      <div className={styles.Add} onClick={handlerProduct}>
        <Image
        src={plus}
        width={20}
        height={20}
        alt="plus"    
        />
        <p>Add  Services</p>
        </div>
      <div className={styles.box}>
        <FormServices
      Name={Name}
      setName={setName}
      Price={Price}
      setPrice={setPrice}
      Before={Before}
      setBefore={setBefore}
      After={After}
      setAfter={setAfter}
      dis="Edit Services"
      onSubmit={onSubmit}
      />
      </div>
      </div>
      {Edit && <div className={styles.addphoto}>
      <Image
      src={add}
      width={1078}
      height={624}
      alt='Add'
      />
        <p>Services  Was Edited</p>
      </div>}
    </div>
  )
}
