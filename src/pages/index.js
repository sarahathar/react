import React, {useState} from 'react'
import Navbar from '../componenets/Navbar';
import Sidebar from '../componenets/Sidebar';
import Projects from '../componenets/Projects';
import Skills from '../componenets/Skills';
import About from '../componenets/About';
import Contact from '../componenets/Contact';
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
        <HomeSection/>
        <About/>
         <Skills/>
        <Projects/>
        <Contact/>
        </>
    )
}

export default Home;
