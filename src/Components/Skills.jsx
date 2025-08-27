import React from 'react'

const Skills = () => {
    return (
        <div className='h-full w-full pr-4'>
            <div className="flex items-baseline gap-4 mb-6">
                <h1 className="text-5xl font-bold" data-aos="fade-down" data-aos-delay="100">Skills.</h1>
                <div className="flex-1 h-[2px]  bg-gray-600 "></div>
            </div>
            <div 
            className='w-full flex flex-wrap justify-center items-center gap-[20px]'>
                <div 
                data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">CPP</h2>
                </div>
                <div 
              data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">HTML</h2>
                </div>
                <div 
             data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">CSS</h2>
                </div>
                <div
               data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">Javascript</h2>
                </div>
                <div 
              data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">REACT</h2>
                </div>
                <div 
              data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">NODE JS</h2>
                </div>
                <div 
              data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">Mongo DB</h2>
                </div>
                <div 
            data-aos="flip-up"
                className="py-3 px-7 bg-white/7 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                    <h2 className="text-lg font-bold">MY SQL</h2>
                </div>
            </div>

        </div>
    )
}

export default Skills