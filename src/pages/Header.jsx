import { Outlet } from "react-router-dom";
import Select from 'react-select'
import { useContext, useEffect, useState } from "react";
import {Settings} from '../context/settings'
import { MdHistoryEdu } from "react-icons/md";


const Header = () => {

    const {languages,selectedLanIndex,handleChangeLan}=useContext(Settings)
    const [histoyModal,setHistoryModal]=useState(true)
   
    return (
        <>
        <nav>

            <header className="w-screen container absolute top-0 left-[50%] translate-x-[-50%] px-4  my-4  flex items-center  z-[999] md:px-2">
            
                <Select 
                onChange={e => handleChangeLan(e.value)}
                    options={languages} 
                    defaultValue={languages[selectedLanIndex]}
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
                onClick={()=> setHistoryModal(prev => !prev)}
                className="ms-3 cursor-pointer text-5xl text-gray-400 hover:scale-110 duration-200">
                    <MdHistoryEdu/>
                </button>

          

            </header>

            {/* display searched history */}
            <div
                className={`
                    w-72 md:w-96 h-[400px] z-[999] bg-red-900 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    animate__fadeIn animate__animated animate__fast
                    ${histoyModal ? 'flex' : 'hidden'}`}
            >

            </div>

        </nav>
     
        <Outlet/>
        </>
  
    );
}

export default Header;
