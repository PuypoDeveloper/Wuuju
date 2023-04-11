import React, { useState } from 'react'
import styles from './stylesBtnGreen.module.css'
import { Viga } from '@next/font/google'
import gsap from 'gsap'

const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})


const BtnGreen = ({text, ids, click}) => {

  const startAnimation = () => {
    let tl1= gsap.timeline({ 
      repeat:0,
    })
    let tl2= gsap.timeline({ 
      repeat:0,
    })
    tl1.to(("#ctn"+ids), {
      duration: 0.25,
      border: "1px solid #ec6e73",
    })
    tl2.to(("#btn"+ids), {
      duration: 0.25,
      border: "1px solid #ec6e73",
      backgroundColor: "#ec6e73",
      color: "#fff",
    })

  }

  const[state, setState] = useState(false)

  const animationOff = () => {
    if (state === false) {
      let tl1= gsap.timeline({ 
        repeat:0,
      })
      let tl2= gsap.timeline({ 
        repeat:0,
      })
      tl1.to(("#ctn"+ids), {
        duration: 0.25,
        border: "1px solid #46eab3",
      })
      tl2.to(("#btn"+ids), {
        duration: 0.25,
        border: "1px solid #46eab3",
        backgroundColor: "#09171E",
        color: "#46eab3"
      })
    }
  }

  
  return (
    <div className={`${styles.ctnButton} ${click ? styles.ChangeColotThree : styles.ChangeColorFour}`} onMouseMove={startAnimation} onMouseLeave={animationOff} id={"ctn"+ids}>
        <button className={`${styles.btnGreen} ${click ? styles.ChangeColotOne : styles.ChangeColorTwo}`} id={"btn"+ids}> 
          <p className={`${styles.textInBtn} ${Vigaa.className} `} id={"text"+ids}>{text}</p>
        </button>
    </div>

  )
}

export default BtnGreen


