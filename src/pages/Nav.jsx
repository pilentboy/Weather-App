import { Outlet } from "react-router-dom";
import Select from 'react-select'
import { useContext, useEffect } from "react";
import {Settings} from '../context/settings'


const Nav = () => {

    const {languages,selectedLan,handleChangeLan}=useContext(Settings)

   
    return (
        <>
        <nav className="w-screen container fixed top-0 left-[50%] translate-x-[-50%] px-2 my-4  flex bg-transparent z-[999]">

         <Select 
            onChange={e => handleChangeLan(e.value)}
             options={languages} 
                defaultValue={languages[selectedLan]}
                styles={{
                    container: (provided) => ({
                        ...provided
                    })
                }}
            />
       
        </nav>
        <Outlet/>
        </>
  
    );
}

export default Nav;
