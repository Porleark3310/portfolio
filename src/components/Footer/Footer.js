import React from 'react'
import styled from 'styled-components';
import { FaLinkedinIn, FaYoutube, FaDribbble } from 'react-icons/fa';

const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    min-height: 15vh;
    background-color: darkblue;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    height: 100%;
`;

const Text = styled.p`
    font-size: 1rem;
    width: 100%;
    margin: .5rem 0rem;
    color: ${props=>props.textColor ? props.textColor : 'lightgray'};
    text-shadow: 0 5px 8px rgb(0,0,0,0.5);
`;
const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Text textColor={'white'}>Created with React.js</Text>
                <Text>&#169; Copyright. Porleark Tuy, Portfolio</Text>
            </Container>
        </FooterContainer>
    )
}

export default Footer
