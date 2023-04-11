import React from 'react'
import styles from './stylesCtnTItles..module.css'
import { Viga } from '@next/font/google'

const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})

const CtnTitles = ({text}) => {
  return (
    <div className={styles.ctnTitle}>
        <h2 className={`${styles.text} ${Vigaa.className}`}>{text}</h2>
    </div>
  )
}

export default CtnTitles