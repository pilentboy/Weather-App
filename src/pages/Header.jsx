import { Outlet } from "react-router-dom";
import Select from 'react-select'
import { useContext, useEffect } from "react";
import {Settings} from '../context/settings'
import { MdHistoryEdu } from "react-icons/md";


const Header = () => {

    const {languages,selectedLan,handleChangeLan}=useContext(Settings)

   
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

            <button className="ms-3 cursor-pointer text-5xl text-gray-400 ">
                <MdHistoryEdu/>
            </button>
       
        </header>
        <Outlet/>
        </>
  
    );
}

export default Header;
