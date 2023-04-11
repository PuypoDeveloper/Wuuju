import React from 'react'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import styles from './stylesModalBase.module.css'

const CloseModal = () => {
  return (
    <div className={styles.mainIcon}>
        <div className={styles.ctnIcon}>
            <CancelRoundedIcon className={styles.IconIn}/>
        </div>
    </div>
  )
}

export default CloseModal