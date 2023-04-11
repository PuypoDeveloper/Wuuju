import React, { useEffect } from 'react'
import CtnPrices from '../Elements/CtnPrices/CtnPrices'
import CtnTitles from '../Elements/CtnTitles/ctnTitles'
import styles from './stylesAboutQuote.module.css'
import Divisas from '../Elements/Divisas/Divisas'
import data from './AboutQuote.json'
import { Viga } from '@next/font/google'
import { Kanit } from '@next/font/google'
import { Timmana } from '@next/font/google'
import dataTwo from '../../userInformation.json'
import { useState } from 'react'
import Link from 'next/link'

const Vigaa = Viga ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })
  const inter = Kanit ({ 
    subsets: ["latin"], 
    weight: ["100","200","300","400","500","600","700","800","900"]
  })
  
  const Timman = Timmana ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })

const AboutQuote = () => {

    const today = new Date();
    const date = today.toLocaleDateString();

    const dolar = dataTwo.internalData.dolar
    const dolarThree = Number(dolar).toFixed(0)

    const valuePublic = dataTwo.internalData.public; 
    const valuePublicTwo = parseInt(valuePublic);
    const valuePublicThree = valuePublicTwo.toLocaleString('de-DE');

    const [sureTwo, setSureTwo] = useState(0)

    useEffect(() => { 
            const a  = dataTwo.internalData.valueUSD 
            setSureTwo(a)
        }
    , [sureTwo])
    
    const sureInt = dataTwo.internalData.sure.toFixed(0)

    const changeDivisas = () => {
        const a = sureTwo*dataTwo.internalData.dolar; 
        const b = a.toFixed(0)
        const z = parseInt(b)
        const c = z.toLocaleString('de-DE')
        const d = document.getElementById("costProduct")
        d.innerHTML = c

        const e = sureInt*dataTwo.internalData.dolar;
        const f = e.toFixed(0)
        const g = parseInt(f)
        const h = g.toLocaleString('de-DE')
        const i = document.getElementById("sure")
        i.innerHTML = h

        const j = dataTwo.internalData.tarifa*dataTwo.internalData.dolar;
        const k = j.toFixed(0)
        const l = parseInt(k)
        const m = l.toLocaleString('de-DE')
        const n = document.getElementById("tarifa")
        n.innerHTML = m

        document.getElementById("usaDivisa").style.display = "none"
        document.getElementById("copDivisa").style.display = "block"
        document.getElementById("usaDivisa2").style.display = "none"
        document.getElementById("copDivisa2").style.display = "block"
        document.getElementById("usaDivisa3").style.display = "none"
        document.getElementById("copDivisa3").style.display = "block"

    }   

  return (
    <main className={styles.aboutMain}>
        <section className={styles.title}>
            <div className={styles.ctnTtitle}>
                <CtnTitles text={data.titlePrincipal}/>
            </div>
        </section>
        <section className={styles.textOne}>
            <div className={styles.ctnTextOne}>
                <p className={`${Vigaa.className}`}>{data.othertext}</p>
                <p className={`${Vigaa.className} `}>{data.textOne} <span className={styles.textDateAbout}>{date}</span> {data.textTwo} <span className={styles.textDateAbout} onClick={changeDivisas}>{data.textThree}</span></p>
                <p className={`${Vigaa.className}`}><span className={styles.textDateAbout}>{data.textFour}</span> {data.textFive}</p>
            </div>
        </section>
        <section className={styles.accounts}>
            <div className={styles.ctnAccounts}>
                <div className={styles.ctnTitles}>
                    <h3 className={`${styles.subtitleOne} ${inter.className}`}>{data.titleTwo}</h3>
                    <h3 className={`${styles.subtitleTwo} ${Timman.className}`}>{data.titleThree}</h3>
                </div>
                <div className={styles.ctnAccountsTwo}>
                    <div className={styles.priceProduct}>
                        <h4 className={`${styles.subtitlesThree} ${Vigaa.className}`}>COSTO DEL PRODUCTO</h4>
                        <div className={styles.priceNum}>
                            <div className={`${styles.ctnPriceNum} ${Vigaa.className}`} id="costProduct">{sureTwo}</div>
                            <p className={`${Vigaa.className}`} id="usaDivisa">USD</p>
                            <p className={`${Vigaa.className} ${styles.copDivisa}`} id="copDivisa">COP</p>
                        </div>
                    </div>
                    <img src="" alt="" />
                    <div className={styles.priceProduct}>
                        <h4 className={`${styles.subtitlesThree} ${Vigaa.className}`}>TARIFA APLICADA </h4>
                        <div className={styles.priceNum2}>
                            <div className={`${styles.ctnPriceNum2} ${Vigaa.className}`} id="tarifa">{dataTwo.internalData.tarifa}</div>
                            <p className={`${Vigaa.className}`} id="usaDivisa2">USD/Lb</p>
                            <p className={`${Vigaa.className} ${styles.copDivisa}`} id="copDivisa2">COP/Lb</p>
                        </div>
                    </div>
                    <img src="" alt="" />
                    <div className={styles.priceProduct}>
                        <h4 className={`${styles.subtitlesThree} ${Vigaa.className}`}>SEGURO</h4>
                        <div className={styles.priceNum}>
                            <div className={`${styles.ctnPriceNum} ${Vigaa.className}`} id = "sure">
                                {sureInt}
                            </div>
                            <p className={`${Vigaa.className}`} id="usaDivisa3">USD</p>
                            <p className={`${Vigaa.className} ${styles.copDivisa}`} id="copDivisa3">COP</p>
                        </div>
                    </div>
                </div>
                <div className={styles.ctnDivisas}>
                    <Divisas usa={"1 USD"} cop={dolarThree+" COP"}/>
                </div>
            </div>
        </section>
        <section className={styles.finalPrice}>
            <div className={styles.ctnFinalPrice}>
                <div className={styles.finalPriceTEXT}>
                    <h3 className={`${styles.TitlePriceEndOne} ${inter.className}`}>{data.titleFour}</h3>
                    <h3 className={`${styles.TitlePriceEndTwo} ${Timman.className}`}>{data.titleFive}</h3>
                </div>
                <div className={styles.finalPriceNum}>
                    <div className={styles.ctnNumPrice}>
                        <CtnPrices text={valuePublicThree}/>
                        <p className={`${styles.textCop} ${Vigaa.className}`}>COP</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.ticTac}>
            <div className={styles.ctnTicTac}>
                <p className={`${Vigaa.className}`}>{data.textSeven}</p>
                <p className={`${Vigaa.className}`}>{data.textEight}</p>
            </div>
        </section>
        <section className={styles.orderBtn}>
            <div className={styles.ctnOrderBtn}>
                <Link href={"./WindowWhatBrig"} className={styles.newCotizacion}>     
                    <img src="./img/ctnTitles/ctnTwo.svg" alt="" />
                    <div className={styles.ctnTitleBoxLeft}>
                        <h4 className={`${styles.textOneOne} ${inter.className}`}>{data.titleSix}</h4>
                        <h4 className={`${styles.textTwoTwo} ${Timman.className}`}>{data.titleSeven}</h4>
                    </div>
                </Link>
                <div className={styles.newOrder}>
                        <img src="./img/ctnTitles/ctnOne.svg" alt="" />
                        <div className={styles.ctnTitleBoxRight}>
                            <h4 className={`${styles.textOneOne} ${inter.className}`}>{data.titleEight}</h4>
                            <h4 className={`${styles.textTwoTwoO} ${Timman.className}`}>{data.titleNine}</h4>
                        </div>
                </div>
            </div>
        </section>
        
    </main>
  )
}

export default AboutQuote