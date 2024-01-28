"use client"
import Image from 'next/image'
import plus from "@/Images/plus.svg"
import FormProduct from '@/app/components/FormProduct/FormProduct'
import { useState } from 'react'
import styles from "./Add.module.css"
import add from "@/Images/Addphoto.png"

export default function Add() {
    const[Name,setName]=useState("");
    const[Price,setPrice]=useState("");
    const[Before,setBefore]=useState("");
    const[After,setAfter]=useState("");
    const [Add,setAdd]=useState(false)
    const handlerProduct=()=>{
      const pro=document.querySelector("#product")
      pro.style.cssText="display:Block;position:absolute;z-index:1;"
    }
    const onSubmit=async(e)=>{
      e.preventDefault();
      setAdd(true);
    }
  return (
    <div>
      <div className={styles.box} onClick={handlerProduct}>
        <Image
        src={plus}
        width={20}
        height={20}
        alt="plus"    
        />
        <p>Add  Product</p>
        </div>
        <div className={styles.product} id='product'>
      <FormProduct
      Name={Name}
      setName={setName}
      Price={Price}
      setPrice={setPrice}
      Before={Before}
      setBefore={setBefore}
      After={After}
      setAfter={setAfter}
      text="Add Product"
      onSubmit={onSubmit}
      />
      </div>
      {Add && <div className={styles.addphoto}>
      <Image
      src={add}
      width={1078}
      height={624}
      alt='Add'
      />
        <p>Product Was Added</p>
      </div>}
    </div>
  )
}
