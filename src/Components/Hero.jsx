import React from 'react'
import Box from './Box'
import '../Components/hero.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Aos from 'aos'
import "aos/dist/aos.css";


const Hero = () => {

  return (
    <div className="relative  w-full min-h-screen overflow-hidden ">
      <Box /> {/* will be behind */}
      <div className="boxBg absolute top-0 left-0 w-full h-full z-11" /> {/* will stay above */}

      <div id='main' className='absolute flex h-full w-fit top-0 left-30 z-10 text-white   '>

        <LeftSide title="Developer" />
        <RightSide title="Full Stack Developer" />
      </div>

    </div>

  )
}

export default Hero
