import React from 'react'
import {SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute} from './SidebarElements';

import myPDF from "../../pdf/resume.pdf";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "about" onClick = {toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to = "skills" onClick = {toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to = "projects" onClick = {toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to = "contact" onClick = {toggle}>
                        Contact
                    </SidebarLink>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href={myPDF} download="Sarah Athar Resume.pdf" target="_blank">Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
