import { Fade } from "react-awesome-reveal";
function Contact() {
    const contacts = [
        {
            name: "Email",
            des: "Send me something important here.",
            icon: <i class="ri-mail-send-line px-1 text-xl"></i>,
            link: "mailto:laysatya08@gmail.com",
            data: "laysatya08@gmail.com",
            animate: "left"
        },
        {
            name: "Location",
            des: "Invite me",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>,
            link: "Phnom Penh, Cambodia",
            data: 'Phnom Penh, Cambodia',
            animate: "up"
        },
        {
            name: "Phone",
            des: "Mon-Sat from 8am to 5pm.",
            icon:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>,
            link: "tel:081480965",
            data: "081480965",
            animate: "right"
        },
    ];

    return (
        <>
            <section className="dark:bg-slate-900 bg-blue-50  dark:text-white overflow-hidden">
                <div>
                    <div className="">
                        <Fade duration={1500}>
                            <h3 className="text-lg font-medium text-center">Wanna know me?</h3>
                            <h1 className="text-[40px] text-center font-bold text-blue-400">Contact me <span className='text-3xl duration-1000 delay-500 animate-ping'>.</span></h1>
                        </Fade>
                    </div>
                    <div className="w-full overflow-hidden">
                        <div class="container px-6 py-12 mx-auto">
                            <div class="text-center">
                                <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly is always here to chat.</p>
                            </div>

                            <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                               {
                                contacts.map((contact , i) => (
                                    <Fade direction={contact.animate}>
                                        <div>
                                            <div class="flex flex-col items-center justify-center text-center">
                                                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                                   {contact.icon}
                                                </span>

                                                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">{contact.name}</h2>
                                                <p class="mt-2 text-gray-500 dark:text-gray-400">{contact.des}</p>
                                                <a href={contact.link}><p class="mt-2 text-blue-500 dark:text-blue-400">{contact.data}</p></a>
                                            </div>
                                        </div>
                                    </Fade>
                                ))
                               }
                            </div>
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
export default Contact;