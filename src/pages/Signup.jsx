import React,{useState} from 'react'
import Inputfeild from '../components/Inputfeild'
import flogo from '../assets/images/FIGHT_CLUB-removebg-preview.png'
import axios from 'axios'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [firstname,setfirstname]=useState('');
    const [secondname,setsecondname]=useState('');
    const [phone,setphone]=useState(0);
    const [email,setemail]=useState('');
    const [message,setmessage]=useState('');
    const [password1,setpassword1]=useState('');
    const [password2, setpassword2]=useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate()


    function validateEmail(email) {
        // Simple email regex pattern for basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);  // Returns true if email is valid
    };

    function signuprequest() {
        const minLength = 8;
        const hasNumber = /\d/;        // Regex to check for at least one digit
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;  // Regex for special characters
        const phoneRegex = /^[0-9]{10}$/;
      
        // Input validation
        if (firstname.length === 0 || secondname.length === 0) {
          setmessage('Please ensure that all fields are filled out.');
        }
        else if (!phoneRegex.test(phone)) {
          setmessage('Please enter a valid phone number.');
        }
        else if (validateEmail(email) === false) {
          setmessage('Please enter a valid email address.');
        }
        else if (password1 !== password2) {
          setmessage("Passwords do not match.");
        }
        else if (password1.length < minLength) {
          setmessage('Password must be at least 8 characters long.');
        }
        else if (!hasNumber.test(password1)) {
          setmessage('Password must contain at least one number.');
        }
        else if (!hasSpecialChar.test(password1)) {
          setmessage('Password must contain at least one special character.');
        }
        else {
          setmessage('');  // Clear any previous messages
          setIsLoading(true);  // Show loading state
      
          // Correct the URL and handle Axios post request properly
          axios.post('http://epicfightclub.live/auth/login', {   // Correct the IP address
            "fname": firstname,
            "secondname": secondname,
            "email": email,
            "phone": phone,
            "password": password1
          })
          .then((response) => {
            setTimeout(() => {
              setIsLoading(false); // Stop loading after a delay
              console.log('Request successful');
              
              if (response.data['success']) {
                // Store data in localStorage and navigate to next step
                localStorage.setItem('emailishere', email);
                navigate('submitemailotp',{replace:true});
              } else {
                // If success is false, display the response message
                setmessage(response.data['message']);
              }
            }, 1000);
          })
          
          .catch((error) => {
            // Handle error properly, navigate to an error page or show error message
            setIsLoading(false);
            setmessage('An error occurred. Please try again.');
            navigate('oops',{replace:true});
          });
        }
      }
      




    return (

        
        <div className='bg-black    flex flex-col justify-end items-center ' >
            {isLoading && <Loading/>}
            <div className='mt-10'>
                <img src={flogo} className='w-28 lg:w-24' alt="" />
            </div>
            <div className='w-10/12  lg:w-7/12 flex  justify-center'>
                <p className='text-xl p-4 w-5/6 lg:w-full text-center text-white'>Join the fight club community now for <span className='text-yellow-400'>Free</span></p>
            </div>
      
            <div 
                style={{ backgroundColor: 'rgba(21, 21, 21, 0.779)' }} 
                className='w-10/12 lg:w-7/12 lg:max-w-4xl h-5/6 py-12 flex flex-col justify-start items-center'>
            
                <div className='  h-40 lg:h-24 flex flex-col lg:flex-row justify-around items-center'>
                    <div className='bg-transparent lg:h-12  sm:w-80  w-72 h-17 mx-6 my-1'>
                        <label htmlFor="firstname" className='text-violet-50'>FirstName</label>
                        <input 
                        type="text" 
                        className='w-full h-full lastname placeholder-white-700 px-3' 
                        style={{backgroundColor:'black',border:'solid red 1px',borderRadius:'5px'}}
                        onChange={(e)=>setfirstname(e.target.value)}
                        value={firstname}
                        required

                        />        
                        
                    </div>
                    <div className='bg-transparent lg:h-12  sm:w-80  w-72 h-17 mx-6 my-1'>
                        <label htmlFor="lastname" className='text-violet-50'>Lastname</label>
                        <input 
                        type="text" 
                        className='w-full h-full lastname px-3 ' 
                        style={{backgroundColor:'black',border:'solid red 1px',borderRadius:'5px'}}
                        onChange={(e)=>setsecondname(e.target.value)}
                        />
                    </div>
          
          
                </div>
            
                <div className='  h-40 lg:h-24 flex flex-col lg:flex-row justify-around items-center' >
                    <div className='bg-transparent lg:h-12  sm:w-80  w-72 h-17 mx-6 my-1'>
                        <label htmlFor="email" className='text-violet-50'>Email</label>
                        <input 
                        type="text" 
                        className='w-full h-full lastname px-3 ' 
                        style={{backgroundColor:'black',border:'solid red 1px',borderRadius:'5px'}}
                        onChange={(e)=>setemail(e.target.value)}
                        />          
                    </div>
                    <div className='bg-transparent lg:h-12  sm:w-80  w-72 h-17 mx-6 my-1'>
                        <label htmlFor="phone" className='text-violet-50'>Phone</label>
                        <input 
                        type="text" 
                        className='w-full h-full lastname px-3 ' 
                        style={{backgroundColor:'black',border:'solid red 1px',borderRadius:'5px'}}
                        onChange={(e)=>setphone(e.target.value)}
                        />
                    </div>
            
                </div>
                <div className='  h-40 lg:h-24 flex flex-col lg:flex-row justify-around items-center' >
                    <div className='bg-transparent lg:h-12  sm:w-80  w-72 h-17 mx-6 my-1'>
                        <label htmlFor="password" className='text-violet-50'>Password</label>
                        <input 
                        type="password" 
                        className='w-full h-full password px-3 ' 
                        style={{backgroundColor:'black',border:'solid red 1px',borderRadius:'5px'}}
                        onChange={(e)=>setpassword1(e.target.value)}
                        />          
                    </div>
                    <div className='bg-transparent lg:h-12  sm:w-80  w-72 h-17 mx-6 my-1'>
                        <label htmlFor="password" className='text-violet-50'>Confirm Password</label>
                        <input 
                        type="password" 
                        className='w-full h-full password px-3 ' 
                        style={{backgroundColor:'black',border:'solid red 1px',borderRadius:'5px'}}
                        onChange={(e)=>setpassword2(e.target.value)}
                        />
                    </div>
            
                </div>
                <div className='  mt-9 flex   items-center ' >
                    {message}
                </div>

                <div className='  h-80 lg:h-60 flex flex-col lg:flex-row justify-around items-center ' >
                    <button  className='text-white font-bold mb-10 mt-5 px-4 py-1 rounded bg-red-600 hover:bg-red-500 transition h-10 w-60' onClick={(e)=>signuprequest(e)} >
                        NEXT
                    </button>
                </div>
        
        
            </div>
      
        </div>






  )
}

export default Signup
