import React,{useState,useEffect} from 'react'
import Inputfeild from '../components/Inputfeild'
import flogo from '../assets/images/FIGHT_CLUB-removebg-preview.png'
import axios from 'axios'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
function SubmitEmailOtp() {
    const [isLoading, setIsLoading] = useState(false);
    const [email,setemail]=useState('')
    const [message,setmessage]=useState('')
    const [otp,setotp]=useState('')
    const navigat=useNavigate()
     // Using useEffect to set the email from localStorage once when the component mounts
    useEffect(() => {
        const data = localStorage.getItem('emailishere');
        if (data) {
            setemail(data);  // Set email state once when the component mounts
        }
        console.log(data)
    }, []);  // Empty dependency array means this useEffect runs only once on mount

 
    const submitotp =()=>{
        if (otp.length === 6){
            setmessage('')
            setIsLoading(true)
            axios.post('http://epicfightclub.live/auth/verifyotp' ,  { "email":email,"otp":otp})
            .then((response) => {
                setTimeout(() => {
                    setIsLoading(false); // Stop loading after the delay
                    console.log('submit otp request sent')
                    console.log(response.data['message'])
                    if(response.data['success']){
                        // navigate('submitemailotp')
                        console.log('request is Success and otp is sent')
                        navigat('thankyou',{replace:true})                    
                    }
                    else{
                        console.log('failiure')
                    }
                    setmessage(response.data['message']); // Set the message after the delay
    
                }, 1000);
            })
        }
        else{
            setmessage('Enter valid OTP')
        }



    }
    const resendotp=()=>{

        setmessage('')
        setIsLoading(true)
        axios.post('http://epicfightclub.live/auth/resendotp' ,  { "email":email})
        .then((response) => {
            setTimeout(() => {
                setIsLoading(false); // Stop loading after the delay
                console.log('resendotprequest sent');
                if(response.data['success']){
                    // navigate('submitemailotp')
                    console.log('request is Success and otp is sent')
                }
                else{
                    console.log('failiure')
                }
                setmessage(response.data['message']); // Set the message after the delay

            }, 1000);
            })
    }

    return (
    
        
    <div className='bg-black    flex flex-col justify-end items-center ' >
        {isLoading && <Loading/>}
        <div className='mt-10'>
            <img src={flogo} className='w-28 lg:w-24' alt="" />
        </div>
        <div className='w-10/12  lg:w-7/12 flex  justify-center'>
            <p className='text-xl p-4 w-5/6 lg:w-full text-center text-white'>An OTP has been sent to your email address </p>
        </div>

        <div 
            style={{ backgroundColor: 'rgba(21, 21, 21, 0.779)' }} 
            className='w-10/12 lg:w-7/12 lg:max-w-4xl h-5/6 py-12 flex flex-col justify-start items-center'>
        
           
               
                    <label  htmlFor="otp" className='text-violet-50'>Enter OTP</label>
                    <input 
                    type="text" 
                    className='bg-transparent lg:h-12  sm:w-80  w-72 h-17 mx-6 my-1  h-10 otp px-3 ' 
                    style={{backgroundColor:'black',border:'solid red 1px',borderRadius:'5px'}}
                    onChange={(e)=>setotp(e.target.value)}
                    />
                
                <div >
                <p className='text-gray-400'   onClick={(e)=>resendotp(e)}>Resend OTP</p>
                </div>
            
        
           
            
            <div className='  mt-9 flex   items-center ' >
                {message}
            </div>

            <div className='  h-80 lg:h-60 flex flex-col lg:flex-row justify-around items-center ' >
                <button  className='text-white font-bold mb-10 mt-5 px-4 py-1 rounded bg-red-600 hover:bg-red-500 transition h-10 w-60' onClick={(e)=>submitotp(e)} >
                    NEXT
                </button>
            </div>


        </div>

    </div>
  )
}

export default SubmitEmailOtp
