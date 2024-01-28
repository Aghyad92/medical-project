"use client"
import SidebarM from "../Sidebar/SidebarM"
import Image from "next/image"
import styles from "./page.module.css"
import FormServices from "@/app/components/FormServices/FormServices"
import plus from "@/Images/plus.svg"
import { useState } from "react"
import adds from "@/Images/Addphoto.png"


export default function ServiceManagment() {
    const[Name,setName]=useState("");
    const[Price,setPrice]=useState("");
    const[Before,setBefore]=useState("");
    const[After,setAfter]=useState("");
    const[add,setAdd]=useState(false);
    const handlerProduct=()=>{
      const pro=document.querySelector("#product")
      pro.style.cssText="display:Block;position:absolute;z-index:1;"
    }
    const onSubmit=async(e)=>{
      e.preventDefault();
      setAdd(true);
    }
    return (
        <div className={styles.container} >
          <SidebarM/>
            <div className={styles.right}>
            <div className={styles.box} onClick={handlerProduct}>
        <Image
        src={plus}
        width={20}
        height={20}
        alt="plus"    
        />
        <p>Add  Services</p>
        </div>
        <div className={styles.product} id='product'>
      <FormServices
       Name={Name}
       setName={setName}
       Price={Price}
       setPrice={setPrice}
       Before={Before}
       setBefore={setBefore}
       After={After}
       setAfter={setAfter}
       dis ="Add Services"
       onSubmit={onSubmit}
       />
      </div>
          </div>
          {add && <div className={styles.addphoto}>
      <Image
      src={adds}
      width={1078}
      height={624}
      alt='Add'
      />
        <p>Services  Was Added</p>
      </div>}
        </div>
      )
}
