import React from "react";
import styles from "./Header.module.css"
import { connect } from 'react-redux';
import {MdDarkMode,MdLightMode} from "react-icons/md"
function Header({dark,setTheme}) {


  const toggleDarkMode = () => {
    
    setTheme(!dark)
  }
  return <div className={`${styles.header} ${!dark && styles.light_mode}`}>
    <div className="header_wrapper flex items-center h-full justify-between">
        <a href="#" className="w-10 h-10">
          <img src={!dark?"/img/logo_light.png":"/img/sumit.svg"} alt="brand-logo" />
          
        </a>

        <nav>
          <ul className={`flex items-center gap-5 ${!dark ? 'text-black-100':'text-white'} font-semibold text-lg`}>
            
            <li><button className={`py-3 px-3 ${!dark?'bg-gray-500 text-white':'bg-white text-black'} rounded-3xl`} onClick={toggleDarkMode}>{!dark?<MdDarkMode/>:<MdLightMode/>}</button></li>
          </ul>
        </nav>
    </div>
  </div>;
}

const mapDispatchToProps = (dispatch) => ({
  setTheme:(dark)=>dispatch({type:"SET_THEME",dark})
})

const mapStateToProps = (state) => ({
  dark:state.appReducer.dark
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);
