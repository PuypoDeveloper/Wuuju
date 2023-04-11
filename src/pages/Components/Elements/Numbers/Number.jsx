import React from 'react'
import styles from './stylesNumber.module.css'
import { Viga } from '@next/font/google'

const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})

const Number = ({number}) => {
  return (
    <div className={styles.ctnNumber}>
        <p className={`${styles.text} ${Vigaa.className}`}>{number}</p>
    </div>
  )
}

export default Number