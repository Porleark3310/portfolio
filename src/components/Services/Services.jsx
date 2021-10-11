import React from 'react'
import facebook from '../../images/facebook.svg';
import design from '../../images/designIcon.svg';
import program from '../../images/Program.svg';
import Skills from './Skills/Skills'
import styled, { keyframes } from 'styled-components';
import { Fade,Slide } from "react-awesome-reveal";

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 2rem 0rem 2rem 0rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #1574f0;
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const SectionHeader = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    font-size: 2.4rem;
    margin:0;
    color: white;
    z-index: 2;
    &:after{
        display: block;
        content: '';
        width: 150px;
        height: 8px;
        margin-top: 8px;
        background-color: white;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 2;
`;

const CardContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    max-width: 600px;
    min-height: 400px;
    margin: 4px;
    margin-top: 50px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (max-width: 768px){
        width: 330px;
        height: 400px;
    }
`;
const CardWrapper = styled.div`
    display: flex;
    padding: .5rem .5rem;
    width: 90%;
    height: 90%;
`;

const MainContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;


const Image = styled.img`
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 6px;
    padding: 8px;
`;

const Text = styled.p`
    font-size: 1.2rem;
    padding: 2rem 0rem;
    color: ${props => props.setTextColor ? props.setTextColor : '#1c1c31'};
    @media screen and (max-width: 768px){
        font-size: 1.1rem;
    }
`;
const Header = styled.h1`
    font-size: 1.6rem;
    padding: 1rem 0rem;
    margin: 0 auto;
    color: #1c1c31;
`;


const Card = () => {
    return (
        <>
            <Container id ="services" duration = {100}>
                <Wrapper>
                    <Fade>
                        <SectionWrapper>
                            <SectionHeader>02 - Services</SectionHeader>
                        </SectionWrapper>
                    </Fade>
                    <ContentWrapper>
                        <Fade direction="left" delay = {200} triggerOnce>
                            <CardContainer>
                                <CardWrapper>
                                    <MainContent>
                                        <Fade cascade delay = {200}>
                                            <Image src={design}/>
                                            <Header>
                                                Design
                                            </Header>
                                            <Text>
                                                Need me to make a graphic illustration, an SVG, pamphlet or brochure? Virtually all graphics and website designs were made by me using Adobe and Affinity Designer.
                                            </Text>
                                        </Fade>
                                    </MainContent>
                                </CardWrapper>
                            </CardContainer>
                        </Fade>
                        <Fade direction="right" delay = {200} triggerOnce>
                            <CardContainer>
                                <CardWrapper>
                                    <MainContent>
                                        <Fade cascade delay = {200}>
                                            <Image src={program}/>
                                            <Header>
                                                Program
                                            </Header>
                                            <Text>
                                                Being a CS graduate, I can turn designs into a functional Frontend prototype. If you should desire it, I can do backend too.
                                            </Text>
                                        </Fade>
                                    </MainContent>
                                </CardWrapper>
                            </CardContainer>
                        </Fade>
                    </ContentWrapper>
                </Wrapper>
            </Container>
            <Skills/>
        </>
    )
}

export default Card
