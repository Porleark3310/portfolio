import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { Fade } from "react-awesome-reveal";

const Nav = styled.nav`
    display: flex;
    position: sticky;
    justify-content: center;
    align-items: center;
    background-color: #190141;
    color: white;
    font-size: 1rem;
    top: 0;
    height: 80px;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1600px;
`;

const NavLogo = styled(LinkR)`
    display:flex;
    color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    margin-left: 24px;
    cursor: pointer;
    padding: 0rem 1rem;
    letter-spacing: .1rem;
    font-size: 1.5rem;
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 1rem;
    @media screen and (max-width: 768px){
        display: none;
    }
`;
const NavItem = styled.li`
    padding: .8rem;
    height: 80px;
`;
const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 0rem 1rem;
    height: 100%;
    cursor: pointer;
    transition: .2s;
    font-weight: bold;
    &.active{
        color: orange;
    }
`;

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
    <>

        <Nav>
            <NavContainer>
                <NavLogo to="/" smooth={true} onClick = {toggleHome}>Porleark Tuy</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <Fade cascade direction="up" duration={300} triggerOnce>
                            <NavItem>
                                <NavLinks 
                                    to='home'
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                >
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='about'
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                >
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='services'
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                >
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='projects'
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                >
                                    Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='contact'
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                >
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </Fade>
                    </NavMenu>
            </NavContainer>
        </Nav>
    </>
    )
}

export default Navbar
