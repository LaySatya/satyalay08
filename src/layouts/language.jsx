import { Fade } from 'react-awesome-reveal';
import '../assets/css/scroll.css';
// import S1 from '../assets/images/s1.jpg';
// import S2 from '../assets/images/s2.jpg';
// import S3 from '../assets/images/s3.jpg';
// import S4 from '../assets/images/s4.jpg';
// import S5 from '../assets/images/s5.jpg';
// import S6 from '../assets/images/s6.jpg';
// import S7 from '../assets/images/s7.jpg';
function Football(){
    const slides = [
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            des: ''
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            des: ''
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
            des: ''
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            des: ''
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
            des: ''
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
            des: ''
        },
        {
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            des: ''
        },
    ]
    return(
        <>
           <section className="dark:bg-slate-900 bg-blue-50  dark:text-white">
                <div>
                    <Fade>
                        <h3 className="text-xl font-medium text-center">Programming Languages</h3>
                        <h1 className="text-[40px] text-center font-bold text-blue-400">Coding <span className='text-3xl duration-1000 delay-100 animate-ping'>.</span></h1>
                    </Fade>
                </div>
                <div className="w-full">
                    <div className='slider overflow-hidden h-44 mx-auto relative w-full grid place-items-center'>
                       <div className='slide-track h-[300px]'>
                        {
                                slides.map((slide , i) => (
                                    <div key={i} className='slide flex items-center w-[200px] h-[200px] p-6'>
                                        <img src={slide.img} className='hover:scale-105 transition-all  cursor-pointer w-full h-full rounded-sm' alt=""/>
                                    </div>
                                ))
                            }
                       </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
           </section>
        </>
    );

}
export default Football;