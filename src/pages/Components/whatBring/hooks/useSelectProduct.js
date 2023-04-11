import React, { useEffect, useState } from 'react'
import data from '../../../userInformation.json'

const useSelectProduct = () => {
   const [product, setProduct] = useState("")

   const ChangeProduct = (value) => { 
    setProduct(value)
    data.internalData.typeProduct = value
    data.publicData.typeProduct = value
   }

   return [product, setProduct, ChangeProduct]
}

export default useSelectProduct