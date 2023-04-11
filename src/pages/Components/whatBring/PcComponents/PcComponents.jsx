import React, { useState } from 'react'
import styles from './stylesPcComponents.module.css'
import data from './PcComponents.json'
import CtnTitles from '../../Elements/CtnTitles/ctnTitles'
import BtnGreen from "../../Elements/Buttons/BtnGreen/btnGreen"
import BtnGreentwo from "../../Elements/Buttons/BtnGreen/BtnGreentwo"
import TwoBtnGreen from "../../Elements/Buttons/BtnGreen/TwoBtnGreen"
import Pagination from '../../Elements/Pagination/Pagination'
import Number from '../../Elements/Numbers/Number'
import { Viga } from '@next/font/google'
import Link from 'next/link'
import useSelectProduct from '../hooks/useSelectProduct'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';

const Vigaa = Viga ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })


const PcComponents = () => {

    /**SELECCION DE BOTON */

    const [btnOne, setBtnOne] = useState(false)
    const [btnTwo, setBtnTwo] = useState(false)
    const [btnThree, setBtnThree] = useState(false)
    const [btnFour, setBtnFour] = useState(false)
    const [btnFive, setBtnFive] = useState(false)
    const [btnSix, setBtnSix] = useState(false)
    const [btnSeven, setBtnSeven] = useState(false)
    const [btnEight, setBtnEight] = useState(false)
    const [btnNine, setBtnNine] = useState(false)
    const [btnTen, setBtnTen] = useState(false)


    const ChangeColor = (num)=> { 

                setBtnOne(()=>{if (num === 1) {
                    return true
                } else {return false}})
                setBtnTwo(()=>{if (num === 2) {
                    return true
                } else {return false}})
                setBtnThree(()=>{if (num === 3) {
                    return true
                } else {return false}})
                setBtnFour(()=>{if (num === 4) {
                    return true
                } else {return false}})
                setBtnFive(()=>{if (num === 5) {
                    return true
                } else {return false}})
                setBtnSix(()=>{if (num === 6) {
                    return true
                } else {return false}})
                setBtnSeven(()=>{if (num === 7) {
                    return true
                } else {return false}})
                setBtnEight(()=>{if (num === 8) {
                    return true
                } else {return false}})
                setBtnNine(()=>{if (num === 9) {
                    return true
                } else {return false}})
                setBtnTen(()=>{if (num === 10) {
                    return true
                } else {return false}})
    }

    /**OPEN OTHER */

    const OpenOther = ()=> { 
        document.getElementById("input").style.display="flex"
    }

    const CloseOther = () => { 
        document.getElementById("input").style.display="none"

    }

    /**SELECCION PRODUCTO */

    const [isProduct, Product, ChangeProduct ] = useSelectProduct();

    const CaptureInput = (e)=> { 
        const a = event.target.value
        ChangeProduct(event.target.a)
        if (a.length >0) { 
            setNext(false)
            setBlock(false)
        }
        else { 
            setBlock(true)
            setNext(true)
        }
    }

    /**BLoqueo de boton */

    const [block, setBlock] = useState(true)

    const BtnBlock = ()=> { 
        setBlock(false)
    }

    const [next, setNext] = useState(true)

    const btnBackFalse = false

  return (
    <main className={styles.mainComponents}>
        <section className={styles.title}>
            <div className={styles.ctntitle}>
                <div className={styles.ctnNumberTitle}>
                    <Number number={data.number}/>
                </div>
                <div className={styles.ctnTitleTwo}>
                    <CtnTitles text={data.title}/>
                </div>  
            </div>
        </section>
        <section className={styles.text}>
            <div className={styles.ctnText}>
                <h3 className={`${Vigaa.className}`}>{data.titleTwo}</h3>
                <p className={`${Vigaa.className}`}>{data.textOne}</p>
            </div>
        </section>
        <section className={styles.ctnButtons}>
            <div className={styles.ctnButtons_2}>
                <Link href={"./windowWhereBuy"} className={`${styles.ctnButonComponents} ${styles.boxOne}`} onClick={()=> { 
                    ChangeColor(1)
                    CloseOther()
                    ChangeProduct("CPU")
                    BtnBlock()
                    setNext(false)
                }}>
                    <BtnGreen text={data.textBtnOne} ids={"one"} click={btnOne}/>
                </Link>
                <Link href={"./windowWhereBuy"} className={`${styles.ctnButonComponents} ${styles.boxTwo}`} onClick={()=> { 
                    ChangeColor(2)
                    CloseOther()
                    ChangeProduct("GPU")
                    BtnBlock()
                    setNext(false)


                }}>
                    <BtnGreen text={data.textBtnTwo} ids={"two"} click={btnTwo}/>
                </Link>
                <Link href={"./windowWhereBuy"}  className={`${styles.ctnButonComponents} ${styles.boxThree}`} onClick={()=> { 
                    ChangeColor(3)
                    CloseOther()
                    ChangeProduct("RAM")
                    BtnBlock()
                    setNext(false)


                }}>
                    <BtnGreen text={data.textBtnThree} ids={"three"} click={btnThree}/>
                </Link>
                <Link href={"./windowWhereBuy"} className={`${styles.ctnButonComponents} ${styles.boxFour}`} onClick={()=> { 
                    ChangeColor(4)
                    CloseOther()
                    ChangeProduct("SSD")
                    BtnBlock()
                    setNext(false)


                }}>
                    <BtnGreen text={data.textBtnFour} ids={"four"} click={btnFour}/>
                </Link>
                <Link href={"./windowWhereBuy"}  className={`${styles.ctnButonComponents} ${styles.boxFive}`} onClick={()=> { 
                    ChangeColor(5)
                    CloseOther()
                    ChangeProduct("M2")
                    BtnBlock()
                    setNext(false)


                }}>
                <   BtnGreen text={data.textBtnFive} ids={"five"} click={btnFive}/>
                </Link>
                <Link href={"./windowWhereBuy"}  className={`${styles.ctnButonComponents} ${styles.boxSix}`} onClick={()=> { 
                    ChangeColor(6)
                    CloseOther()
                    ChangeProduct("HDD")
                    BtnBlock()
                    setNext(false)


                }}>
                    <BtnGreen text={data.textBtnSix} ids={"six"} click={btnSix}/>
                </Link>
                <Link href={"./windowWhereBuy"}  className={styles.ctnButonComponentsSeven} onClick={()=> { 
                    ChangeColor(7)
                    CloseOther()
                    ChangeProduct("Monitor")
                    BtnBlock()
                    setNext(false)


                }}>
                    <BtnGreentwo text={data.textBtnSeven} ids={"seven"} click={btnSeven}/>
                </Link>
                <Link href={"./windowWhereBuy"}  className={styles.ctnButonComponentsEight} onClick={()=> { 
                    ChangeColor(8)
                    CloseOther()
                    ChangeProduct("Motherboard")
                    BtnBlock()
                    setNext(false)


                }}>
                    <BtnGreentwo text={data.textBtnEight} ids={"eight"} click={btnEight}/>
                </Link>
                <Link href={"./windowWhereBuy"}  className={`${styles.ctnButonComponents} ${styles.boxNine}`} onClick={()=> { 
                    ChangeColor(9)
                    CloseOther()
                    ChangeProduct("PSU")
                    BtnBlock()
                    setNext(false)


                }}>
                    <BtnGreen text={data.textBtnNine} ids={"nine"} click={btnNine}/>
                </Link>
                <div href={"./windowWhereBuy"}  className={`${styles.ctnButonComponents} ${styles.boxTen}`} onClick={()=> { 
                    ChangeColor(10)
                    OpenOther()
                }}>
                    <BtnGreen text={data.textBtnTen} ids={"ten"} click={btnTen}/>
                </div>
            </div>
            <div className={styles.input} id="input">
                <h2 className={`${Vigaa.className}`}>NOMBRE</h2>
                <input className={`${Vigaa.className} ${styles.inputIsWhat}`} type="text" placeholder='¿qué es?' onChange={()=> { 
                    CaptureInput()
                }} />
                <Link  href={block ? "" : "./windowWhereBuy"}  className={styles.ctnSend}>
                    <SendIcon className={styles.sendIcon}/>
                    <p className={`${Vigaa.className}`}>Enviar</p>
                </Link >
            </div>
        </section>
        <section className={styles.btnLeft}>
            <Link href={"./WindowWhatBrig"} className={styles.linkNext}>
                <TwoBtnGreen text={data.textBtnBack} ids={"twelve"} block={btnBackFalse}/>
            </Link>
        </section>
        <section className={styles.arrowBack}> 
            <Link href={"./WindowWhatBrig"} className={styles.linkNext2}>
                <ArrowBackIcon className={styles.arrow}/>
                <p className={Vigaa.className}>Back</p>
            </Link>
        </section>
        <section className={styles.pagination}>
            <Pagination number={1} text={"Proceso de tu cotizacion"}/>
        </section>
    </main>
  )
}

export default PcComponents