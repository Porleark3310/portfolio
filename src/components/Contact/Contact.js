import React, { useRef, useState } from 'react';
import styled, { keyframes } from "styled-components";
import { FaLinkedinIn, FaYoutube, FaBehance } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import airplane from '../../images/airplanebg.svg'
import { Fade,Slide } from "react-awesome-reveal";

const Container = styled.div`
    display: flex;
    color: white;
    position: relative;
    flex-direction: column;
    align-items: center;
    color:black;
    width: 100%;
    min-height: 75vh;
    padding: 4rem 0rem;
    background: hsla(216, 100%, 98%, 1);
    background-image: url(${airplane});
    background-size: contain;
    background-repeat: no-repeat;
`;

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    }
`;

const Wrapper = styled.div`
    padding: 2rem;
    height: 100%;
    max-width: 1100px;
`;


const SmallWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const SectionHeader = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.8rem;
    color:#282849;
    width: 100%;
    z-index: 2;
    &:after{
        display: block;
        content: '';
        width: 100px;
        height: 12px;
        background-color: #282849;
    }

    @media screen and (max-width: 768px){
        font-size: 2.4rem;
    }
`;
const Text = styled.p`
    margin-top: 2rem;
    width: 100%;
    font-size: 1.4rem;
    @media screen and (max-width: 768px){
        font-size: 1.2rem;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    margin: 8px 0px;
    padding: 4px;
    font-size: 1rem;
    font-family: 'Gordita', sans-serif;
    box-shadow: 0 5px 4px rgb(0,0,0,0.2);
    @media screen and (max-width: 768px){
        width: 100%;
        height: 50px;
    }
`;
const TextArea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    margin-top: 8px;
    max-height: 200px;
    min-height: 200px;
    padding: 4px;
    font-size: 1rem;
    resize: none;
    font-family: 'Gordita', sans-serif;
    box-shadow: 0 5px 4px rgb(0,0,0,0.2);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: #f90;
    box-shadow: 0 5px 4px rgb(0,0,0,0.2);
    border: none;
    margin: 1rem 0rem;
    cursor: pointer;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bolder;
    transition: .1s ease-in-out;
    &:hover{
        color: white;
        box-shadow: 0 5px 4px rgb(0,0,0,0.5);
        background-color: #ff6e00;
    }
`;

const Confirmation = styled.div`
    margin-top: 16px;
    border-radius: 8px;
    padding: 1rem;
    background-color: #00d66f;
    font-weight: 500;
    box-shadow: 0 5px 4px rgb(0,0,0,0.2);
`;

const Socials = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    width: 50%;
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 2px solid #282849;
    border-radius: 50%;
    color: #282849;
    font-size: 1.6rem;
    box-shadow: 0 5px 4px rgb(0,0,0,0.15);
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 4px;
    cursor: pointer;
    margin: 0;
    margin-right: 32px;
    &:hover{
        color:white;
        border: 2px solid #282849;
        background-color: ${props => props.bgcolor};
        box-shadow: 0 5px 4px rgb(0,0,0,0.35);
    }
`;

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Portfolio_Gmail', 'portfolioEmailTemplate', form.current, 'user_VH6fNYncnhbwuBQTfVEw8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setSuccess(true);
    };
    return (
        <Container id="contact">
            <Wrapper>
                <Fade cascade triggerOnce>
                <SmallWrapper>
                    <SectionHeader>
                        04 - Contact
                    </SectionHeader>
                </SmallWrapper>
                <Text>
                    Wanna talk? Shoot me a message or check me out on one of my socials. Looking forward to working with you!
                </Text>
                </Fade>
                <Socials>
                <Fade cascade triggerOnce>
                    <a href = "https://www.linkedin.com/in/porleark-tuy" target = "_blank" style = {{ color: 'inherit', margin: '0'}}>
                        <Icon bgcolor={'#0A66C2'}>
                            <FaLinkedinIn/>
                        </Icon>
                    </a>
                    <a href = "https://www.youtube.com/channel/UC6wh-W0rZmCxV8wBk8dqVWw" target = "_blank" style = {{ color: 'inherit', margin: '0'}}>
                        <Icon  bgcolor={'#CD201F'}>
                            <FaYoutube/>
                        </Icon>                
                    </a>
                    <a href = "https://www.behance.net/porlearktuy" target = "_blank" style = {{ color: 'inherit', margin: '0'}}>
                        <Icon  bgcolor={'#004CFF'}>
                                <FaBehance/>
                        </Icon>
                    </a>
                </Fade>
                </Socials>
                <Form ref={form} onSubmit={sendEmail} >
                    <Input type="text" name="name" placeholder="Name" required/>
                    <Input type="email" name="email" placeholder="Email" required/>
                    <Input type="text" name="subject" placeholder="Subject" required/>
                    <TextArea type="message" placeholder="Message" required/>
                    <Button type="submit">
                        SEND
                    </Button>
                    {success && 
                    <Fade>
                        <Confirmation>Your email has been sent!</Confirmation>
                    </Fade>
                    }
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Contact
