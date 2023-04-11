import React from 'react'
import data from './dataHeaderCalculator.json'
import styles from './styles/stylesHeaderCalculator.module.css'
import { Kanit } from '@next/font/google'
import { Timmana } from '@next/font/google'


const inter = Kanit ({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800","900"]
})

const Timman = Timmana ({ 
  subsets: ["latin"], 
  weight: ["400"]
})

const HeaderCalculator = () => {

  return (
    <main className={styles.mainHeader}>
        <section className={styles.logoHeader}>
            <img src={data.icon} alt="" />
        </section>
        <section className={`${styles.titleHeader}`}>
            <h3  className={`${styles.textOne} ${inter.className}`}>{data.titleOne}</h3>
            <h3  className={`${styles.textTwo} ${inter.className}`}>{data.titleTwo}</h3>
        </section>
    </main>
  )
}

export default HeaderCalculator