import React from 'react'
import styled from "styled-components";
import crypto from '../../../images/crypto.PNG'
import netflix from '../../../images/netflix.png'  
import hush from '../../../images/hush.png'  
import kb from '../../../images/kb.PNG'  
import blogImage from '../../../images/MERN.svg'  
import { Fade } from "react-awesome-reveal";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    height: 100%;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    height: 500px;
    background-color: ${props => props.setBgColor ? props.setBgColor : ''};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: .2s;

    @media screen and (max-width: 768px){
        width: 300px;
        padding: .4rem;
    }
`;

const Thumbnail = styled.div`
    width: 100px;
    height: 100px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 1.6rem;
`;

const Desc = styled.p`
    font-size: 1.2rem;
    padding: .6rem;
`;

const Button = styled.button`
    font-size: 24px;
    width: 150px;
    height: 50px;
    border-radius: 4px;
    background-color: ${props => props.setBgColor ? props.setBgColor : 'orange'};
    border: 1px solid  ${props => props.setBgColor ? props.setBgColor : 'orange'};
    color: white;
    cursor: pointer;
    margin-right: 1rem;
    transition: .2s;
    &:hover{
        color: ${props => props.setBgColor ? props.setBgColor : 'orange'};
        background-color: white;
        border: 1px solid ${props => props.setBgColor ? props.setBgColor : 'orange'};
    }

    @media screen and (max-width: 768px){
        font-size: 16px;
        flex-direction: column;
        width: 125px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProjectCard = () => {
    return (
        <Container>
            <Wrapper>
                <Fade cascade direction="left" duration={500} triggerOnce>
                    <Card>
                        <Thumbnail>
                            <Image src={crypto}/>
                        </Thumbnail>
                        <Title>Crypto Tracker</Title>
                        <Desc> 
                            A basic crypto currency tracker made in ReactJS and Coingecko to view current crypto prices.
                        </Desc>
                        <ButtonWrapper>
                            <a href="https://github.com/Porleark3310/crypto-tracker" target="_blank">
                                <Button setBgColor = "#00995e">Github</Button>
                            </a>
                            <a href="https://react-crypto-tracker-pt.netlify.app" target="_blank">
                                <Button>Live</Button>
                            </a>
                        </ButtonWrapper>
                    </Card>
                    <Card>
                        <Thumbnail>
                            <Image src={netflix}/>
                        </Thumbnail>
                        <Title>Netflix Clone</Title>
                        <Desc> 
                            A clone of Netflix's dash made using ReactJS. You may hover over shows or click on them watch short trailers.
                        </Desc>
                        <ButtonWrapper>
                            <a href="https://github.com/Porleark3310/netflix-homepage-clone" target="_blank">
                                <Button setBgColor = "#00995e">Github</Button>
                            </a>
                            <a href="https://netflixclone-pt.netlify.app" target="_blank">
                                <Button>Live</Button>
                            </a>
                        </ButtonWrapper>
                    </Card>
                    <Card>
                        <Thumbnail>
                            <Image src={blogImage}/>
                        </Thumbnail>
                        <Title>MERN Blog</Title>
                        <Desc> 
                            A basic blog made using the MERN stack. Can handle CRUD operations, user login and registration.
                        </Desc>
                        <ButtonWrapper>
                            <a href="https://github.com/Porleark3310/mernblog" target="_blank">
                                <Button setBgColor = "#00995e">Github</Button>
                            </a>
                            <a href="https://mernblogpt.herokuapp.com" target="_blank">
                                <Button>Live</Button>
                            </a>
                        </ButtonWrapper>
                    </Card>
                    <Card setBgColor="#e5f4ff">
                        <Thumbnail>
                            <Image src={kb}/>
                        </Thumbnail>
                        <Title>Ecommerce Design</Title>
                        <Desc> 
                            Website design of a fake mechanical keyboard vendor. Website made with AdobeXD. Contains general layout of main page, catalouge and shopping cart.
                        </Desc>
                        <ButtonWrapper>
                            <Button setBgColor = "#0053EF">Behance</Button> 
                        </ButtonWrapper>
                    </Card>
                    <Card setBgColor="#e5f4ff">
                        <Thumbnail>
                            <Image src={hush}/>
                        </Thumbnail>
                        <Title>VPN Website Design</Title>
                        <Desc> 
                        Website design of a fake VPN product. Made using AdobeXD with small amount of prototyping effect and mobile layout.
                        </Desc>
                        <ButtonWrapper>
                            <Button setBgColor = "#0053EF">Behance</Button>
                        </ButtonWrapper>
                    </Card>
                </Fade>
            </Wrapper>
        </Container>
    )
}

export default ProjectCard
