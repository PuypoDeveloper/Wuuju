import React, { useEffect, useState } from 'react'
import BtnGreen from '../Elements/Buttons/BtnGreen/btnGreen'
import TwoBtnGreen from '../Elements/Buttons/BtnGreen/TwoBtnGreen'
import CtnTitles from '../Elements/CtnTitles/ctnTitles'
import Number from '../Elements/Numbers/Number'
import Pagination from '../Elements/Pagination/Pagination'
import Stores from '../Elements/stores/stores'
import styles from "./stylesWhereBuy.module.css"
import data from './dataWheteBuy.json'
import { Viga } from '@next/font/google'
import Link from 'next/link'
import useSelectSotore from '../whatBring/hooks/useSelectSotore'
import SendIcon from '@mui/icons-material/Send';
import dataTow from "../../userInformation.json"


const Vigaa = Viga ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })



const WhereBuy = () => {

    const [isShop, shop, ChangeShop] = useSelectSotore()



    const [link, setLink] = useState("")
    const [isLink, setLinkTwo] = useState(false)
    const [nameShopOne, setNameShopOne] = useState(false)
    const [diferent, setDiferent] = useState(false)

    const ChangeShopTwo = (e)=>{
        const a = event.target.value
        if (a.length > 0) {
            ChangeShop(a)
            setNameShopOne(true)
            setDiferent(true)
        }
        else { 
            setNameShopOne(false)
        }
    }

    const NameShop = () => { 
        if (nameShopOne === true) { 
            document.getElementById("input").style.display="flex"
            document.getElementById("galleta").style.display="none"

        }
    }

    const ChangeStore = (e)=>{ 
        const a = event.target.value
        setLink(a)

    }

    useEffect(()=>{
        if (link.length > 0) {
        const regex = /https?:\/\/\S+/i;
        const texto = link
        if (regex.test(texto)) {
            setLinkTwo(true)
            document.getElementById("linkWrong").style.display="none"

            if (dataTow.internalData.Shop === "Amazon") { 
                let parts = texto.split("/"); 
                if (parts[3] === "-"){ 
                    const linkkAmazon = parts[7]
                    dataTow.internalData.link = linkkAmazon
                }
                else { 
                    const linkAmazon = parts[5]
                    dataTow.internalData.link = linkAmazon
                }
            }
            else { 
                dataTow.internalData.link = texto
            }
        } else {
        setLinkTwo(false)
        document.getElementById("linkWrong").style.display="block"
        }
    }
    },[link])

    useEffect(()=>{
        if (diferent === true) {
            document.getElementById("diferentShop").style.display="none"
        }
        else {
            document.getElementById("diferentShop").style.display="flex"
        }
    },[diferent])


    const activeOther = ()=> { 
        setNameStore("la tienda")
        document.getElementById("galleta").style.display="flex"
        document.getElementById("btnOther").style.display="none"
        document.getElementById("input").style.display="none"

  
    }

    const [nameStore, setNameStore] = useState("")  
    const closeOther = (name)=> { 
        document.getElementById("input").style.display="flex"
        document.getElementById("btnOther").style.display="none"
        document.getElementById("galleta").style.display="none"
        setNameStore(name) 
        setDiferent(false)
    }

    const btnBackFalse = false

  return (
    <main className={styles.mainWhere}>
        <section className={styles.title}>
            <div className={styles.ctnTitle}>
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
                <div className={styles.ctnTextTwo}>
                    <p className={`${Vigaa.className }`}>{data.textOne} <span className={`${Vigaa.className } ${styles.textRed}`}>{data.textTwo} </span> {data.textThree} </p>
                </div>
                <p className={`${Vigaa.className }`}>{data.textFour}</p>
            </div>
        </section>
        <div className={styles.ctnStoresPrincipal}>
            <section className={styles.stores}>
                <div className={styles.ctnStore}>
                    <Stores Close={closeOther}/>
                </div>
            </section>
            <div className={styles.ctnOtherElements}>
                <section className={styles.other} id="btnOther">
                    <div className={styles.ctnOther} onClick={activeOther}>
                        <BtnGreen text={data.textBtnOne} ids={"one"}/>
                    </div>
                </section>
                <div className={styles.input} id="input">
                    <div className={styles.linkWrong} id ="linkWrong">
                        <p className={`${Vigaa.className } ${styles.textRed}`}>El link no es valido
                        </p>
                    </div>
                    <div className={styles.ctnLinkPrincipal}>
                        <h2 className={`${Vigaa.className }`} >Ingresa el link de {nameStore}</h2>
                        <input  className={`${Vigaa.className } ${styles.blockInput}`} type="text" placeholder='Ingresa el link' onChange={()=>{ 
                            ChangeStore()
                        }}/>
                        <Link  href={isLink ? "./windowCalculate": ""}  className={styles.ctnSend}>
                            <SendIcon className={styles.sendIcon}/>
                            <p className={`${Vigaa.className}`}>Enviar</p>
                        </Link >
                    </div>
                    <div className={styles.ctnOpenOther} id ="diferentShop">
                        <p className={`${Vigaa.className }`} onClick={activeOther}>¿Es una tienda diferente ?</p>
                    </div>
                </div>
                <section className={styles.sectionNmeStore} id="galleta">
                    <div className={styles.ctnNameStoreI}>
                        <h2 className={Vigaa.className}>Ingrese el nombre de la tienda</h2>
                        <input type="text" placeholder='Nombre' onChange={ChangeShopTwo} className={Vigaa.className}/>
                        <div  className={styles.ctnSend} onClick={NameShop}>
                            <SendIcon className={styles.sendIcon}/>
                            <p className={`${Vigaa.className}`}>Enviar</p>
                        </div >

                    </div>
                </section>
                <section className={`${styles.btnLeft} ${styles.btntransOne}`}>
                    <Link href={"./WindowWhatBrig"} className={styles.linkNext}>
                        <TwoBtnGreen text={data.textBtnBack} ids={"three"} block={btnBackFalse}/> 
                    </Link>
                </section>
            </div>
        </div>
        <section className={`${styles.btnLeft} ${styles.btntransTwo}`}>
            <Link href={"./WindowWhatBrig"} className={styles.linkNext}>
                <TwoBtnGreen text={data.textBtnBack} ids={"three"} block={btnBackFalse}/> 
            </Link>
        </section>  
        <section className={styles.pagination}>
                <Pagination number={2} text={"Proceso de tu cotizacion"}/>
        </section>
    </main>
  )
}

export default WhereBuy