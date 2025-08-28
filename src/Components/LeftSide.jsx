import React, { useEffect } from 'react'
import '../Components/leftSide.css'
import boyLogo from '../assets/boyLogo.png'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaIdCard } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import Aos from 'aos';
import "aos/dist/aos.css"; // Import AOS styles

const LeftSide = ({ title }) => {

    useEffect(() => {


        // Initialize AOS with custom settings
        Aos.init({
            offset: 500,
            duration: 2000,
            easing: 'ease-in-out',
            mirror: true,
            once: false,
        });
        Aos.refresh();


        const container = document.getElementById('left-scroll');
        // const container = document.querySelector('left-scroll');

        if (container) {
            // Function to check and update element visibility
            const updateElementVisibility = () => {
                const aosElements = container.querySelectorAll('[data-aos]');

                aosElements.forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();

                    // Check if element is in viewport
                    const isInViewport = (
                        rect.bottom >= containerRect.top + 20 &&
                        rect.top <= containerRect.bottom - 20
                    );

                    // Always ensure elements in initial viewport are visible
                    if (isInViewport) {
                        element.classList.add('aos-animate');
                        element.style.opacity = '1';
                    } else {
                        element.classList.remove('aos-animate');
                        element.style.opacity = '0';
                    }
                });
            };

            // Initial check - run multiple times to ensure everything loads
            const runInitialChecks = () => {
                updateElementVisibility();
                setTimeout(updateElementVisibility, 50);
                setTimeout(updateElementVisibility, 150);
                setTimeout(updateElementVisibility, 300);
            };

            // Run initial visibility check
            runInitialChecks();

            // Scroll handler
            const handleScroll = () => {
                updateElementVisibility();
            };

            // Add scroll event listener
            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <>
            <div id='left-scroll' className="left-scroll h-screen block bg-[#171b22] overflow-y-scroll">

                <div className='flex flex-col items-center pt-4 h-[311px] w-[270px]'>
                    <div className='' data-aos="zoom-in" data-aos-delay="100">
                        <img src={boyLogo} alt="" className='object-cover w-50 rounded-full' />
                    </div>
                    <h1 className='mt-3 font-semibold text-2xl' data-aos="fade-down" data-aos-delay="200">
                        Kabir Verma
                    </h1>
                    <div>
                        <h1 className='mt-2 text-gray-600 font-medium text-xl' data-aos="fade-down" data-aos-delay="300">
                            {title}
                        </h1>
                    </div>

                </div>

                <div className='navigation-menu'>
                    <hr className='text-gray-600' />
                    <a onClick={() => {
                        const rightSide = document.getElementById("right-scroll");
                        const target = document.getElementById("home");
                        if (rightSide && target) {
                            rightSide.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }
                    }} className='color h-fit flex items-center p-3 cursor-pointer'
                        data-aos="fade-right" data-aos-delay="100">
                        <FaHome size={20} />
                        <h1 className='ml-4 font-semibold'>Home</h1>
                    </a>

                    <hr className='text-gray-600' />
                    <a onClick={() => {
                        const rightSide = document.getElementById("right-scroll");
                        const target = document.getElementById("about");
                        if (rightSide && target) {
                            rightSide.scrollTo({
                                top: target.offsetTop,
                                behavior: "smooth"
                            });
                        }
                    }} className='color h-fit flex items-center p-3 cursor-pointer'
                        data-aos="fade-right" data-aos-delay="150">
                        <CgProfile size={20} />
                        <h1 className='ml-4 font-semibold'>About</h1>
                    </a>

                    <hr className='text-gray-600' />
                    <a onClick={() => {
                        const rightSide = document.getElementById("right-scroll");
                        const target = document.getElementById("education");
                        if (rightSide && target) {
                            rightSide.scrollTo({
                                top: target.offsetTop,
                                behavior: "smooth"
                            });
                        }
                    }}
                        className='color h-fit flex items-center p-3'
                        data-aos="fade-right" data-aos-delay="200"
                    >
                        <FaIdCard size={20} />
                        <h1 className='ml-4 font-semibold'>Resume</h1>
                    </a>


                </div>

                <div className='p-6 mt-4 flex justify-center items-center' >
                    <a
                        href="https://drive.google.com/file/d/1S5j_XfTw7T-_utr9ld6nz57mINmb9vAR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-1 flex items-center justify-between h-15 w-full bg-white text-black rounded-full overflow-hidden relative hover:bg-[#0f141c] hover:text-white transition-all duration-500"
                    >
                        <div className="icon-container h-12 w-12 flex items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:translate-x-40 group-hover:bg-white group-hover:text-black">
                            <GrDocumentDownload size={20} />
                        </div>
                        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                            <h1 className="font-bold text-center w-full">
                                <span className="block transition-all duration-500 group-hover:translate-y-[-100%] group-hover:opacity-0">
                                    Download Resume
                                </span>
                                <span className="absolute top-full right-10 w-full transition-all duration-500 group-hover:translate-y-[-100%]  group-hover:opacity-100 opacity-0">
                                    Click Here
                                </span>
                            </h1>
                        </div>
                    </a>


                </div>
            </div>
        </>
    )
}

export default LeftSide