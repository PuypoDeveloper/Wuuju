import React from 'react'
import styles from './stylesModalBase.module.css'
import { Viga } from '@next/font/google'


const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})


const BtnModalBaseGreen = ({text}) => {
    return (
      <button className={styles.btnTwo}>
          <div className={styles.ctnTexTwo}>
              <p className={Vigaa.className}>{text}</p>
          </div>
      </button>
    )
  }

export default BtnModalBaseGreen