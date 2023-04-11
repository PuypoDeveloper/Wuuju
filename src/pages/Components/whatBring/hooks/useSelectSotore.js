import React, { useEffect, useState } from 'react'
import data from '../../../userInformation.json'

const useSelectSotore = () => {

   const [productos, setProductos] = useState("")

   const ChangeProductos = (value) => { 
    setProductos(value)
    data.internalData.Shop = value
   }

   return [productos, setProductos, ChangeProductos]
}

export default useSelectSotore