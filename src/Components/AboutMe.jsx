import React from 'react'
import '../Components/AboutMe.css'
import Aos from 'aos';


const AboutMe = () => {


    return (
        <div id='about' className='about-container p-3 mt-4'>
            <div className=' flex items-baseline gap-5'>
                <h1 className=' text-[48px] font-[700] flex items-center '
                    data-aos="fade-down"
                    data-aos-delay="100">
                    About Me.</h1>
                <div className='line flex-1 bg-gray-800 h-[2px] w-2/3'></div>
            </div>

            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Name</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full'>Kabir Verma</p>

            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Nationality</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>India</p>

            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Phone</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>(+91)6239223714</p>

            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Email</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>kabirv052@gmail.com</p>

            </div>
              <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Git Hub</p>
                <a href='https://github.com/KabirV02' target='_blank' className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>KabirV02</a>

            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Linkedin</p>
                <a href='https://www.linkedin.com/in/kabir-verma-87a753249/' target='_blank' className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>Kabir Verma</a>

            </div>
          
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Language</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>English, Hindi, Punjabi</p>

            </div>
        </div>
    )
}

export default AboutMe