import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {Nav,
        NavbarContainer,
        Navlogo,
        NavMenu,
        MobileIcon,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink} from './NavbarElements';

    import myPDF from "../../pdf/resume.pdf";

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)  
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav ={scrollNav}>
                <NavbarContainer>
                    <Navlogo to= '/' onClick={toggleHome}>Sarah's Server</Navlogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>

                            <NavItem>
                               <NavLinks to="about"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80}
                               >About</NavLinks>
                            </NavItem>

                            <NavItem>
                               <NavLinks to="skills"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80}
                               >Skills</NavLinks>
                            </NavItem>


                         
                            <NavItem>
                               <NavLinks to="projects"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80}
                               >Projects</NavLinks>
                            </NavItem>

                            
                            <NavItem>
                               <NavLinks to="contact"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80}
                               >Contact</NavLinks>
                            </NavItem>

{/* 
                            <NavItem> 
                               <NavLinks 
                               smooth={true} duration={500} spy={true} exact='true' offset={-80}
                               >Resume</NavLinks>
                            </NavItem>  */}
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink href={myPDF} download="Sarah Athar Resume.pdf" target="_blank">Resume</NavBtnLink>
                        </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar