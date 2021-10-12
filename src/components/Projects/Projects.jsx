import React from 'react'
import styled from "styled-components";
import ProjectCard from './ProjectCard/ProjectCard'
import { Fade } from "react-awesome-reveal";
const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin-top: 3rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    min-height: 50vh;
    align-items: center;
    justify-content: center;
    z-index: 2;
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
    align-items: center;
    flex-direction: column;
    font-size: 2.8rem;
    color: #282849;
    width: 100%;
    z-index: 2;
    &:after{
        display: block;
        content: '';
        width: 100px;
        height: 12px;
        margin-top: 8px;
        background-color: #282849;
    }
    @media screen and (max-width: 768px){
        font-size: 2.4rem;
    }
`;

const Text = styled.p`
    display: flex;
    margin: 0 auto;
    width: ${props=>props.textWidth ? props.textWidth : '100%'};
    font-size: ${props=>props.setFontSize ? props.setFontSize : '1.2rem'};
    font-weight: ${props=>props.setWeight ? props.setWeight : ''};
    margin-top: ${props=>props.setMarginTop ? props.setMarginTop : ''};
    color: #282849;
    padding: 1rem 0rem;
    @media screen and (max-width: 768px){
        font-size: 1.2rem;
        padding: 2rem 0rem;
        width: 100%;
    }
`;


const Projects = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Container id="projects">
            <Fade>
            <SectionWrapper>
                <SectionHeader>03 - Projects</SectionHeader>
                <Text>Here are some things I've been working on. More cool designs and applications are on the way!</Text>
            </SectionWrapper>
            </Fade>
            <Wrapper>
                <ProjectCard>
                </ProjectCard>
            </Wrapper>
        </Container>
    )
}

export default Projects
