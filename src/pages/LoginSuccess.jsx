import React from 'react'
import flogobg from '../assets/images/Fightclublogo_for_background.png'
function LoginSuccess() {
  
    console.log('hiiiii')
  return (
    <div className=' h-screen w-full flex justify-center items-center flex-col' >
      <img src={flogobg} className='fixed -z-40 opacity-5 size-  ' style={{width:'50rem'}} alt="" />
      <h1 className='lg:text-3xl text-zinc-300  text-2xl w-10/12 text-center '>Congrats</h1>
      <h2 className='lg:text-2xl text-zinc-400 text-xl w-10/12 text-center mt-4'> You have made the first step of becoming a better version of youself </h2>
      {/* <dotlottie-player src="https://lottie.host/eb22e245-6887-4b1d-9072-3af57fa4ffd3/7bhM4R1L5G.json" background="transparent" speed="1" style={{width: '10rem', height: '10rem'}} loop autoplay></dotlottie-player> */}

    </div>

  )
}

export default LoginSuccess
