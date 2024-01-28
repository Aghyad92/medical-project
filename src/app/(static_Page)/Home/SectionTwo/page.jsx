"use client"
import Image from "next/image"
import styles from "./page.module.css"
import line from "@/Images/Group.svg"
import { photo } from "./data"
import Tabler from "@/app/Elements/Tabler/Tabler"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const ServicesHandle=()=>{
  window.location.href="/Home/ServicesDetails"
  {photo.map((img)=>img.id)}
}

export default function SectionTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>Meet our specialists<Image
        className={styles.line}
        src={line}
        width={216}
        height={6.78}
        alt="line"
        /></h2>
      </div>
      <p className={styles.br}>We use only the best quality materials on the market in <br/>order to provide the best products to our patients.</p>
     <div className={styles.photo}>
     <Swiper
       freeMode={true}
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       
       pagination={{el:'.swiper-pagination',clickable:true}}
       navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true,
       }}
       modules={[FreeMode,Pagination,Navigation]}
       className={styles.swiper}
       breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:10,
          },
          480:{
            slidesPerView:2,
            spaceBetween:10,
          },
          768:{
            slidesPerView:3,
            spaceBetween:15,
          },
          1024:{
            slidesPerView:4,
            spaceBetween:15,
          }
       }}
       >
      {photo.map((img)=>(
        <SwiperSlide key={img.id}>
          <div className={styles.box}>
        <Image
        onClick={ServicesHandle}
        src={img.src}
        width={305}
        height={340}
        alt={img.name}/>
        <div className={styles.op}>
        <p>{img.name}</p>
        <span>{img.job}</span>
        </div>
        </div>
        </SwiperSlide>
      ))}
        <div className={styles.sliderControler}>
          <div className="swiper-button-prev slider-arrow">
          <div className={styles.tabler}> <Tabler/></div>
          </div>
          <div className="swiper-button-next slider-arrow">
          <div className={styles.tab}> <Tabler/></div>
          </div>
        </div>
       </Swiper>
       </div>
    </div>
  )
}
