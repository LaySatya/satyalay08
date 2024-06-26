import { Bounce, Fade } from "react-awesome-reveal";
import SatyaLogo from '../assets/images/satya-star.png';
function Footer(){
    const options = [
        {
            icon: "home-outline",
            text: "Home",
            location: '#home'
        },
        {
            icon: "person-outline",
            text: "About",
            location: '#aboutMe'
        },
        {
            icon: "code-outline",
            text: "Projects",
            location: '#projects'
        },
        {
            icon: "football-outline",
            text: "Sports",
            location: '#football'
        },
       {
            icon: "chatbox-outline",
            text: "Contact",
            location: '#contactMe'
        }, 
    ];
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
    return(
        <section className="dark:bg-slate-900 bg-blue-50 dark:text-white mb-16 overflow-hidden">
            <div className="w-full">
                    <div className="">
                        <Bounce >
                            <img src={SatyaLogo} className='mx-auto h-28 md:w-72 w-96' alt='Logo'/>
                        </Bounce>
                    </div>
                <div className="flex justify-center m-5">
                    <ul className="md:flex">
                        {
                            options.map((opt , i) => (
                                <a key={i} href={opt.location} className="m-5 text-[17px] hover:text-blue-400 scale-105 transition-all">
                                    <Fade right>
                                        <li>
                                            {opt.text}
                                        </li>
                                    </Fade>
                                </a>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex justify-center m-5">
                    <ul className="flex">
                        {
                            socials.map((s , i) => (
                                <a key={i} href={s.location} target="__blank" className="m-5 text-[17px] hover:text-blue-400 scale-105 transition-all">
                                    <i className={`${s.icon} text-xl`}></i>
                                </a>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                   <Fade>
                    <h1 className="text-md opacity-90 text-center">&copy; 2024 Satya Lay, All rights reserved.</h1>
                   </Fade>
                    <br></br>
                    <br></br>
                </div>
            </div>
                <br></br>
                <br></br>
                <br></br>
        </section>
    );
}
export default Footer;