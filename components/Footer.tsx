import React from 'react'
import {FaWhatsapp,FaGithub,FaLinkedin} from 'react-icons/fa'
import styles from "./Footer.module.css"
function Footer({dark}) {
  return (
    <footer className={`py-6 ${styles.footer}`}>

        <div className={`${styles.footer_wrapper} sm:flex flex-col`}>
            <div className="footer_copyright">
                <p className={`${dark?'text-white':'text-black'}`}>Made by <span>Sumit Kumar</span>- Copyright 2022</p>
            </div>

            <ul className={`footer_links flex items-center gap-6 ${dark?'text-white':'text-gray-400'} sm:mt-0 mt-5`}>
                <li><a href="https://api.whatsapp.com/send?text=Hi&phone=7406644532" target="_blank" rel='noreferrer'><FaWhatsapp/></a></li>
                <li><a href="https://linkedin.com/in/sumitbighaniya" target="_blank" rel='noreferrer'><FaLinkedin/></a></li>
                <li><a href="https://github.com/ammyy9908" target="_blank" rel='noreferrer'><FaGithub/></a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer