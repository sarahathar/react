import React, {useState} from 'react'
import Navbar from '../componenets/Navbar';
import Sidebar from '../componenets/Sidebar';
import Homeection from '../componenets/HomeSection';
import HeroSection from '../componenets/HeroSection';
import InfoSection from '../componenets/InfoSection';
import Projects from '../componenets/Projects';
import Skills from '../componenets/Skills';
import Footer from '../componenets/Footer';
import Experience from '../componenets/Experience';
import About from '../componenets/About';
import Contact from '../componenets/Contact';
import {homeObjOne, homeObjTwo, homeObjThree} from '../componenets/InfoSection/Data';
import HomeSection from '../componenets/HomeSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>  setIsOpen(!isOpen);
    const [isDarkModeActive, setIsDarkModeActive] = useState(false)

    const switchModes = (mode) => {
        if (mode === "light") {
          setIsDarkModeActive(false)
        } else if (mode === "dark") {
          setIsDarkModeActive(true)
        }
      }


    return (
        <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>

        {/* <HeroSection/> */}
        <HomeSection/>
         {/* <Experience/> */}
        <About/>
         <Skills/>
        <Projects/>
        <Contact/>

        {/* <Footer/> */}
        </>
    )
}

export default Home;
