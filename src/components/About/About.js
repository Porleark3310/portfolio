import React from 'react'
import styled from "styled-components";
import background from '../../images/shapesbg.svg'
import goal from '../../images/Goal.svg';
import goalslim from '../../images/goalslim.svg';
import { Fade } from "react-awesome-reveal";

const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: #f5f9ff;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1200px;
`;

const Right = styled.div`
    flex: 1 400px;
`;

const Left = styled.div`
    flex: 2 600px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: ${props => props.setPadding ? props.setPadding : '1rem'};
`;

const SectionWrapper = styled.div`
    width: 100%;
`;

const SectionHeader = styled.h1`
    display: flex;
    flex-direction: column; 
    font-size: 2.8rem;
    color: #1fef9f;
    z-index: 2;
    padding: 1rem 0rem;
    color: #282849;
    &:after{
        display: block;
        content: '';
        width: 60px;
        height: 10px;
        background-color: #282849;
    }
`;

const Text = styled.p`
    display: flex;
    margin: 0 auto;
    width: ${props=>props.textWidth ? props.textWidth : '100%'};
    font-size: ${props=>props.setFontSize ? props.setFontSize : '1.2rem'};
    font-weight: ${props=>props.setWeight ? props.setWeight : ''};
    margin-top: ${props=>props.setMarginTop ? props.setMarginTop : ''};
    color: #1c1c31;
    @media screen and (max-width: 768px){
        font-size: 1.2rem;
        padding: 2rem 0rem;
        width: 100%;
    }
`;

const AbsoluteText = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;


const Image = styled.img`
    display: flex;
    position: relative;
    height: 600px;
`;

const About = () => {
    return (
        <Container id="about">
            <Wrapper>
                <Left>
                    <Content setPadding = "4rem 2rem">
                        <SectionWrapper>
                            <Fade triggerOnce = {true} direction="down">
                                <SectionHeader>
                                    01 - About
                                </SectionHeader>
                            </Fade>
                        </SectionWrapper>
                        <Fade triggerOnce = {true} direction="down">
                            <Text>
                                I am on a mission to combine my Computer Science degree alongside my love of art and design.
                                Currently, I am interested in furthering my skills as a Developer and Web Designer to create
                                appealing, yet practical, applications with the goal of becoming a Full-stack Developer.
                            </Text>
                        </Fade>
                    </Content>
                </Left>
                <Right>
                    <Fade direction="up">
                        <Content>
                            <Image src= {goalslim}>
                            </Image>
                        </Content>
                    </Fade>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default About
