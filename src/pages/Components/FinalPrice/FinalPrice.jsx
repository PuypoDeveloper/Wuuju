import React, { useEffect, useState } from 'react'
import BtnGreen from '../Elements/Buttons/BtnGreen/btnGreen'
import BtnGreentwo from '../Elements/Buttons/BtnGreen/BtnGreentwo'
import Pagination from '../Elements/Pagination/Pagination'
import styles from './stylesFinalPrice.module.css'
import data from './FinalPrice.json'
import { Kanit } from '@next/font/google'
import { Timmana } from '@next/font/google'
import { Viga } from '@next/font/google'
import CtnPrices from '../Elements/CtnPrices/CtnPrices'
import Link from 'next/link'
import dataTwo from '../../userInformation.json'


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


const FinalPrice = () => {
    
    const valuePublic = dataTwo.internalData.public
    const valuePublicTwo = parseInt(valuePublic)
    const valuePublicThree = valuePublicTwo.toLocaleString('de-DE')
  return (
    <main className={styles.mainFinalPrice}>
        <section className={styles.title_price}>
            <div className={styles.ctnTItlePrice}>
                <div className={styles.title}>
                    <h1 className={`${styles.textOne} ${inter.className}`}>{data.titleOne}</h1>
                    <h1 className={`${styles.textTwo} ${Timman.className}`}>{data.titleTwo}</h1>
                </div>
                <div className={styles.price}>
                    <div className={styles.ctnPrice}>
                        <CtnPrices text={valuePublicThree}/>
                        <h4 className={`${Vigaa.className} ${styles.textCop}`}>COP</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.textD}>
            <div className={styles.ctnTextD}>
                <p className={`${styles.textThree} ${Vigaa.className}`}>{data.textTwo}</p>
                <p className={`${styles.textThree} ${Vigaa.className}`}>{data.textThree}</p>
            </div>
        </section>
        <section className={styles.btnNewCotizacion}>
            <div className={styles.ctnBtnNewCotizacion}>
                <Link href={"./WindowWhatBrig"} className={styles.newCotizacion}>
                    <img src="./img/ctnTitles/ctnTwo.svg" alt="" />
                    <div className={styles.ctnTitlesBoxLeft}>
                        <h3 className={`${inter.className} ${styles.firstTitle}`}>{data.textFour}</h3>
                        <h3 className={` ${styles.secondTitle} ${Timman.className}`}>{data.textFive}</h3>
                    </div>
                </Link>
                <div className={styles.orderNow}>
                        <img src="./img/ctnTitles/ctnOne.svg" alt="" />
                        <div className={styles.ctnTitleBoxRigth}>
                            <h3 className={`${inter.className} ${styles.firstTitle}`}>{data.textSix}</h3>
                            <h3 className={` ${styles.secondTitleTwo} ${Timman.className}`}>{data.textSeven}</h3>
                        </div>
                </div>
            </div>
            
        </section>
        <section className={styles.details}>
            <div className={styles.ctnDetails}>
                <div className={styles.ctnTextDetails}>
                    <p className={`${styles.textFour} ${Vigaa.className}`}>{data.textEight}</p>
                    <p className={`${styles.textFive} ${Vigaa.className}`}>{data.textNine}</p>
                </div>
                <div className={styles.ctnBtnDetails}>
                    <Link href={"/windowAboutQuote"} className={styles.linkBtn}>
                        <BtnGreentwo text={data.textBtn}/>
                    </Link>
                </div>
            </div>
        </section>
        <section className={styles.pagination}>
            <Pagination number={4} text={"¡¡Wuuuujuu terminaste!!"}/>
        </section>
    </main>
  )
}

export default FinalPrice