import Head from '../node_modules/next/head'
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { connect } from 'react-redux';
import Header from '../components/Header'
import {MdMailOutline} from 'react-icons/md'
import {motion} from 'framer-motion'
import styles from '../styles/Home.module.css'
import axios from '../node_modules/axios/index';
import useOnline from '../hooks/useOnline';
import {useEffect, useState} from 'react'
import Footer from '../components/Footer';
function Home({dark}) {
  const [dev_works,setWorks] = useState(null);
  const online = useOnline();
  console.log(online)

 useEffect(()=>{
    axios.get('https://portfoliosrever.herokuapp.com/data').then((d)=>{
      console.log(d)
      const {works}= d.data.data
      console.log(works)
      setWorks([
        ...new Map(works.map((item) => [item["name"], item])).values(),
      ])
    }).catch((e)=>{
      console.log(e)
    })
  },[])


  const getRandomColor = ()=>{
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b},.5)`
  }
  return (
    <div>
      <Head>
        <title>Sumit Kumar</title>
        <meta name="description" content="Frontend Web Develoepr based in Bangalore,India" />
        <meta name="keywords" content="HTML, CSS, JavaScript,Sumit Website,Netflix Web Clones,Frontend Web developer Bangalore,Web Clones ReactJS Developer Bangalore,India,Instagram Clone ReactJS,NextJs"/>
  <meta name="author" content="Sumit Kumar"/>
  
  <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sb78639V" data-description="Support me on Buy me a coffee!" data-message="Thanks for visiting! now you can buy me a coffee!" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      {online && <Header/>}

      {online?<div className={`app w-full ${dark && "dark"}  relative`}>
        {dark && <div className="dark_theme_wave"></div>}
        {!dark && <div className="light_theme_wave"></div>}
      <div className="container">
        <div className="hero w-full xl:flex-row flex flex-col-reverse items-center gap-12 justify-between" id="about">
          <div className="hero_content">
            <h1 className={`lg:text-7xl lg:font-medium font-bold md:text-4xl sm:3xl xl:text-left text-center text-2xl ${dark ?'text-white':'text-black'} leading-6 w-auto`}>Hi, I am Sumit Kumar
A Web  🧑🏻‍💻 Developer
based in Bangalore,India.</h1>
<p className={`${dark?'text-gray-300':'text-gray-500'} mt-5 mb-5 lg:text-2xl md:text-xl text-md xl:text-left text-center`}>I help businesses and companies reach 
their goals by designing user-centric digital 
products & interactive experiences.</p>
<a href="mailto:sb78639@gmail.com" className={`py-6 px-3 bg-gray-400 ${!dark?'text-black':'text-white'} xl:w-h w-full flex items-center justify-center gap-3 mail_button rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-offset-black focus:ring-green-600 focus:ring-offset-4`}>

  <div className="btn_ball"></div>
  <span className='flex items-center gap-4 btn_content'><MdMailOutline/> sb78639@gmail.com</span>
  
  </a>
          </div>
          {dark?<motion.div initial={{ scale: 0 }}
  animate={{  scale: 1 }}
  transition={{
    type: "spring",
    damping: 20
  }}

  whileHover={{ scale: 1.2 }}
  
  className={`hero__dev bg-indigo-400`}>
            <motion.div initial={{ scale: 0 }}
  animate={{  scale: 1 }}
  transition={{
    type: "spring",
    damping: 20
  }}><img src="/img/memoji__seondary.png" alt="memoji" className="dev__image" /></motion.div>
            <div className="dev_emoji dev_emoji2">
              <img src="/img/party.gif" alt="smile_gif" />
            </div>
            <div className="dev_emoji dev_emoji1">
              <img src="/img/smile.gif" alt="smile_gif" />
            </div>
          </motion.div>:<motion.div initial={{ scale: 0 }}
  animate={{  scale: 1 }}
  transition={{
    type: "spring",
    damping: 20
  }}

  whileHover={{ scale: 1.2 }}
  
  className={`hero__dev bg-green-300`}>
            <motion.div initial={{ scale: 0 }}
  animate={{  scale: 1 }}
  transition={{
    type: "spring",
    damping: 20
  }}><img src="/img/memoji.png" alt="memoji" className="dev__image" /></motion.div>
            <div className="dev_emoji dev_emoji2">
              <img src="/img/party.gif" alt="smile_gif" />
            </div>
            <div className="dev_emoji dev_emoji1">
              <img src="/img/smile.gif" alt="smile_gif" />
            </div>
          </motion.div>}
        </div>
       
         
          <p className={`featured ${dark?'text-white':'text-black'}`} id="work">Featured Work</p>
       


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

        


        {dev_works && <div className="explore_section">
          <h1 className={`text-center text-3xl ${dark?'text-white':'text-black'}`}>Visual Explorations</h1>
          <div className="explore_works mt-12 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 mb-12">
              {
                dev_works && dev_works.map((work,i)=>{
                  return <div className="work_item cursor-pointer hover:scale-105" key={i} 
                  >
                    <div className="work__overlay py-12 px-6" style={{
                    backgroundColor:getRandomColor()
                  }}>

                    <h1 className='text-white text-2xl'>{work.name}</h1>
                    <div className="about_work">
                    <p className='mt-6 text-white'>{work.description}</p>
                    <div className="_links flex  items-start mt-5 gap-5">
                     {work.repo &&  <a href={work.repo} className='py-3 px-6 bg-black text-white flex items-center gap-2 rounded-3xl w-half flex items-center justify-center focus:ring focus:ring-md focus:ring-indigo-200 focus:ring-offset-12'>View on <FaGithub/></a>}
                      <a href={work.url} className='py-3 px-6 bg-indigo-500 text-white flex items-center gap-2 rounded-3xl w-half flex items-center justify-center focus:ring focus:ring-xl focus:ring-gray-200 focus:ring-offset-12 shadow-xl'>Demo</a>
                    </div>
                    </div>

                    </div>
                  <img src={work.thumb} alt="" />
                </div>
                })
              }
              
          </div>
        </div>}
      </div>



      <div className="contact__section" id="contact">
        <h2 className={`${dark?'text-white':'text-black'} xl:text-4xl text-3xl`}>Contact Me.</h2>
        <p style={{
          maxWidth: '500px',
        }} className={`mx-auto mt-5 ${dark?'text-gray-300':'text-black'}`}>If you are looking to hire a frontend web developer, 
I’m currently available for freelance work</p>
<a href="mailto:sb78639@gmail.com" className={`py-6 px-3 bg-gray-400 ${!dark?'text-gray-900':'text-white'}  mx-auto mt-5 flex items-center justify-center gap-3 w-half rounded-lg hover:bg-gray-500 focus:ring-4 focus:ring-offset-black focus:ring-green-600 focus:ring-offset-4 hover:translateY-6 transform transition mail_button`}
style={{
  maxWidth: '320px',
}}
>
  <MdMailOutline/> sb78639@gmail.com
</a>



      </div>

      <Footer dark={dark}/>
      </div>:<div className='bg-red-400 text-white offline_status flex items-center flex-column justify-center' style={{
        width:'100%',
        height:'100vh',
        
      }}>
        <div className="offline_status__content text-center flex items-center flex-col justify-center">
         
          <h1 className="lg:text-6xl text-3xl mt-6">Offline</h1>
          <p className="text-xl">You are offline. Please check your internet connection and try again.</p>
          
        </div>
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  dark:state.appReducer.dark
})
export default connect(mapStateToProps,null)(Home);
