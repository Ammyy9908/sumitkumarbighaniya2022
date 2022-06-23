import React from 'react'
import Link from '../node_modules/next/link'
import styles from "../styles/404.module.css"
function FourOhFour() {
  return (
    <div className={styles.four_oh_four}>

        <div className={styles.four_oh_four_content}>
            <h1 className='text-6xl font-bold'>404</h1>
            <div className="four_oh_four_face mt-32">
                <img src="/img/404_face.png" alt="404_face" />
            </div>
            <Link href="/">
            
            <a  className="back_button mt-32">
                <span className="flex items-center gap-3"><img src="/img/back_arrow.png" alt="back-arrow" /> Go Home</span>
            </a></Link>
        </div>
    </div>
  )
}

export default FourOhFour