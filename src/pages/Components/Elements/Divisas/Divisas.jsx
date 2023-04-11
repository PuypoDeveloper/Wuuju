import React from 'react'
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import styles from './stylesDivisas.module.css'
import { Viga } from '@next/font/google'

const Vigaa = Viga ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })

const Divisas = ({usa, cop}) => {
  return (
    <main className={styles.mainDivisa}>
        <div className={styles.ctnDivisas}>
            <div className={styles.usa}>
                <div className={styles.ctnText}>
                    <p className={`${styles.textDolar} ${Vigaa.className}`}>{usa}</p>
                </div>
                <img src="./img/banderas/USA.svg" alt="" />
            </div>
            <div className={styles.ctnIcon}>
                <img src="./img/icons/exchange.svg" alt="" />
            </div>
            <div className={styles.cop}>
                <div className={styles.ctnTextTwo}>
                    <p className={`${styles.textDolar} ${Vigaa.className}`}>{cop}</p>
                </div>
                <img src="./img/banderas/COP.svg" alt="" />
            </div>

        </div>
    </main>
  )
}

export default Divisas