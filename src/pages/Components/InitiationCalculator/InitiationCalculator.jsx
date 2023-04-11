import React from 'react'
import BtnGreentwo from '../Elements/Buttons/BtnGreen/BtnGreentwo'
import styles from './styles/stylesInitiationCalculator.module.css'
import data from './dataInitiationCalculator.json'
import { Kanit } from '@next/font/google'
import { Timmana } from '@next/font/google'
import { Viga } from '@next/font/google'
import Link from 'next/link'


const inter = Kanit ({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800","900"]
})

const Timman = Timmana ({ 
  subsets: ["latin"], 
  weight: ["400"]
})

const Vigaa = Viga ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })

const InitiationCalculator = () => {
  return (
    <main className={styles.initiationMain}>
        <section className={styles.description}>
            <div className={styles.ctnDescription}>
                <div className={styles.ctnTitles}>
                    <h1 className={`${styles.titleOne} ${inter.className}`}>{data.titleOne}</h1>
                    <h1 className={`${styles.titleTwo} ${Timman.className}`}>{data.titleTwo}</h1>
                </div>
                <img src={data.icon} className={styles.imageSum} alt="" />                
            </div>
        </section>
        <section className={styles.text}>
            <div className={styles.ctnText}>
                <p className={`${styles.textInt} ${Vigaa.className}`}>{data.textOne}</p>
                <div className={styles.ctnTextTwos}>
                    <p className={`${styles.textInt} ${Vigaa.className}`}>{data.textTwo}</p>
                    <p className={`${styles.textIntRed} ${Vigaa.className}`}>{data.textThree}</p>
                </div>
            </div>
        </section>
        <section className={styles.btnInitiation}>
            <Link href={"/WindowWhatBrig"} className={styles.ctnBtn}>
                <BtnGreentwo text={data.textBtn}/>
            </Link>
        </section>
    </main>
  )
}

export default InitiationCalculator