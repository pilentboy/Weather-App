import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Settings } from "../context/settings";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LocationHistoryItem = ({location}) => {

    const {selectedLanIndex,locationHistory,setLocationHistory,URL,apiKey,setHistoryModal}=useContext(Settings)
    const navigate=useNavigate()

    const deleteItemFromHistory=()=>{
        const updatedSearchedLocations=locationHistory.reverse().filter(locationName => locationName !== location)
        localStorage.setItem('locationHistory',JSON.stringify(updatedSearchedLocations))

        setLocationHistory(updatedSearchedLocations.reverse())
    }

    const handleSearchLocationFromHistory=async ()=>{
      
        try {
            const res=await axios(`${URL}appid=${apiKey}&q=${location}&units=metric&lang=${selectedLanIndex == 0 ? 'en' : 'fa'}`)
            navigate("/result", { state:res.data });
            setHistoryModal(false)
        } catch (error) {
            toast.error(selectedLanIndex == 0 ? 'Location Not Found!' : 'اطلاعاتی دریافت نشد',{autoClose:4000,draggable:true,closeOnClick:true})            
        }

        
    }

    return (
        <>
           <div className="flex justify-between w-3/4 items-center my-2 ">

                <div 
                onClick={handleSearchLocationFromHistory}
                className="flex items-center  duration-200 cursor-pointer  " >
                    <CiLocationOn className="text-white text-2xl" />
                    <span className="text-white  ">
                        {location}
                    </span>
                </div>

                <button 
                onClick={deleteItemFromHistory}
                title={selectedLanIndex == 0 ? "delete from your history" : 'حذف از تاریخچه جستجوها'}
                aria-label="delete the item from your search history" 
                className=" text-2xl text-red-600">
                    <MdOutlineDelete/>
                </button>


        </div>

        
        <ToastContainer 
                position='top-center'
                hideProgressBar={false}
                newestOnTop={false}
                rtl={selectedLanIndex == 0 ? false : true}
                theme="light"    
        />
        
        </>

     
    );
}

export default LocationHistoryItem;
