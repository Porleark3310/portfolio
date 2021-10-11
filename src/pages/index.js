import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import LandingContainer from '../components/Landing/Landing';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <LandingContainer/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home
