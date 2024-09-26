import React, { useState } from 'react'
import './Tempwelcomepage.css';
import FClogo from '../assets/images/FIGHT_CLUB-removebg-preview.png'
import Zlogo from '../assets/images/Z LOGO 1.png'
import flogobg from '../assets/images/Fightclublogo_for_background.png'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Loading from './Loading';
const Tempwelcomepage = () => {
  const   [isLoading,setIsLoading]=useState()
  const navigate=useNavigate()
  function signup(){
  
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false); // Stop loading after the delay
      navigate('signup')

    }, 1000);
  }
  return (
    <div className="flex flex-col items-center min-h-screen pt-60 ">
      
      {isLoading && <Loading/>}
      <div className="flex justify-center  space-x-8 mb-4">
        <img className="FClogo w-20 h20 md:w-40 md:h-20 object-contain" src={FClogo} alt="FC Logo" />
        <img className="Zlogo w-20 h-20 md:w-40 md:h-20 object-contain" src={Zlogo} alt="Z Logo" />
      </div>  
      
      <p className="lg:text-4xl text-2xl mb-5 text-center">Welcome Folks,<br /> We are coming soon  !</p>
      <p className="text-center text-gray-300">A platform dedicated to empowering young generation to achieve success in every aspect of their life </p>
      <p className="text-center text-white text-2xl mt-28 mb-4 ">"Make Money With Us"</p>
      <p className="text-center  text-gray-300   mb-4 ">"Don't be a consumer <br /> Be the producer "</p>
      <p className="text-center  text-gray-300 font-serif   mb-4 ">"Attention is the new currency"</p>


      <button className=" text-white font-bold mb-10 mt-5 px-4 py-1 rounded bg-red-600 hover:bg-red-500 transition h-10 w-60" onClick={(e)=>signup()}>Sign Up</button>
    </div>

  )
}

export default Tempwelcomepage
