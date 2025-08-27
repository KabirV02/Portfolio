import React from 'react'
import '../index.css'
import Aos from 'aos'; 
import "aos/dist/aos.css";

const RightkaLeft = ({title}) => {



  return (
     <div className='relative flex flex-col gap-5 p-4  w-full ' data-aos="zoom-in" data-aos-delay="100">

            <h1 className=' text-5xl tracking-wider flex flex-col  font-semibold ' data-aos="zoom-in" data-aos-delay="100" >Kabir Verma<span className='font-light'><p></p></span></h1>
            <h2 className='mt-5 mb-8 text-2xl font-medium text-white'>{title}</h2>
            <p className='relative text-[18px]  text-[#909090] ' data-aos="fade-up" data-aos-delay="100">Ambitious B.Tech student in Computer Science Engineering with an eager interest in technology, programming, and problem-solving. Enthusiastic about learning new skills, improving logical thinking, and applying knowledge to real-world applications. A proactive and adaptable individual looking for opportunities to gain practical experience and grow in the tech industry.</p>

        </div>
  )
}

export default RightkaLeft