import React from 'react'
import styles from './stylesModalBase.module.css'
import { Viga } from '@next/font/google'


const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})

const BtnModalBaseRed = ({text}) => {
  return (
    <button className={styles.btnOne}>
        <div className={styles.ctnTextOne}>
            <p className={Vigaa.className}>{text}</p>
        </div>
    </button>
  )
}

export default BtnModalBaseRed

