import React from 'react'
import '../Components/Education.css';

const Education = () => {
    return (
        <div className=" text-white pl-8 w-full">
                    <div className="flex items-baseline gap-4 mb-6 pr-4">
                        <h1 className="text-5xl font-bold" data-aos="fade-down" data-aos-delay="100">Education.</h1>
                        <div className="flex-1 h-[2px] bg-gray-600 "></div>
                    </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Education */}

                <div className='relative w-full'>

                    <div className="h-[28%] relative pl-8 w-full circle group " data-aos="fade-down" data-aos-delay="100">
                        <div className="mb-8 reative w-full ">

                            <div className=" absolute -left-[15px] -top-1 bg-black rounded-full  border-1 border-amber-5 p-[6px]">
                                <div className=' h-[11px] w-[11px] bg-[#ff759c] rounded-full'></div>
                            </div>
                           

                            <h2 className="text-lg uppercase mt-2 group-hover:text-[#ff759c] transition-colors duration-300">Bachelors of Technology in Computer Science Engineering</h2>
                            <p className="text-[18px] text-gray-400 mt-3 mb-3 group-hover:text-white transition-colors duration-300">Chandigarh Group of Colleges, Landran</p>
                           
                        </div>


                    </div>
                    <div className="h-[28%] relative pl-8 w-full circle group " data-aos="fade-down" data-aos-delay="100">
                        <div className="mb-8 reative w-full ">

                            <div className=" absolute -left-[15px] -top-1 bg-black rounded-full  border-1 border-amber-5 p-[6px]">
                                <div className=' h-[11px] w-[11px] bg-[#ff759c] rounded-full'></div>
                            </div>
                            <h2 className="text-lg uppercase mt-2 group-hover:text-[#ff759c] transition-colors duration-300">Matriculation</h2>
                            <p className="text-[18px] text-gray-400 mt-3 mb-3 group-hover:text-white transition-colors duration-300">Aggarsain International Public School,Samana</p>
                        </div>


                    </div>
                    <div className="h-[28%] relative pl-8 w-full circle group " data-aos="fade-down" data-aos-delay="100">
                        <div className="mb-8 reative w-full ">

                            <div className=" absolute -left-[15px] -top-1 bg-black rounded-full  border-1 border-amber-5 p-[6px]">
                                <div className=' h-[11px] w-[11px] bg-[#ff759c] rounded-full'></div>
                            </div>
                            <h2 className="text-lg uppercase mt-2 group-hover:text-[#ff759c] transition-colors duration-300">Intermediate</h2>
                            <p className="text-[18px] text-gray-400 mt-3 mb-3 group-hover:text-white transition-colors duration-300">Aggarsain International Public School,Samana</p>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Education