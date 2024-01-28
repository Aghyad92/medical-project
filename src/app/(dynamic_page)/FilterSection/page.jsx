"use client"
import Image from "next/image"
import styles from "./page.module.css"
import logoSearch from "@/Images/Search.svg"
import logoSearch2 from "@/Images/Loction.svg"
import FindDoctor from "@/app/components/FindDoctor/FindDoctor"
import FindServices from "@/app/components/FindServices/FindServices"
import Map from "@/app/components/Map/Map"



export default function SearchPage() {
  const handlerServices=()=>{
    const services=document.getElementById("Services");
    const Doctor=document.getElementById("Doctor");
    const map=document.getElementById("map");
    services.style.cssText="display:block"
    Doctor.style.cssText="display:none"
    map.style.cssText="display:none"
  }
  const handlerDoctor=()=>{
    const Doctor=document.getElementById("Doctor");
    const services=document.getElementById("Services");
    const map=document.getElementById("map");
    Doctor.style.cssText="display:block"
    services.style.cssText="display:none"
    map.style.cssText="display:none"
  }
  const handlerMap=()=>{
    const map=document.getElementById("map");
    const Doctor=document.getElementById("Doctor");
    const services=document.getElementById("Services");
    map.style.cssText="display:block"
    Doctor.style.cssText="display:none"
    services.style.cssText="display:none"
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Find service</h2>
        <div className={styles.search}>
       <input type='search' placeholder='Search' id='search'/>
       <Image className={styles.icon}
            src={logoSearch}
            width={25}
            height={22}
            alt='Search'
            />
            <Image className={styles.log}
            src={logoSearch2}
            width={25}
            height={22}
            alt='Search'
            onClick={handlerMap}
            />
    </div>
    <div className={styles.btn}>
        <button className={styles.bt} onClick={handlerServices}>Find service</button>
        <button className={styles.bt} onClick={handlerDoctor}>Find Doctor</button>
    </div>
      </div>
      <div className={styles.Doctor} id="Doctor">
      <FindDoctor/>
      </div>
      <div className={styles.Services} id="Services">
      <FindServices/>
      </div>
      <div className={styles.map} id="map">
         <Map/>
      </div>
    </div>
  )
}
