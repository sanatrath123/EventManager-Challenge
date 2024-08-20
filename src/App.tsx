import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { GrSchedules } from "react-icons/gr";
import { FcBusinessContact } from "react-icons/fc";
import "./App.css"
import { Link } from 'react-router-dom';
const App = () => {
  const titleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // Animate the navbar from the top
    gsap.fromTo(
      navRef.current,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' }
    );

    // Split the text into words
    const splitText = new SplitType(titleRef.current, { types: 'words' });

    // Animate each word coming from the top
    gsap.fromTo(
      splitText.words,
      { y: '-100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2, // Stagger the animation for each word
        delay: 1, // Delay to start after navbar animation
      }
    );
  }, []);

  return (
    <div className='main-container'>
    <div className="subcontainer"> 
      <nav ref={navRef} className="w-full bg-gray-950 rounded-2xl flex justify-between items-center px-4 pt-2 h-16 mb-6">
       <div className=' flex items-center gap-3'>
       <img src="public/81361657-task-manager-icon.jpg" className='rounded-2xl h-[3rem] ' alt="" />
       <h1 className="md:text-3xl text-2xl md:font-bold  font-bold md:block hidden">Event Scheduler</h1>
       </div>
        <ul className="flex space-x-6 text-xl md:justify-evenly justify-between">
          <li className="hover:text-gray-400 cursor-pointer flex gap-2 items-center">
          <GrSchedules size={40} color='red'/>
           <span className='lg:block hidden'> SHOW ALL EVENTS</span></li>
          <li className="hover:text-gray-400 cursor-pointer flex items-center">
            <FcBusinessContact size={50} color='blue'/>
            <span className='lg:block hidden'>Contact Us</span></li>
  
        </ul>
      </nav>

      <div className="text-center mt-10">
        <h1
          ref={titleRef}
          className="md:text-5xl text-2xl md:font-extrabold font-bold mb-6"
        >
           Effortlessly Plan <br /> Your Events with Ease
        </h1>
        <button className="px-6 py-2 bg-blue-500 rounded-full text-xl font-medium hover:bg-blue-400 mt-10 flex items-center mx-auto">
          <img src="public/678116-calendar-512.webp" className='h-12' alt="" />
          <Link to={"/Callender"}>Open Calendar</Link>
        </button>
      </div>
    </div> </div>
  )
}

export default App