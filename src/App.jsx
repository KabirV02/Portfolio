import React, { useEffect } from 'react'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from './Components/Hero'
import { useState } from 'react';
import loader from './assets/Loader2.mp4'; 
import { Route, Router, Routes } from 'react-router';


function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
    
    duration: 2000,
    easing: 'ease-in-out',
    mirror:true,
    once: false,
    anchorPlacement: 'top-bottom', // Better anchor placement
    debounceDelay: 50, // Add debounce for better performance
    throttleDelay: 99,
  });
  Aos.refresh();

    // Simulate loading time (e.g., data/API/components)
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 800);

    return () => clearTimeout(timer);
},[])
  
  return (
    <>

     
      {loading ? (
        <div className="video-loader w-full h-full absolute bg-[#0f141c] overflow-hidden">
          <video autoPlay muted loop className="loader-video relative top-0 left-0 w-full h-full">
            <source src={loader} type="video/mp4" />
            
          </video>
        </div>
      ) : (
        <Routes>
        <Route path='/' element={<Hero/>}/>
        
        
      </Routes>
      )}

       {/* <Routes>
        <Route path='/' element={<Hero/>}/>
        
        
      </Routes> */}
       
    </>
  )
}

export default App
