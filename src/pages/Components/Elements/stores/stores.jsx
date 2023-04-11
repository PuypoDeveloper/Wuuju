import { Main } from 'next/document'
import React, { useState } from 'react'
import styles from './stylesStores.module.css'
import data from './stores.json'
import dataTwo from "../../../userInformation.json"
import useSelectSotore from '../../whatBring/hooks/useSelectSotore'
import gsap from 'gsap'
import { display } from '@mui/system'
import Link from 'next/link'



const Stores = ({Close}) => {

    const [isShop, shop, ChangeShop] = useSelectSotore()

    const [apple, setApple] = useState(false)
    const [ebay, setEbay] = useState(false)
    const [amazon, setAmazon] = useState(false)
    const [newegg, setNewegg] = useState(false)
    const [bestbuy, setBestbuy] = useState(false)
    const [byh, setByh] = useState(false)

    const ChangeShopTwo = (shop)=> { 
        if (shop === 1) { 
            setApple(true)
            setEbay(false)
            setAmazon(false)
            setNewegg(false)
            setBestbuy(false)
            setByh(false)
        }
        else if (shop === 2) { 
            setApple(false)
            setEbay(true)
            setAmazon(false)
            setNewegg(false)
            setBestbuy(false)
            setByh(false)
        }
        else if (shop === 3) { 
            setApple(false)
            setEbay(false)
            setAmazon(true)
            setNewegg(false)
            setBestbuy(false)
            setByh(false)
        }
        else if (shop === 4) { 
            setApple(false)
            setEbay(false)
            setAmazon(false)
            setNewegg(true)
            setBestbuy(false)
            setByh(false)
        }
        else if (shop === 5) { 
            setApple(false)
            setEbay(false)
            setAmazon(false)
            setNewegg(false)
            setBestbuy(true)
            setByh(false)
        }
        else if (shop === 6) { 
            setApple(false)
            setEbay(false)
            setAmazon(false)
            setNewegg(false)
            setBestbuy(false)
            setByh(true)
        }
    }



  return (
    <main className={styles.mainStores}>
        <div className={styles.ctnMainStores}>
            <Link href={""} className={styles.ctnStores}>
                <div className={`${styles.ctnStoresTwo} ${apple ? styles.changeColor : styles.ctnStoresTwo}`} id ="apple" onClick={()=> {
                    ChangeShop("Apple")
                    ChangeShopTwo(1)
                    Close("Apple")
                }}>
                    <img className={styles.imgOne} src={data.imgOne} alt="" />
                </div>
            </Link>
            <Link href={""}  className={styles.ctnStores}>
                <div className={`${styles.ctnStoresTwo} ${ebay ? styles.changeColor : styles.ctnStoresTwo}`}  id ="ebay" onClick={()=> {
                    ChangeShop("ebay")
                    ChangeShopTwo(2)
                    Close("Ebay")

                }}>
                    <img src={data.imgTwo} alt="" />
                </div>
            </Link>
            <Link href={""}  className={styles.ctnStores}>
                <div className={`${styles.ctnStoresTwo} ${amazon ? styles.changeColor : styles.ctnStoresTwo}`}  id ="amazon" onClick={()=> {
                    ChangeShop("Amazon")
                    ChangeShopTwo(3)
                    Close("Amazon")

                }}>
                    <img  className={styles.imgThree} src={data.imgThree} alt="" />
                </div>
            </Link>
            <Link href={""}  className={styles.ctnStores}>
                <div className={`${styles.ctnStoresTwo} ${newegg ? styles.changeColor : styles.ctnStoresTwo}`}  id ="newegg" onClick={()=> {
                    ChangeShop("NewEgg")
                    ChangeShopTwo(4)
                    Close("NewEgg")

                }}>
                    <img src={data.imgFour} alt="" />
                </div>
            </Link>
            <Link href={""}  className={styles.ctnStores}>
                <div className={`${styles.ctnStoresTwo} ${bestbuy ? styles.changeColor : styles.ctnStoresTwo}`}  id ="bestbuy" onClick={()=> {
                    ChangeShop("BestBuy")
                    ChangeShopTwo(5)
                    Close("BestBuy")

                }}>
                    <img src={data.imgFive} alt="" />
                </div>
            </Link>
            <Link href={""}  className={styles.ctnStores}>
                <div className={`${styles.ctnStoresTwo2} ${byh ? styles.changeColor : styles.ctnStoresTwo2}`}  id ="byh" onClick={()=> {
                    ChangeShop("BYH")
                    ChangeShopTwo(6)
                    Close("BYH")

                }}>
                    <img src={data.imgSix} alt="" />
                </div>
            </Link>
        </div>
    </main>
  )
}

export default Stores