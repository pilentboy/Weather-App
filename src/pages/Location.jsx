import Button from '../components/button'
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Location = () => {

    const apiKey='4591cff101074e3dcffaa9f770b4b812'
    const URL='https://api.openweathermap.org/data/2.5/weather?'

    const [location,setLocation]=useState('')
    const [loading,setLodaing]=useState(false)
    const navigate=useNavigate()

    const handleSearchLocation=async e=>{ 
        e.preventDefault()
        setLodaing(true)
        try {
            const res=await axios(`${URL}appid=${apiKey}&q=${location}&units=metric`)
            navigate("/result", { state:res.data });
        } catch (error) {
            console.log(error)
        }
        setLodaing(false)
        setLocation('')

       
    }

    return (
      
        <div className='container h-screen flex justify-center items-center '>
            {!loading && <form action='#' onSubmit={handleSearchLocation}>
            <div className='relative main-input w-72 h-10  flex justify-between items-center  bg-gray-800 md:w-96 md:h-16'>
          
              <input type='text' value={location} 
              onChange={prev => setLocation(prev.target.value)}
              className='h-full w-3/4 p-2 
              bg-transparent placeholder:text-gray-400 text-gray-300 outline-none border-none '
              placeholder='Enter Location Name'
              />
  
              <Button icon={<FaArrowRight/>} />
            </div>
        
  
          </form>}

            {loading && <h1 className='text-white'>Loading</h1>}
      
        </div>
      
    );
}

export default Location;
