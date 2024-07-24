import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Settings } from "../context/settings";
import { useContext } from "react";

const LocationHistoryItem = ({location}) => {

    const {selectedLanIndex,locationHistory,setLocationHistory}=useContext(Settings)

    const deleteItemFromHistory=()=>{

        const updatedSearchedLocations=locationHistory.filter(locationName => locationName !== location)
        console.log(updatedSearchedLocations)
        localStorage.setItem('locationHistory',JSON.stringify(updatedSearchedLocations))

        setLocationHistory(updatedSearchedLocations)
    }

    return (
        <div className="flex justify-between w-3/4 items-center my-2 ">

        <div className="flex items-center  duration-200 cursor-pointer  " >
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
    );
}

export default LocationHistoryItem;
