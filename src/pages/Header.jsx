import { Outlet } from "react-router-dom";
import Select from 'react-select'
import { useContext, useEffect, useState } from "react";
import {Settings} from '../context/settings'
import { MdHistoryEdu } from "react-icons/md";


const Header = () => {

    const {languages,selectedLan,handleChangeLan}=useContext(Settings)
    const [histoyDisplay,setHistoryDisplay]=useState(false)
   
    return (
        <>
        <header className="w-screen container fixed top-0 left-[50%] translate-x-[-50%] px-4  my-4  flex items-center bg-transparent z-[999] md:px-2">

         <Select 
            onChange={e => handleChangeLan(e.value)}
             options={languages} 
                defaultValue={languages[selectedLan]}
                styles={{
                    control: (provided) => ({
                        ...provided,
                        backgroundColor:'#9ca3af',
                        borderColor:'#9ca3af',
                        
                    }),
                    menuList: (provided) => ({
                        ...provided,
                        backgroundColor:'#9ca3af'
                        
                    })   
                }}
            />

            
            <button 
            onClick={()=> setHistoryDisplay(prev => !prev)}
            className="ms-3 cursor-pointer text-5xl text-gray-400 hover:scale-110 duration-200">
                <MdHistoryEdu/>
            </button>

            {/* display searched history */}
            <div className={`
                 w-72 md:w-96 h-72 z-[999] bg-red-900 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] animate__fadeIn animate__animated animate__fast
                ${histoyDisplay ? 'flex' : 'hidden'}`}>

            </div>
       
        </header>
        <Outlet/>
        </>
  
    );
}

export default Header;
