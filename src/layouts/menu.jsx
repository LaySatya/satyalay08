import React, { useState } from 'react';
function Menu({ scrolled }){
    const [theme , setTheme] = useState("home");
    function handleTheme(text){
        setTheme(text);
    }
    const options = [
        {
            icon: "home-outline",
            text: "home",
            location: '#home',
            page: 'home'
        },
        {
            icon: "person-outline",
            text: "person",
            location: '#aboutMe',
            page: 'home'
        },
        {
            icon: "code-outline",
            text: "code",
            location: '#projects',
            page: 'home'
        },
        {
            icon: "football-outline",
            text: "football",
            location: '#football',
            page: 'football'
        },
       {
            icon: "chatbox-outline",
            text: "chatbox",
            location: '#contactMe',
            page: 'contactMe'
        }, 
    ]
    return(
            <div className="fixed bottom-0 w-full z-50 dark:bg-slate-900 bg-blue-50">
                <div className="bg-violet-50 transition-all mx-auto dark:bg-gray-800 shadow-sm border-spacing-3 dark:text-white rounded-2xl border dark:border-spacing-10 border-blue-500 dark:border-white xl:w-4/12 md:w-7/12 w-full">
                        <ul className="flex justify-center">
                            {
                                options.map((opt , i) =>(
                                    <a href={`${opt.location}`} key={i} onClick={() => handleTheme(opt.text)}>
                                    <li className={`m-2 transition-all duration-500 cursor-pointer rounded-full p-5 flex justify-center items-center ${theme === opt.text && "bg-sky-400 animate-pulse text-white"}`}>
                                        <ion-icon name={opt.icon}></ion-icon>
                                    </li>
                                </a>
                                ))
                            }
                            
                        </ul>
                </div>  
            </div>
    );
}
export default Menu;