import React, { useEffect, useState } from 'react'
import TwoBtnGreen from '../Elements/Buttons/BtnGreen/TwoBtnGreen' 
import Pagination from '../Elements/Pagination/Pagination'
import styles from './stylesFuntionCalculator.module.css'
import data from './dataFunctionCalculator.json'
import Link from 'next/link'
import CtnTitles from '../Elements/CtnTitles/ctnTitles'
import Number from '../Elements/Numbers/Number'
import Divisas from '../Elements/Divisas/Divisas'
import { Viga } from '@next/font/google'
import { Timmana } from '@next/font/google'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import dataTwo from '../../userInformation.json'
import dataThree from '../../Password.json'
import { GoogleSpreadsheet } from "google-spreadsheet";
import gsap from 'gsap'
import { border } from '@mui/system'
import ModalBase from '../Elements/modales/ModalBase'
import useModalGoodHome from '../Elements/modales/hooks/modalGoodHome'
import useModalSend from '../Elements/modales/hooks/modalSend'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const Vigaa = Viga ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })

  const Timman = Timmana ({ 
    subsets: ["latin"], 
    weight: ["400"]
  })

const FunctionCalculator = () => {

    /** FECHA */

    const today = new Date();
    const date = today.toLocaleDateString();
    dataTwo.internalData.date = date
    dataTwo.publicData.date = date

    /**VALOR DOLAR */

    const url = "https://api.exchangerate.host/convert?from=USD&to=COP";

    const [dolar, setDolar] = useState(0)

    fetch(url, {cache: "no-store"})
        .then(response => response.json())
        .then(data => {
            const result = data.result;
            dataTwo.internalData.dolar = result
            setDolar(result)
        })
        .catch(error => {
            console.error("Error al consumir la API", error);
        });


    /**PESO DE PRODUCTOS */

    const [weight, setWeight] = useState(0)

    useEffect(()=> { 
        if (dataTwo.publicData.typeProduct === "Celular" || dataTwo.publicData.typeProduct === "Laptop" || dataTwo.publicData.typeProduct === "Tablet") { 
            setWeight(11)
            document.getElementById("weight").value = 11
            document.getElementById("weight").disabled = true
            dataTwo.internalData.weight = 11
            document.getElementById("inputPeso").style.opacity = 0
        }
        else if (dataTwo.publicData.typeProduct === "CPU" || dataTwo.publicData.typeProduct === "M2" || dataTwo.publicData.typeProduct === "RAM" || dataTwo.publicData.typeProduct === "SSD") { 
            setWeight(3)
            document.getElementById("weight").value = 3
            document.getElementById("weight").disabled = true
            dataTwo.internalData.weight = 3 
            document.getElementById("inputPeso").style.opacity = 0
        

        }
        else if(dataTwo.publicData.typeProduct === "Motherboard") { 
            setWeight(7)
            document.getElementById("weight").value = 7
            document.getElementById("weight").disabled = true
            dataTwo.internalData.weight = 7
            document.getElementById("inputPeso").style.opacity = 0


        }
        else if (dataTwo.publicData.typeProduct === "HDD") { 
            setWeight(4)
            document.getElementById("weight").value = 4
            document.getElementById("weight").disabled = true
            dataTwo.internalData.weight = 4
            document.getElementById("inputPeso").style.opacity = 0


        }
        else { 
            document.getElementById("inputPeso").style.opacity = 1

        }
    },[weight]) 

    const CaptureWeight = (e) => {
        const value = event.target.value
        setWeight(value)
        dataTwo.internalData.weight = value
    }

        /**CAPTURAR VALOR USD INPUT */

        const [usd, setUsd] = useState(0)

        const CaptureValue = (e) => { 
            const value = event.target.value
            setUsd(value)
            dataTwo.internalData.valueUSD = value
            if (value >=2500) { 
                HandleOPen()
            }
            
        }

        /**VALOR TAX */

        const [tax, setTax] = useState(0)
        
        useEffect(()=> {
            if (dataTwo.internalData.Shop === "Amazon") {
                setTax(0)
                dataTwo.internalData.tax = 0
            }
            else { 
                const a = usd*0.07
                setTax(a)
                dataTwo.internalData.tax = a
            }

        },[usd, dataTwo.internalData.Shop])

        /**SEGURO */

        const [seguro, setSeguro] = useState(0)

        const CheckBox = (e) => {
            const value = event.target.checked
            if (value === true) {
                const a = (parseInt(usd) + parseFloat(tax)) * 0.035
                setSeguro(a)
                dataTwo.internalData.sure = a
            }
            else {
                setSeguro(0)
                dataTwo.internalData.sure = 0
            }
        }

        /**OPERACIONES TARIFA */

        const [tarifa, setTarifa] = useState(0)
    
        useEffect(()=> {
            if (usd <= 500) { 
                const a = weight * 4.5
                setTarifa(a)
                dataTwo.internalData.tarifa = a
            }
            if (usd > 500 && usd < 850) { 
                const a = weight * 5.5
                setTarifa(a)
                dataTwo.internalData.tarifa = a
            }
            if (usd >= 850) {
                const a = weight * 6
                setTarifa(a)
                dataTwo.internalData.tarifa = a
            }
        },[usd, weight])


        /**OPERACIONES ARANCEL */

        const [arancel, setArancel] = useState(0)

        useEffect(()=> {
            const a = tarifa*(dolar+170)
            setArancel(a)
            dataTwo.internalData.arancel = a
        },[tarifa, dolar])

        /**SUBTOTAL */

        const [subtotal, setSubtotal] = useState(0)

        useEffect(()=> {
            if (dataTwo.internalData.Shop === "Amazon") {
                const a = arancel+(( parseInt(usd)+parseFloat(tax)+parseFloat(seguro))*(dolar-40))
                setSubtotal(a)
                dataTwo.internalData.subtotal = a
                document.getElementById("inputTax").style.opacity = 0
            }
            else {
                const b = arancel+(( parseInt(usd)+parseFloat(tax)+parseFloat(seguro))*(dolar+170))
                setSubtotal(b)
                dataTwo.internalData.subtotal = b
            }
        } ,[arancel, usd, tax, dolar, seguro])

        /* TOTAL */

        const [total, setTotal] = useState(0)

        useEffect(()=> {
            const a  = subtotal+((subtotal/1000)*8)
            setTotal(a)
            dataTwo.internalData.total = a
        },[subtotal])

        /**PUBLICO*/

        const [publico, setPublico] = useState(0)

        useEffect(()=> {
            const a = total+(total*0.06)
            setPublico(a)
            dataTwo.internalData.public = a
        },[total])

    /**ENVIO DE DATOS AL EXCEL */

    const a = JSON.stringify(dataTwo)
    const newData = JSON.parse(a)

    const [ctn, setCtn] = useState(newData)
    const [verify, setVerify] = useState(false)
    
    const sendAllData = ()=> { 
            event.preventDefault()
            setCtn(newData)
            setVerify(true)
        }

    /**ENVIO DE DATOS PUBLIC */

    useEffect(()=> { 
        // Config variables
        if (verify) { 
    const SPREADSHEET_ID = "1I5HVqGpENeE5i-9CrtXlLjBe1IXQFPSXGfyj4G9tgCw";
    const SHEET_ID = "2135530268";
    const CLIENT_EMAIL = dataThree.client_email;
    const PRIVATE_KEY = dataThree.private_key;

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {
    try {
        await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);


    } catch (e) {
        console.error('Error: ', e);
    }
    };

    const newRow = { TipoProducto: ctn.publicData.typeProduct , NombreProducto: ctn.publicData.nameProduct, Fecha: ctn.publicData.date, PrecioProducto: ctn.internalData.public};

    appendSpreadsheet(newRow);
    }

    },[ctn])
    
    /**ENVIO DE DATOS INTERNAL */

    useEffect(()=> { 
    // Config variables

    if (verify) { 

    const SPREADSHEET_ID = "13GhdozW00t5IQJbkMS-U_2BSObF3Afn8jxqlpbOkV8M";
    const SHEET_ID = "1352615439";
    const CLIENT_EMAIL = dataThree.client_email;
    const PRIVATE_KEY = dataThree.private_key;

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {

    try {
        await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);


    } catch (e) {
        console.error('Error: ', e);
    }
    };

    const newRow = { TipoProducto: ctn.internalData.typeProduct, NombreProducto: ctn.internalData.nameProduct, Fecha: ctn.internalData.date, Tienda: ctn.internalData.Shop, Peso:ctn.internalData.weight, ValorUSD: ctn.internalData.valueUSD, Tarifa: ctn.internalData.tarifa, Arancel: ctn.internalData.arancel, Subtotal: ctn.internalData.subtotal, Publico:ctn.internalData.public,  Total: ctn.internalData.total, Link: ctn.internalData.link};

    appendSpreadsheet(newRow);
    }

    },[ctn])

    /**ACTIVAR ANIMACION */

    const activeAnimation = ()=> {
        if (activeBTN) {
        let tl1 = gsap.timeline({ 
            repeat: 0,
        });
        let tl2 = gsap.timeline({ 
            repeat: 0,
        });
        tl1.to(("#divBtn"), { 
            duration: 0.25,
            backgroundColor: "#ec6e73",
            border: "none"
            
        })
        tl2.to(("#btnCalculate"), { 
            duration: 0.25 ,
            backgroundColor: "#ec6e73",
            border: "none",
            color: "#fff"
        })
    }
    }
    const AnimationOff = () => { 
        if (activeBTN) {
        let tl1 = gsap.timeline({ 
            repeat: 0,
        });
        let tl2 = gsap.timeline({ 
            repeat: 0,
        });
        tl1.to(("#divBtn"), { 
            duration: 0.5,
            backgroundColor: "#46eab300",
            border: "2px solid #46eab3",
            color: "black"
        })
        tl2.to(("#btnCalculate"), { 
            duration: 0.5 ,
            backgroundColor: "#46eab3",
            color: "black",
            border: "none"
        })
        }   
    }


    /**AGREGAR PUNTOS  */

    const dolarPointTwo = parseFloat(dolar.toLocaleString('de-DE'))

    /**CAMBIO DIV TAX */

    useEffect(()=> {
        const a = tax
        const b = a.toFixed(0)
        const c = a.toLocaleString('de-DE')
        document.getElementById("tax").innerHTML = "$ "+c
    },[tax])
    

    /**ACTIVAR BTN */

    const [activeBTN, setActiveBTN] = useState(false)
    const [contadorBtn, setContadorBtn] = useState(0)

    useEffect(()=> {
        if (usd > 0 && weight > 0 ) {
            setActiveBTN(true)
            setContadorBtn(contadorBtn + 1)
            
        } else {
            setActiveBTN(false) 
            setContadorBtn(contadorBtn + 1)

        }
    },[usd, weight])

    useEffect(()=> {
        if (activeBTN === false) {
            let tl2 = gsap.timeline({ 
                repeat: 0,
            });
            tl2.to(("#btnCalculate"), { 
                duration: 0.5 ,
                backgroundColor: "#46eab356",
                color: "black",
                border: "none"
            })
        }
        else { 
            if (activeBTN) {
                let tl2 = gsap.timeline({ 
                    repeat: 0,
                });
                tl2.to(("#btnCalculate"), { 
                    duration: 0.5 ,
                    backgroundColor: "#46eab3",
                    color: "black",
                    border: "none"
                })
                }   
        }
        },[contadorBtn])

    
    /**MODALES */

    const [open, HandleOPen, CloseModalGood] = useModalGoodHome()
    const [openTwo, HandleOPenTwo, CloseModalGoodTwo] = useModalSend()

    const openModalTwoSend = () => {
        if (usd > 0 && weight > 0 ) {
            HandleOPenTwo()
        }
    }
            



  return (
    <main className={styles.mainFunctionCalculator}>
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
                <p className={`${Vigaa.className}`}>{data.textOne}</p>
                <div className={styles.ctnTextTwo}>
                    <p className={`${Vigaa.className}`}>{data.textTwo} <span className={`${Vigaa.className} ${styles.textColor}`}>{data.textThree}</span> {data.textFour} </p>
                </div>
            </div>
        </section>
        <section className={styles.changeDivisa}>
            <div className={styles.ctnChangeDivisa}>
                <Divisas usa={"$ "+1 +" USD"} cop={"$ "+ (dolarPointTwo) + " COP"}/>
            </div>
        </section>
        <section className={styles.formCalculate}>
            <div className={styles.ctnFormCalculate}>
                <div className={styles.iconSum}>
                    <h2 className={`${Timman.className}`}>+</h2>
                </div>
                <div className={styles.ctnInputs}>
                    <div className={styles.ctnIputTwo}>
                        <div className={styles.value}>
                            <p className={`${styles.titleInput} ${Vigaa.className}`}>VALOR</p>
                            <input className={`${Vigaa.className} ${styles.inputBorderRed}`} type="number" placeholder='¿cuánto cuesta?' onChange={()=>{
                                CaptureValue()
                            }}/>
                            <p className={`${styles.valueUSD} ${Vigaa.className}`}>USD</p>
                            <div className={styles.iconAsk}>
                                <HelpOutlineIcon/>
                            </div>
                        </div>
                        <div className={styles.tax} id="inputTax">
                            <p className={`${styles.titleInput2} ${Vigaa.className}`}>TAX</p>
                            <div className={`${Vigaa.className } ${styles.otherInput}`}  type="text" id="tax"> -</div>
                            <p className={`${styles.valueUSD} ${Vigaa.className}`} id="taxUSD">USD</p>
                            <p className={`${styles.valueCOP} ${Vigaa.className}`} id="taxCOP">COP</p>
                            <div className={styles.iconAsk}>
                                <HelpOutlineIcon/>
                            </div>
                        </div>
                        <div className={styles.peso} id = "inputPeso">
                            <p className={`${styles.titleInput} ${Vigaa.className}`}>PESO</p>
                            <input className={`${styles.inputWeight} ${Vigaa.className }`} type="text" placeholder='¿cuánto pesa?' id= "weight" onChange={()=>{ 
                                CaptureWeight()
                            }}/>
                            <p className={`${styles.valueUSD} ${Vigaa.className}`}>Lbs</p>
                            <div className={styles.iconAsk}>
                                <HelpOutlineIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <ModalBase 
                textOne={data.textModalOne}
                textTwo={data.textModalTwo}
                textBtnOne={data.textModalBtnOne}
                textBtnTwo={data.textModalBtnTwo}
                openModal={open}
                CloseModalTwo={CloseModalGood}
                btn={false}
            />
        </section>
        <section className={styles.sure}>
            <div className={styles.ctnSure}>
                <input type="checkbox" id= "activar" className={`${styles.checkbox} ${Vigaa.className }`} onChange={CheckBox}/>
                <div className={styles.ctnTextSure}>
                    <p className={`${styles.texboxONe} ${Vigaa.className}`} >{data.textFive}</p>
                    <div className={styles.ctnHere}>
                        <p className={`${styles.texboxONe} ${Vigaa.className}`} >{data.textSix} <span className={`${styles.texboxONeHere} ${Vigaa.className}`} >{data.textHere}</span></p>
                    </div>
                </div>
            </div>
            <div className={styles.ctnLine}></div>  
        </section>
        <section className={styles.ctnBtnCalculate}>
            <div className={styles.ctnButtonCalculate} onMouseMove={activeAnimation} id="divBtn" onMouseLeave={AnimationOff} onClick={openModalTwoSend}>
                <button className={`${Vigaa.className} ${ activeBTN ? styles.btnGreen: styles.btnGreenTwo}`} id="btnCalculate" onMouseMove={activeAnimation}> 
                    <p className={styles.textCalculateBtn}>CALCULAR</p>
                </button>
            </div>
        </section>
        <section>
            <ModalBase 
                textTwo={data.textModal2_Two}
                textBtnOne={data.textModal2_BtnOne}
                textBtnTwo={data.textModal2_BtnTwo}
                openModal={openTwo}
                CloseModalTwo={CloseModalGoodTwo}
                btn={true}
                sendJSON={sendAllData}
            />
        </section>
        <div className={styles.ctnFoot}>   
            <section className={styles.pagination}>
                <div className={styles.ctnPagination}>
                    <Pagination number={3} text={"Proceso de tu cotizacion"}/>
                </div>
            </section>
            <section className={styles.btnBack}>
                <Link href={"./windowWhereBuy"} className={`${styles.btnBackNext}`}>
                    <TwoBtnGreen text={data.textBtnBack} ids={"two"}/>
                </Link>
            </section>
            <section className={styles.arrowBack}> 
                <Link href={"./WindowWhatBrig"} className={styles.linkNext2}>
                    <ArrowBackIcon className={styles.arrow}/>
                    <p className={Vigaa.className}>Back</p>
                </Link>
            </section>
        </div>

    </main>
  )
}

export default FunctionCalculator