import Button from '../components/button'
import SlideShow from '../components/slideShow';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import { useEffect,useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Settings} from '../context/settings'

const Home = () => {

    const apiKey='4591cff101074e3dcffaa9f770b4b812'
    const URL='https://api.openweathermap.org/data/2.5/weather?'

    const [location,setLocation]=useState('')
    const [searching,setSarching]=useState(false)
    const [locationFocus,setLocationFocus]=useState(false)
    const {selectedLan}=useContext(Settings)
 

    const navigate=useNavigate()

    const handleSearchLocation=async e=>{ 
        e.preventDefault()
        setSarching(true)
        toast.info(selectedLan == 0 ? 'Searching' : 'در حال جستجو',{autoClose:false,toastId:'isSearching',closeOnClick:false})
        try {
            const res=await axios(`${URL}appid=${apiKey}&q=${location}&units=metric`)
            navigate("/result", { state:res.data });
        } catch (error) {
            toast.dismiss('isSearching')
            toast.error(selectedLan == 0 ? 'Location Not Found!' : 'اطلاعاتی دریافت نشد',{autoClose:4000,draggable:true,closeOnClick:true})            
        }
        setSarching(false)
        setLocation('')
       
    }

    useEffect(()=>{
        console.log(selectedLan)
    },[])
   
    return (
      
        <div className='container h-screen   flex justify-center items-center relative '>

            <img 
            src={process.env.PUBLIC_URL + '/assets/image/homeBG.webp'} 
            className={`w-full absolute duration-500 blur-[${!locationFocus ? '0px' : '2px'}] hidden md:block`}/>
            <ToastContainer 
                position='top-center'
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                theme="light"    
            />

            
            <SlideShow />

         
            
          
        


           <form action='#' onSubmit={handleSearchLocation}>
            <div className={`relative main-input w-72 h-10   ${selectedLan == 0 ? 'flex flex-row' : 'flex flex-row-reverse'} justify-between items-center animate__animated animate__infinite ${searching && 'animate__pulse'} bg-gray-800 md:w-96 md:h-16`}>

                {/* search location input*/}
              <input spellCheck type='text' value={location} title='search input'
              autoFocus
              onFocus={()=> setLocationFocus(true)}
              onBlur={()=> setLocationFocus(false)}
              onChange={(prev) => {
                // disable changing value while searching is in process
                if(!searching) setLocation(prev.target.value) 
              }}
              className={`h-full w-3/4 p-2 
              bg-transparent placeholder:text-gray-400 text-gray-300 outline-none border-none ${selectedLan == 0 ?'text-start' : 'text-end'}`}
              placeholder={selectedLan == 0 ? 'Enter Location Name' : 'نام شهر را وارد نمایید'}

              />
  
              <Button icon={selectedLan == 0 ? <FaArrowRight className='hover:scale-125 duration-200 '/> : <FaArrowLeft className='hover:scale-125 duration-200 '/>} title='Search' ariaLabel='Search Button' />
            </div>
        
  
          </form>

      
        </div>
      
    );
}

export default Home;
