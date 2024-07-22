import Button from '../components/button'
import { FaArrowRight } from "react-icons/fa";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Home = () => {

    const apiKey='4591cff101074e3dcffaa9f770b4b812'
    const URL='https://api.openweathermap.org/data/2.5/weather?'

    const [location,setLocation]=useState('')
    const [searching,setSarching]=useState(false)

    const navigate=useNavigate()

    const handleSearchLocation=async e=>{ 
        e.preventDefault()
        setSarching(true)
        toast.info('Searching',{autoClose:false,toastId:'isSearching'})
        try {
            const res=await axios(`${URL}appid=${apiKey}&q=${location}&units=metric`)
            navigate("/result", { state:res.data });
        } catch (error) {
            toast.dismiss('isSearching')
            toast.error('Location Not Found!',{autoClose:4000,draggable:true})            
        }
        setSarching(false)
        setLocation('')
       
    }

    return (
      
        <div className='container h-screen  flex justify-center items-center '>
            <ToastContainer 
                position='top-center'
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={!searching}
                rtl={false}
                theme="light"    
            />

           <form action='#' onSubmit={handleSearchLocation}>
            <div className={`relative main-input w-72 h-10  flex justify-between items-center animate__animated animate__infinite ${searching && 'animate__pulse'} bg-gray-800 md:w-96 md:h-16`}>
          
              <input spellCheck type='text' value={location} title='search input'
              onChange={(prev) => {
                // disable changing value while searching is in process
                if(!searching) setLocation(prev.target.value) 
              }}
              className='h-full w-3/4 p-2 
              bg-transparent placeholder:text-gray-400 text-gray-300 outline-none border-none '
              placeholder='Enter Location Name'
              />
  
              <Button icon={<FaArrowRight className='hover:scale-125 duration-200 '/>} title='Search' ariaLabel='Search Button' />
            </div>
        
  
          </form>

      
        </div>
      
    );
}

export default Home;
