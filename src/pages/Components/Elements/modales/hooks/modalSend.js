import React, { useState } from 'react'

const useModalSend = () => {
    
    const [open, setOpen] = useState(false)

    const HandleOpen = () => {
        setOpen(true)
    }

    const HandleClose = () => {
        setOpen(false)
    }

    return [open, HandleOpen, HandleClose]        

}

export default useModalSend