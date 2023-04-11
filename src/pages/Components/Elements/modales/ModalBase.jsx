import React from 'react'
import styles from './stylesModalBase.module.css'
import BtnModalBaseGreen from './BtnModalBaseGreen'
import BtnModalBaseRed from './BtnModalBase'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CloseModal from './CloseModal';
import { Viga } from '@next/font/google'
import useModalGoodHome from './hooks/modalGoodHome';
import Link from 'next/link';



const Vigaa = Viga ({ 
  subsets: ["latin"], 
  weight: ["400"]
})


const ModalBase = ({textOne, textTwo, textBtnOne, textBtnTwo, openModal, CloseModalTwo, btn, sendJSON}) => {

  const CancelClick = (e) => {
    e.stopPropagation()
  }
  
  return (
    <main className={`${openModal ? styles.GoodHome : styles.CloseModalGood}`} onClick={CloseModalTwo}>
            <section className={styles.ctnGoodHome} onClick={CancelClick}>
                <div className={styles.ctnGoodHomeTwo}>
                    <div className={styles.firstTextGoogHoome}>
                        <WarningAmberRoundedIcon className={styles.icon}/>
                        <h4 className={Vigaa.className}>{textOne}</h4>
                    </div>
                    <div className={styles.secondTextGoodHome}>
                        <p className={Vigaa.className}>{textTwo}</p>
                    </div>
                    <div className={styles.cntIconGoogHome}>
                        <div className={styles.ctnFirstBtn} onClick={CloseModalTwo}>
                            <BtnModalBaseRed text={textBtnOne}/>
                        </div>
                        <Link href={btn ? "./windowFinalPrice" : ""} className={styles.ctnFirstBtn} onClick={()=> {
                          CloseModalTwo()
                          if (btn) {
                            sendJSON()
                          }
                        }}>
                            <BtnModalBaseGreen text={textBtnTwo}/>
                        </Link>
                    </div>
                    <div className={styles.ctnCloseModal} onClick={CloseModalTwo}>
                      <CloseModal/>
                    </div>
                </div>
            </section>
    </main>
  )
}

export default ModalBase