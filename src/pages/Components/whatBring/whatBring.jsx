import React, { useEffect, useState } from 'react'
import BtnGreen from "../Elements/Buttons/BtnGreen/btnGreen"
import BtnGreentwo from "../Elements/Buttons/BtnGreen/BtnGreentwo"
import CtnTitles from '../Elements/CtnTitles/ctnTitles'
import Number from '../Elements/Numbers/Number'
import Pagination from '../Elements/Pagination/Pagination'
import styles from './stylesWhatBring.module.css'
import data from './dataWhatBring.json'
import { Viga } from '@next/font/google'
import Link from 'next/link'
import useSelectProduct from './hooks/useSelectProduct'
import SendIcon from '@mui/icons-material/Send';
 

const Vigaa = Viga ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })


const WhatBring = () => {
    const Other = () => { 
        document.getElementById("input").style.display="flex"
    }
    const closeOther = () => { 
        document.getElementById("input").style.display="none"
    }

    const [btnOne, setBtnOne] = useState(false)
    const [btnTwo, setBtnTwo] = useState(false)
    const [btnThree, setBtnThree] = useState(false)
    const [btnFour, setBtnFour] = useState(false)
    const [btnFive, setBtnFive] = useState(false)

     const ChangeColor = (num)=> { 
            setBtnOne(()=>{if (num === 1){ 
                return true
            } else {return false}})
            setBtnTwo(()=>{if (num === 2){ 
                return true
            } else {return false}})
            setBtnThree(()=>{if (num === 3){ 
                return true
            } else {return false}})
            setBtnFour(()=>{if (num === 4){ 
                return true
            } else {return false}})
            setBtnFive(()=>{if (num === 5){ 
                return true
            } else {return false}})
     }

     /** ENVIO INFORMACION */

     const [isProduct, Product, ChangeProduct ] = useSelectProduct();
     
     const CaptureInput = (e)=> { 
        const a = event.target.value
        ChangeProduct(a)
        if (a.length >0){ 
            BlockBtn()
            setNext(false)

        }
        else { 
            setBlock(true)
            setNext(true)
        }
    }

    /**BLOCK BOTON */

    const [block, setBlock] = useState(true)

    const BlockBtn = ()=> { 
        setBlock(false)
    }

    const [next, setNext] = useState(true)


  return (
    <main className={styles.mainBring}>
        <section className={styles.title}>
            <div className={styles.ctnTitle}>
                <div className={styles.ctnNumberTitle}>
                    <Number number={data.number}/>
                </div>
                <div className={styles.ctnTitleIn}>
                    <CtnTitles text={data.title}/>
                </div>  
            </div>
        </section>
        <section className={styles.text}>
            <div className={styles.ctnTextBring}>
                <div className={styles.ctnTextBringTwo}>
                    <p className={`${styles.textInt} ${Vigaa.className}`}>{`${data.textOne}`} <span className={`${styles.textIntTwo} ${Vigaa.className}`}>{data.textTwo}</span></p>
                </div>
                <p className={`${styles.textInt} ${Vigaa.className}`}>{data.textThree}</p>
            </div>
        </section>
        <section className={styles.btnsBring}>
            <div className={styles.ctnBtinBring}>
                <Link href={"./windowWhereBuy"} className={`${styles.ctnOneBtn} ${styles.ctnOneBtn1}`} onClick={()=>{ 
                    ChangeColor(1)
                    closeOther()
                    ChangeProduct("Celular")
                    BlockBtn()
                    setNext(false)
                    }}>
                    <BtnGreen text={data.textBtnOne} ids={"one"} click={btnOne}/>
                </Link>
                <Link href={"./windowWhereBuy"} className={`${styles.ctnOneBtn} ${styles.ctnOneBtn2}`} onClick={()=>{ 
                    ChangeColor(2)
                    closeOther()
                    ChangeProduct("Laptop")
                    BlockBtn()
                    setNext(false)

                    }}>
                    <BtnGreen text={data.textBtnTwo} ids={"two"} click={btnTwo}/>
                </Link>
                <Link href={"./windowWhereBuy"} className={`${styles.ctnOneBtn} ${styles.ctnOneBtn3}`} onClick={()=>{ 
                    ChangeColor(3)
                    closeOther()
                    ChangeProduct("Tablet")
                    BlockBtn()
                    setNext(false)

                    }}>
                    <BtnGreen text={data.textBtnThree} ids={"three"} click={btnThree}/>
                </Link>
                <div  className={styles.ctnOneBtn4} onClick={()=>{ 
                    ChangeColor(4)
                    closeOther()
                    BlockBtn()
                    }}>
                    <Link href={"./windowPcComponents"} className={styles.linkComponents}> 
                        <BtnGreentwo text={data.textBtnFour} ids={"four"} click={btnFour}/>
                    </Link>
                </div>
                <div className={`${styles.ctnOneBtn} ${styles.ctnOneBtn5}`} onClick={()=>{ 
                    Other()
                    ChangeColor(5)
                    }}>
                    <BtnGreen text={data.textBtnFive} ids={"five"} click={btnFive}/>
                </div>
            </div>
            <div className={styles.input} id="input">
                <div className={styles.ctnINput}>
                    <h2 className={`${Vigaa.className}`}>NOMBRE </h2>
                    <input className={`${Vigaa.className} ${styles.inputIsWhat}`} type="text" placeholder='¿qué es?' onChange={()=> { 
                        CaptureInput()
                    }}/>
                    <Link  href={block ? "" : "./windowWhereBuy"}  className={styles.ctnSend}>
                    <SendIcon className={styles.sendIcon}/>
                    <p className={`${Vigaa.className}`}>Enviar</p>
                </Link >
                </div>
            </div>
        </section>
        <section className={styles.pagination}>
            <Pagination number={1} text={"Proceso de tu cotizacion"}/>
        </section>
    </main>
  )
}

export default WhatBring

