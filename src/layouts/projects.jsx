import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Dashboard from '../assets/images/dashboard-project.png';
import Ecommerce from '../assets/images/e-commerce.png';
import EasyShopUI from '../assets/images/easy_shop.png';
import FA from '../assets/images/FA-project.png';
import Fmansgram from '../assets/images/fmansgram-project.png';
import FoodApp from '../assets/images/food-app-project.png';
import FoodPanda from '../assets/images/foodpanda-project.png';
import FootballAdmin from '../assets/images/FootballAdmin-project.png';
import OnlineLessons from '../assets/images/online-lessons.png';
import React_App from '../assets/images/React-App.png';
import SalakumpiQuestionsAnswer from '../assets/images/salakumpi-questions.png';
import ToDoList from '../assets/images/todolist.png';
function Projects(){
    // diplay and search the projects
    const projects = [
        {
            image: Ecommerce,
            url: 'https://github.com/LaySatya/PHP_CADT_Project/tree/master/Admin',
            title: "E-commerce website",
            type: 'Web Development',
            language: 'PHP,MYSQL',
            animate: 'right'
        },
        {
            image: EasyShopUI,
            url: 'https://project-front-end-one.vercel.app/',
            title: "EASY SHOP",
            type: 'Web Development',
            language: 'HTML,CSS,JAVASCRIPT',
            animate: 'left'
        },
        {   
            image: FoodPanda,
            url: 'https://foodpanda-kappa.vercel.app/',
            title: "Food Panda App",
            type: 'Web Development',
            language: 'Food Panda App',
            animate: 'left'
        },
        {   
            image: FootballAdmin,
            url: 'https://football-admin-gamma.vercel.app/',
            title: "Fooball Admin Dashboard",
            type: 'Web Development',
            language: 'Football Admin Dashboard',
            animate: 'right'
        },
        {   
            image: FA,
            url: 'https://fooball-academy.vercel.app/',
            title: "Football Academy Club Website",
            type: 'Web Development',
            language: 'Football Club Static Web',
            animate: 'left'
        },
        {   
            image: Dashboard,
            url: 'https://dashboard-satya.vercel.app/',
            title: "Dashboard",
            type: 'Web Development',
            language: 'Dashboard',
            animate: 'right'
        },
        {   
            image: Fmansgram,
            url: 'https://fmansgram.vercel.app/',
            title: "Social Media Platform",
            type: 'Web Development',
            language: 'Social Media Platform',
            animate: 'left'
        },
        {   
            image: FoodApp,
            url: 'https://food-app-eight-ruby.vercel.app/',
            title: "Templates",
            type: 'Web Development',
            language: 'Ninja Food',
            animate: 'right'
        },
        {
            image: React_App,
            url: 'https://satyalay.vercel.app/',
            title: "React App",
            type: 'Web Development',
            language: 'React App',
            animate: 'left'
        },
        {
            image: ToDoList,
            url: 'https://todolist-qu57t.kinsta.app/',
            title: "ToDoList",
            type: 'Web Development',
            language: 'LaravelXTailwind',
            animate: 'right'
        },
        {
            image: OnlineLessons,
            url: 'https://khomrean-satya-9roz7.kinsta.app/',
            title: "Online Lessons",
            type: 'Web Development',
            language: 'Laravel',
            animate: 'left'
        },
        {
            image: SalakumpiQuestionsAnswer,
            url: 'https://salakumpi.vercel.app/',
            title: "Salakumpi Question&Answer Practice",
            type: 'Web Development',
            language: 'React Js',
            animate: 'right'
        },

    ];

    const [filter , setFilter] = useState("All projects");
    function handleFilter(e){
        const search = e.target.value;
        setFilter(search);
    }

    // toggle hiding projects
    const [toggleProject , setToggleProject] = useState(true);
    const [text , setText] = useState("Hide projects");
    function handleToggleProjects(){
        setToggleProject(!toggleProject);
        setText(text === "Hide projects" ? "Show projects" : "Hide projects");
    }
    return(
        <section className="dark:text-white text-gray-600 dark:bg-slate-900 bg-blue-50 transition-all overflow-hidden">
            <div className="w-full">
               <Fade duration={1500}>
                    <div className="">
                        <h3 className='font-medium text-lg text-center'>What I Did?</h3>
                        <h1 className='font-bold text-[40px] text-blue-400 text-center'>Projects <span className='text-3xl duration-1000 delay-100 animate-ping'>.</span></h1>
                    </div>
               </Fade>
                <div className='w-11/12 mx-auto'> 
                   <div className='md:flex justify-between mt-20'>
                        <div className='md:w-6/12'>
                            <form className="max-w-md">
                                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select project you want</label>
                                <select onChange={(e)=>handleFilter(e)} id="countries" className="cursor-pointer bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>All projects</option>
                                    {
                                        projects.map((p, i) =>(
                                            <option value={p.title}>{p.title}</option>
                                        ))
                                    }
                                </select>
                            </form>
                        </div>
                       <div className='mt-7'>
                            <button onClick={()=> handleToggleProjects()} type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                {text}
                            </button>
                       </div>
                   </div>
                </div>
                <div className='w-11/12 mx-auto mt-20'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                      {
                        projects.filter((project, i) => {
                            if(filter === "All projects"){
                                return project;
                            }
                            else if(project.title === filter){
                                return project;
                            }
                        }).map((p , i) => (
                                toggleProject ? ( 
                                    <a href={p.url} target='__blank' key={i}>
                                        <Fade direction={p.animate} duration={1500}>
                                            <div className="rounded-xl border border-blue-400 h-56 cursor-pointer group overflow-hidden">
                                                <img src={p.image} className='rounded-lg object-fill h-[98%] w-[99%] m-[2px] hover:scale-125 duration-150 transition-all hover:opacity-80' alt="Projects"/>
                                                <div className='relative left-20 group-hover:bottom-24 transition-all duration-500 z-10 group-hover:animate-bounce'>
                                                    <h3 className="text-blue-600 text-3xl font-bold">{p.type}</h3>
                                                    <p className='text-2xl text-slate-900 font-medium'>{p.language}</p>
                                                </div>
                                            </div>
                                        </Fade>
                                    </a>
                                ) : (
                                    <a href={p.url} key={i}>
                                        <Fade>
                                            <div className="hidden rounded-xl border border-blue-400 h-56 cursor-pointer group overflow-hidden">
                                                <img src={p.image} className='rounded-lg object-fill h-[98%] w-[99%] m-[2px] hover:scale-125 duration-150 transition-all hover:opacity-80' alt="Projects"/>
                                                <div className='relative left-20 group-hover:bottom-24 transition-all duration-500 z-10 group-hover:animate-bounce'>
                                                    <h3 className="text-blue-600 text-3xl font-bold">{p.type}</h3>
                                                    <p className='text-2xl text-slate-900 font-medium'>{p.language}</p>
                                                </div>
                                            </div>
                                        </Fade>
                                    </a>
                                )
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
    );
}
export default Projects;