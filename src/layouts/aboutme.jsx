import { Fade, Zoom } from 'react-awesome-reveal';
import YaImage from '../assets/images/Ya-IMG.jpg';
import PopUp from '../components/popup';
function AboutMe(){
    return(
        <section className="dark:text-white text-gray-600 dark:bg-slate-900 bg-blue-50 transition-all">
                <div  className="md:flex">
                    <div className="md:w-5/12 w-full flex justify-center md:mt-40  -translate-y-28 md:ml-0">
                        <Zoom>
                            <img src={YaImage} className="md:w-80 w-11/12 md:h-[27rem] h-[30rem] shadow-sm hover:opacity-80 cursor-pointer transition-transform shadow-blue-300 border border-y-3 md:ml-1 ml-6 border-x-2 border-blue-400 rounded-lg" alt="MyProfile"/>
                        </Zoom>
                    </div>
                    <div className='md:w-7/12 w-11/12 md:mt-12'>
                        <Fade duration={2000}>
                            <h3 className='font-medium text-lg lg:ml-0 ml-8'>Who Am I?</h3>
                            <h1 className='font-bold text-[40px] lg:ml-0 ml-8 text-blue-400'>About Me <span className='text-3xl duration-1000 delay-100 animate-ping'>.</span></h1> 
                            
                            <p className='mt-5 text-wrap lg:ml-0 ml-8 pr-3'>
                                My name is Lay Satya, I'm a student at Cambodia Academy Of Digital Technology (CADT) major Computer Science. I'm a student who passionated with a deep love for web development. 
                                Exploring the intricacies of code and design and new technologies, I immerse myself in crafting digital experiences that 
                                blend functionality with creativity.
                            </p>
                            <PopUp />
                        </Fade>
                    </div>
                </div> 
                <br></br>
                <br></br>
        </section>
    )
}
export default AboutMe;