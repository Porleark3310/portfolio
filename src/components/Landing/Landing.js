import React from 'react'
import chicago2 from '../../images/chicagonightedit.png';
import { FaLinkedinIn, FaYoutube, FaDribbble } from 'react-icons/fa';
import styled, { keyframes } from "styled-components";
import { Fade,Slide } from "react-awesome-reveal";
import {Link as LinkScroll} from 'react-scroll';

const customAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100%{
        opacity: 100;
    }
`;

const slideIn = keyframes`
    0% {
        transform:translateY(100px);
        opacity: 0;
    }
    100%{
        transform:translateY(0px);
        opacity: 100;
    }
`;


const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-image: url(${chicago2});
    background-color: #160b49;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 70%;
    height: 100%;
`;

const Header = styled.h1`
    display: flex;
    width: 100%;
    font-size: 80px;
    opacity: 0;
    margin-bottom: 4px;
    animation: ${slideIn};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    color: white;
    @media screen and (max-width: 1000px){
        font-size: 64px;
    }
`;
const TextWrapper = styled.div`
    opacity: 0;
    animation: ${slideIn};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    width: 100%;
`;
const Text = styled.p`
    margin: 0;
    width: auto;
    font-size: 48px;
    margin-top: 0;
    color: white;
    z-index: 2;

    @media screen and (max-width: 1000px){
        font-size: 32px;
    }
`;

const Greeting = styled.div`
    position: absolute;
    padding: 12px;
    left: 0;
    top: 0;
    margin-top: -75px;
    margin-left: 10px;
    font-size: 32px;
    border-radius: 8px;
    width: auto;
    background: orange;
    color: white;
    animation: ${customAnimation};
    animation-duration: 1s;
    @media screen and (max-width: 1000px){
        font-size: 24px;
    }
`;

const Arrow = styled.div`
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    left: 0;
    top: 0;
    margin-top: -15px;
    margin-left: 20px;
    border-top: 20px solid orange;
    animation: ${customAnimation};
    animation-duration:3s;
    @media screen and (max-width: 1000px){
        margin-top: -25px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    opacity: 0 ;
    animation: ${slideIn};
    animation-duration: 1s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    @media screen and (max-width: 768px){
        flex-direction: column;
        margin-top: 30px;
    }
`;

const Button = styled.button`
    margin: 0;
    font-size: 24px;
    width: 200px;
    height: 60px;
    background-color: orange;
    border: none;
    color: white;
    cursor: pointer;
    margin-right: 1rem;
    transition: .2s;
    border: 2px solid orange;
    &:hover{
        color: white;
        background-color: transparent;
        border: 2px solid orange;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        margin: 12px 0px;
    }
`;

const MobileSocials = styled.div`
    display: none;
    flex-direction: column;
    margin-bottom: 12px;
    width: 100%;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: row;
    }
`;

const MobileIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 50%;
    color: white;
    font-size: 1.6rem;
    box-shadow: 0 5px 4px rgb(0,0,0,0.15);
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 4px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        width: 45px;
        height: 45px;
        font-size: 1.4rem;
        margin: 0px 32px 0px 0px;
        &:hover{
            color:white;
            border: 2px solid #282849;
            background-color: ${props => props.bgcolor};
            box-shadow: 0 5px 4px rgb(0,0,0,0.35);
        }
    }
`;

const Socials = styled.div`
    position: absolute;
    left: 0;
    @media screen and (max-width: 768px){
        display: none;
        flex-direction: row;
        bottom: 0;
    }
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 50%;
    color: white;
    font-size: 1.6rem;
    box-shadow: 0 5px 4px rgb(0,0,0,0.15);
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 4px;
    cursor: pointer;
    margin: 1rem 2.5rem;
    &:hover{
        color:white;
        border: 2px solid #282849;
        background-color: ${props => props.bgcolor};
        box-shadow: 0 5px 4px rgb(0,0,0,0.35);
    }
`;

const Landing = () => {
    return (
        <Container id = "home">
            <Wrapper>
                <Greeting>
                    Hi, my name is,
                </Greeting>
                <Arrow/>
                <Header>
                    Porleark Tuy
                </Header>
                <TextWrapper>
                    <Text>
                        I'm a Developer and Aspiring Designer
                    </Text>
                </TextWrapper>
                <ButtonWrapper>
                        <Button>Download CV</Button>
                        <Button>
                            <LinkScroll
                                to = "contact"
                                smooth={true}
                                duration={500}
                                exact={true}
                            >
                                Contact
                            </LinkScroll>
                        </Button>
                </ButtonWrapper>
                <MobileSocials>
                    <Fade cascade triggerOnce>
                        <MobileIcon bgcolor={'#0A66C2'}>
                            <FaLinkedinIn/>
                        </MobileIcon>
                        <MobileIcon  bgcolor={'#CD201F'}>
                            <FaYoutube/>
                        </MobileIcon>                
                        <MobileIcon  bgcolor={'#EA4C89'}>
                            <FaDribbble/>
                        </MobileIcon>
                    </Fade>
                </MobileSocials>
            </Wrapper>
            <Socials>
                <Fade cascade triggerOnce>
                    <Icon bgcolor={'#0A66C2'}>
                        <FaLinkedinIn/>
                    </Icon>
                    <Icon  bgcolor={'#CD201F'}>
                        <FaYoutube/>
                    </Icon>                
                    <Icon  bgcolor={'#EA4C89'}>
                        <FaDribbble/>
                    </Icon>
                </Fade>
            </Socials>
        </Container>
    )
}

export default Landing
