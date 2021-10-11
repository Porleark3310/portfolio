import React from 'react'
import styled from "styled-components";
import { FaPython, FaJava, FaNodeJs, FaReact, FaTools } from 'react-icons/fa';
import { DiJavascript1} from 'react-icons/di';
import { SiAffinitydesigner, SiAdobexd, SiFigma} from 'react-icons/si';
import { BiCodeBlock} from 'react-icons/bi';
import { ImStack} from 'react-icons/im';
import { Fade,Slide } from "react-awesome-reveal";

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 3rem;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 2;
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0rem 2rem;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;
    margin: 1rem;
    width: 100px;
    flex-grow: 1;
    @media screen and (max-width: 768px){
        padding: 0rem;
    }
`;

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    width: ${props=>props.textWidth ? props.textWidth : '100%'};
    font-size: ${props=>props.setFontSize ? props.setFontSize : '1.4rem'};
    font-weight: ${props=>props.setWeight ? props.setWeight : ''};
    margin-top: ${props=>props.setMarginTop ? props.setMarginTop : ''};
    color: #1c1c31;
    @media screen and (max-width: 768px){
        font-size: 1.4rem;
        padding: 2rem 0rem;
        width: 90%;
    }
`;

const Icon = styled.div`
    display: flex;
    font-size: 64px;
    align-items: center;
    justify-content: center;
    margin: .6rem 0rem;
    color: #1c1c31;
    @media screen and (max-width: 786px){
        width: 50px;
        height: 50px;
    }
`;

const SectionHeader = styled.h1`
    font-size: 2.8rem;
    &:after{
        display: block;
        content: '';
        width: 60px;
        height: 15px;
        background-color: #1c1c31;
    }
`;

const DecorLeft = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    bottom: 0;
    transform: translateY(-50%);
    width: 10%;
    height: 75%;
    background-color: transparent;
    background-image: radial-gradient(#1c1c31 5%, transparent 15%);
    background-size: 10px 10px;
    background-position: 0 0, 30px 30px;
`;
const DecorRight = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    transform: translateY(-50%);
    width: 10%;
    height: 75%;
    background-color: transparent;
    background-image: radial-gradient(#1c1c31 5%, transparent 15%);
    background-size: 10px 10px;
    background-position: 0 0, 30px 30px;
`;

const Header = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.4rem;
    padding: 1rem 0rem;
    margin: 0 auto;
    color: #1c1c31;

    &:after{
        display: block;
        content: '';
        width: 60px;
        height: 12px;
        background-color: #282849;
    }
`;

const Skills = () => {
    return (
        <Container>  
            <DecorLeft/>
            <DecorRight/> 
            <Wrapper>
                <Fade direction = "left" triggerOnce>
                    <Header>Skills</Header>
                </Fade>
                <FlexRow>
                    <Fade cascade direction="up" duration = {500} delay = {100} triggerOnce>
                        <Item>
                            <Icon>
                                <DiJavascript1/>
                            </Icon>
                            <Text textWidth={'100%'}>Javascript</Text>
                        </Item>
                        <Item>
                            <Icon>
                                <FaPython/> 
                            </Icon>
                            <Text textWidth={'100%'}>Python</Text>
                        </Item>
                        <Item>
                        <Icon>
                                <FaJava/>
                            </Icon>
                            <Text textWidth={'100%'}>Java</Text>
                        </Item>
                        <Item>
                            <Icon>
                                <FaReact/>
                            </Icon>
                            <Text textWidth={'100%'}>React</Text>
                        </Item>
                        <Item>
                            <Icon>
                                <FaNodeJs/>
                            </Icon>
                            <Text textWidth={'100%'}>Express</Text>
                        </Item>
                        <Item>
                            <Icon>
                                <FaPython/>
                            </Icon>
                            <Text textWidth={'100%'}>Javascript</Text>
                        </Item>
                        <Item>
                            <Icon>
                                <SiAdobexd/>
                            </Icon>
                            <Text textWidth={'100%'}>Adobe XD</Text>
                        </Item>
                        <Item>
                        <Icon>
                                <SiAffinitydesigner/>
                            </Icon>
                            <Text textWidth={'100%'}>Affinity Designer</Text>
                        </Item>
                    </Fade>
                </FlexRow>
            </Wrapper>
        </Container>
    )
}

export default Skills
