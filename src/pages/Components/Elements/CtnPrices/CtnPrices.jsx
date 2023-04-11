import React from 'react'
import styles from './stylesCtnProces.module.css'
import { Viga } from '@next/font/google'

const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})


const CtnPrices = ({text}) => {
  return (
    <div className={styles.ctnBtnAndText}>
      <div className={styles.ctnPrice}>
        <p className={`${Vigaa.className}`}>{"$ "+text}</p>
      </div>
      <p className={`${Vigaa.className}`}>*valido por 24 horas</p>
    </div>

  )
}

export default CtnPrices