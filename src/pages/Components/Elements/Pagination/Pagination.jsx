import React from 'react'
import styles from './stylesPagintation.module.css'
import { Viga } from '@next/font/google'

const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})

const Pagination = ({number, text}) => {
  return (
    <main className={styles.Pagination}>
        <p className={`${Vigaa.className}`}>{text}</p>
        <section className={`${styles.ctnNumbers} `}>
            <div className={`${styles.number} ${Vigaa.className} ${number === 1 || number === 2 || number ===3 || number === 4 ? styles.paint: ""}`}>1</div>
            <div className={`${styles.number} ${Vigaa.className} ${number === 2 || number === 3 || number === 4 ? styles.paint: ""}`}>2</div>
            <div className={`${styles.number} ${Vigaa.className} ${number === 3 || number === 4 ? styles.paint: ""}`}>3</div>
            <div className={`${styles.number} ${Vigaa.className} ${number === 4 ? styles.paint: ""}`}>4</div>
        </section>
    </main>
  )
}

export default Pagination