"use client"
import styles from "./page.module.css"
import SidebarM from '../Sidebar/SidebarM'
import Add from '../Add/Add'
import FormServices from "@/app/components/FormProduct/FormProduct"
import { useState } from "react"
import Image from "next/image"
import add from "@/Images/Addphoto.png"

export default function EditProduct() {
    const[Name,setName]=useState("");
    const[Price,setPrice]=useState("");
    const[Before,setBefore]=useState("");
    const[After,setAfter]=useState("");
    const[Edit,setEdit]=useState(false);
    const onSubmit=async(e)=>{
      e.preventDefault();
      setEdit(true);
    }
  return (
    <div className={styles.container}>
      <SidebarM/>
      <div className={styles.content}>
        <Add/>
        <FormServices
      Name={Name}
      setName={setName}
      Price={Price}
      setPrice={setPrice}
      Before={Before}
      setBefore={setBefore}
      After={After}
      setAfter={setAfter}
      text="Edit  Product"
      onSubmit={onSubmit}
      />
      </div>
      {Edit && <div className={styles.addphoto}>
      <Image
      src={add}
      width={1078}
      height={624}
      alt='Add'
      />
        <p>Product  Was Edited</p>
      </div>}
      </div>
  )
}
