import React, { useEffect, useState } from 'react';
import AboutMe from './layouts/aboutme';
import Contact from './layouts/contactme';
import Football from './layouts/football';
import Footer from './layouts/footer';
import Header from './layouts/header';
import Menu from './layouts/menu';
import Projects from './layouts/projects';
 
function App() {
    // fix this soon
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentActive = '';

            sections.forEach((section) => {
                const top = section.offsetTop - 50;
                const bottom = top + section.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    currentActive = section.id;
                    // alert(currentActive);
                    // alert(activeSection); 
                }
            });
            setActiveSection(currentActive);
            // console.log(activeSection);           
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it once to initialize the active section
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>  
            <Menu active={activeSection}/>
            <section id="home">
                <Header />
            </section>
            <section id="aboutMe">
                <AboutMe />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="football">
                <Football />
            </section>
            <section id="contactMe">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </>
    );
}

export default App;
