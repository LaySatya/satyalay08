import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ReactTyped } from "react-typed";
import bg_dark from '../assets/images/dark-bg-cool.png';
import bg_light from '../assets/images/light-bg-cool.png';
import profile from '../assets/images/satya-profile.jpg';
import SatyaLogo from '../assets/images/satya-star.png';
function Header() {
    const [mode, setMode] = useState("dark");
    const element = document.documentElement;
    const options = [
        {
            icon: "sunny",
            text: "light",
        },
        {
            icon: "moon",
            text: "dark",
        },
    ]
    function handleModeTheme(text){
        setMode(text);
    }
    useEffect(()=>{
        AOS.init();
    }, []);
    useEffect(()=>{
        switch(mode){
            case "light":
                element.classList.remove("dark");
                break;
            case "dark":
                element.classList.add("dark");
                break;
            default:
                element.classList.remove("dark");
                break;
        }
    },[mode]);

    const socials = [
        {
            icon: "ri-github-fill",
            text: "github",
            location: "https://github.com/LaySatya"
        },
        {
            icon: "ri-linkedin-box-fill",
            text: "linkedin",
            location: "https://www.linkedin.com/in/lay-satya-1631a629a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BXXFlgYgAQ22Ts8EDsEzkXQ%3D%3D"
        },
        {
            icon: "ri-instagram-line",
            text: "instagram",
            location: "https://www.instagram.com/satyalay08/"
        },
        {
            icon: "ri-facebook-circle-fill",
            text: "facebook",
            location: "https://web.facebook.com/lay.satya.35"
        },
        {
            icon: "ri-telegram-fill",
            text: "telegram",
            location: "https://t.me/Satyalay08"
        },
    ];
    return (
        <>
        <section className="h-screen" style={{backgroundImage: `url(${mode === "light" ? bg_light : bg_dark})` }}> 
            <header>
                <div className="w-full bg-transparent z-50 bg-slate-50 dark:text-white">
                    <div className="md:w-10/12 w-full flex justify-between mx-auto">
                        <div>
                            <img src={SatyaLogo} className='h-28 md:w-72 w-96' alt='Logo'/>
                        </div>
                        <div className="m-5 mr-12 flex">
                            <div className="rounded-full dark:bg-gray-700 h-12 bg-white flex justify-center items-center mt-3 p-1 translate-x-8">
                                {
                                    options.map((opt, i) => (
                                        <button onClick={()=> handleModeTheme(opt.text)} key={opt.text}
                                            className={`p-2 h-10 transition-all px-3 flex justify-center items-center text-xl rounded-full ${mode === opt.text && "text-sky-500 bg-slate-200 dark:bg-slate-100" }`}>
                                            <span>
                                                <ion-icon name={opt.icon}></ion-icon>
                                            </span>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="lg:flex w-full dark:text-white">
                <div className="md:w-6/12 w-full">
                    <div className="md:mt-28 mt-12 md:ml-20 w-full p-8">
                       <Fade direction='up'>
                            <h1 className="lg:text-[55px] text-[36px] font-medium text-white">
                                Welcome back, <br/>
                                I'm <ReactTyped className="dark:text-blue-400 text-sky-400 drop-shadow-2xl filter shadow shadow-blue-400" strings={["Web Developer"]} typeSpeed={65} loop={2} /><span className="text-blue-500"></span>
                            </h1>
                            <p className="text-lg text-white">Give all the glory to god and thanks him for everything we do and every situations.</p>
                            <div className='text-white mt-8'>
                                {
                                    socials.map((s , i) => (
                                        <a href={s.location} target='__blank' className='pr-8 hover:opacity-80 transition-all'>
                                            <i className={`${s.icon} text-3xl`}></i>
                                        </a>
                                    ))
                                }
                        </div>
                       </Fade>
                        <a href="https://t.me/Satyalay08">
                            <Fade direction='up'>
                                <button type="button" className="animate-bounce transition-all hover:bg-gradient-to-r from-green-400 to-blue-500 p-3 px-4 mt-12 rounded-lg bg-sky-400 text-white">
                                    Contact me 💌
                                </button>
                            </Fade>
                        </a>
                    </div>
                </div>
                <div className="md:w-6/12 w-11/12 flex justify-center">
                    <Fade direction='down'>
                        <div className="lg:block  hidden animate__animated animate__rubberBand sm:w-96 sm:h-96 w-80 h-80 rounded-full bg-blue-500 md:mt-20 mt-5 ml-5 border border-blue-300 border-s-8 border-y-8 border-x-8 border-spacing-8 shadow-2xl shadow-sky-400">
                            <img src={profile} className="rounded-full object-fill w-full h-full" alt="MyProfile"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
       
        </>
    );
}
export default Header;
