import Head from 'next/head'
import Image from 'next/image'
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { connect } from 'react-redux';
import Header from '../components/Header'
import {MdMailOutline} from 'react-icons/md'
import {motion} from 'framer-motion'
import styles from '../styles/Home.module.css'

function Home({dark}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <div className={`app w-full ${dark && "dark"} overflow-hidden relative`}>
        {dark && <div className="dark_theme_wave"></div>}
        {!dark && <div className="light_theme_wave"></div>}
      <div className="container">
        <div className="hero w-full xl:flex-row flex flex-col-reverse items-center gap-12 justify-between">
          <div className="hero_content">
            <h1 className={`lg:text-7xl lg:font-medium font-bold md:text-4xl sm:3xl xl:text-left text-center text-2xl ${dark ?'text-white':'text-black'} leading-6 w-auto`}>Hi, I am Sumit Kumar
A Web Developer
based in Bangalore,India.</h1>
<p className={`${dark?'text-gray-300':'text-gray-500'} mt-5 mb-5 lg:text-2xl md:text-xl text-md xl:text-left text-center`}>I help businesses and companies reach 
their goals by designing user-centric digital 
products & interactive experiences.</p>
<a href="mailto:sb78639@gmail.com" className={`py-6 px-3 bg-gray-400 ${!dark?'text-black':'text-white'} xl:w-h w-full flex items-center justify-center gap-3 mail_button rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-offset-black focus:ring-green-600 focus:ring-offset-4`}>

  <div className="btn_ball"></div>
  <span className='flex items-center gap-4 btn_content'><MdMailOutline/> sb78639@gmail.com</span>
  
  </a>
          </div>
          <motion.div initial={{ scale: 0 }}
  animate={{  scale: 1 }}
  transition={{
    type: "spring",
    damping: 20
  }}

  whileHover={{ scale: 1.2 }}
  
  className={`hero__dev ${dark?'bg-indigo-400':'bg-green-300'}`}>
            <img src="/img/memoji.png" alt="memoji" className="dev__image" />
          </motion.div>
        </div>
       
         
          <p className={`featured ${dark?'text-white':'text-black'}`}>Featured Work</p>
       


        <div className="featured__work__grid xl:grid grid-cols-2 gap-4 mt-32 mb-32">
         <div>
         <div className="featured_work_item w-full relative cursor-pointer">
         <div className={`${!dark?"light":"dark"} work_overlay text-white absolute top-0 left-0 w-full bottom-0 right-0 flex items-center justify-center backdrop-blur-md`}>
          <div className="work_project__content">
            <h1 className="text-6xl">Project 1</h1>
            <div className="work_links flex items-center gap-2 mt-5">
              <a href="#github-link" className='py-3 px-3 bg-black text-white rounded-3xl flex items-center gap-3'>Github <FaGithub/></a>
              <a href="#github-link" className='py-3 px-3 bg-indigo-300 text-white rounded-3xl flex items-center'>View Preview</a>
            </div>
          </div>
         </div>
            <img src="/img/project1.png" alt="project1" />
          </div>
          <div className="featured_work_item w-full mt-5 relative cursor-pointer">
          <div className={`${!dark?"light":"dark"} work_overlay text-white absolute top-0 left-0 w-full bottom-0 right-0 flex items-center justify-center backdrop-blur-md`}>

          <div className="work_project__content">
            <h1 className="text-6xl">Project 2</h1>
            <div className="work_links flex items-center gap-2 mt-5">
              <a href="#github-link" className='py-3 px-3 bg-black text-white rounded-3xl flex items-center gap-3'>Github <FaGithub/></a>
              <a href="#github-link" className='py-3 px-3 bg-indigo-300 text-white rounded-3xl flex items-center'>View Preview</a>
            </div>
          </div>
          </div>
            <img src="/img/project2.png" alt="project2" />
          </div>
         </div>
          <div className='xl:mt-32 mt-5'>
          <div className="featured_work_item w-full relative cursor-pointer">
          <div className={`${!dark?"light":"dark"} work_overlay text-white absolute top-0 left-0 w-full bottom-0 right-0 flex items-center justify-center backdrop-blur-md`}>

          <div className="work_project__content">
            <h1 className="text-6xl">Project 3</h1>
            <div className="work_links flex items-center gap-2 mt-5">
              <a href="#github-link" className='py-3 px-3 bg-black text-white rounded-3xl flex items-center gap-3'>Github <FaGithub/></a>
              <a href="#github-link" className='py-3 px-3 bg-indigo-300 text-white rounded-3xl flex items-center'>View Preview</a>
            </div>
          </div>
          </div>
            <img src="/img/project3.png" alt="project3" />
          </div>
          <div className="featured_work_item w-full mt-5 relative cursor-pointer">
            <div className={`${!dark?"light":"dark"} work_overlay text-white absolute top-0 left-0 w-full bottom-0 right-0 flex items-center justify-center backdrop-blur-md`}>
            <div className="work_project__content">
            <h1 className="text-6xl">Project 4</h1>
            <div className="work_links flex items-center gap-2 mt-5">
              <a href="#github-link" className='py-3 px-3 bg-black text-white rounded-3xl flex items-center gap-3'>Github <FaGithub/></a>
              <a href="#github-link" className='py-3 px-3 bg-indigo-300 text-white rounded-3xl flex items-center'>View Preview</a>
            </div>
          </div>
            </div>
            <img src="https://images.unsplash.com/photo-1632488507942-b638eecc151a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="project4" className="object-fit object-cover"/>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  dark:state.appReducer.dark
})
export default connect(mapStateToProps,null)(Home);