import React from 'react'
import { 
    CloseIcon, 
    SidebarContainer, 
    Icon, 
    SidebarLink, 
    SideBtnWrap,
    SidebarRoute,
    SidebarWrapper, 
    SidebarMenu } 
from './SidebarElements';
import { animateScroll as scroll } from 'react-scroll';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClickk = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                        to="home" 
                        onClick={toggle}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Home
                    </SidebarLink>
                    <SidebarLink 
                        to="about" 
                        onClick={toggle}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink 
                        to="services" 
                        onClick={toggle}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink 
                        to="projects" 
                        onClick={toggle}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Projects
                    </SidebarLink>
                    <SidebarLink 
                        to="contact" 
                        onClick={toggle}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/cv'>
                        Download CV
                    </SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
