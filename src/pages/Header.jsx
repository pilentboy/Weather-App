import { Outlet } from "react-router-dom";
import Select from 'react-select'
import { useContext, useState } from "react";
import {Settings} from '../context/settings'
import { MdHistoryEdu } from "react-icons/md";
import CloseButton from "../components/closeButton";
import LocationHistoryItem from "../components/locationHistoryItem";


const Header = () => {

    const {languages,selectedLanIndex,handleChangeLan,locationHistory}=useContext(Settings)
    const [histoyModal,setHistoryModal]=useState(false)


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
                    w-72 md:w-96 flex flex-col h-[400px] z-[999] bg-gray-800 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                    animate__fadeIn animate__animated animate__fast
                    ${histoyModal ? 'flex' : 'hidden'}`}
            >
                {/* top */}
                <div 
                className="flex items-center w-full border-b border-gray-400 p-1">
                    <CloseButton action={setHistoryModal}/>
                </div>

                {/* locations */}
                <div className=" w-full h-full py-2 realtive flex flex-col items-center overflow-y-auto">
              
                    {
                        locationHistory && locationHistory.length > 0 ? locationHistory.map((location,index) => (
                            <LocationHistoryItem key={index} location={location} />
                        )) : <h1 className="w-3/4 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-yellow-500 bg-black">
                            {selectedLanIndex == 0 ? 'Your Search History Is Empty' : 'تاریخچه جستجوی شما خالی است'}
                             </h1>
                    } 
               
                </div>


            </div>

        </nav>
     
        <Outlet/>
        </>
  
    );
}

export default Header;
