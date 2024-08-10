import Button from '../components/button'
import GifSlider from '../components/Sliders/weatherGifSlider/gifSlider';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import {useContext, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import addSearchLocationToHistory from '../utils/addSearchLocationToHistory'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Settings} from '../context/settings'

const Home = () => {



    const [location,setLocation]=useState('')
    const [searching,setSarching]=useState(false)
    const [locationFocus,setLocationFocus]=useState(false)
    const {setLocationHistory,weatherAPIKey,setHistoryModal}=useContext(Settings)
    const searchInput=useRef(null)
    const navigate=useNavigate()

    
    const handleSearchLocation=async e=>{ 
        e.preventDefault()
        setSarching(true)
        searchInput.current.blur()
        toast.info('Searching',{autoClose:false,toastId:'isSearching',closeOnClick:false})
        try {
            const res=await axios(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${location}`)
            addSearchLocationToHistory(location.trim(),setLocationHistory)
            
            navigate("/result", { state:res.data });
        } catch (error) {
            toast.dismiss('isSearching')
            toast.error('Location Not Found!',{autoClose:4000,draggable:true,closeOnClick:true})            
        }
        setSarching(false)
        setLocation('')         
        setHistoryModal(false)

    }


	
    return (
      
        <div className='container h-dvh  flex justify-center items-center relative '>

            <img 
            src={process.env.PUBLIC_URL + '/assets/image/homeBG.webp'} 
            className={`w-full absolute duration-500  hidden md:block ${locationFocus ? 'blur-[2px]' : 'blur-[0px]'}`}/>
       

            
            <GifSlider />

            <img src={process.env.PUBLIC_URL + '/assets/image/mobileBG2.png'} 
            className={` w-96 h-42  duration-500  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block md:hidden blur-[${!locationFocus ? '0px' : '2px'}]`} />

           <form action='#' onSubmit={handleSearchLocation}>
            <div className={`relative main-input w-72 h-12 z-[500] flex justify-between items-center animate__animated animate__infinite ${searching && 'animate__pulse'} bg-gray-800 md:w-96 md:h-16`}>

                {/* search location input*/}
              <input
              ref={searchInput}
              spellCheck type='text' 
              value={location} title='search input'
              autoFocus
              onFocus={()=> setLocationFocus(true)}
              onBlur={()=> setLocationFocus(false)}
              onChange={ prev => {
                // disable changing value while searching is in progress
                if(!searching) setLocation(prev.target.value) 
              }}
              className={`h-full w-3/4 p-2 
              bg-transparent placeholder:text-gray-400 text-gray-300 outline-none border-none`}
              placeholder={'Enter Location Name'}

              />
  
              <Button icon={<FaArrowRight className='hover:scale-125 duration-200 '/>} title='Search' ariaLabel='Search Button' />
            </div>
        
  
          </form>

     
            <ToastContainer 
                    position='top-center'
                    hideProgressBar={false}
                    newestOnTop={false}
                    rtl={false}
                    theme="light"    
                />
                
        </div>
      
    );
}

export default Home;
