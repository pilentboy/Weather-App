import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Settings } from "../context/settings";
import { useContext } from "react";

const SearchModalItem = () => {

    const {selectedLanIndex}=useContext(Settings)

    return (
        <div className="flex justify-around w-full items-center my-2">
        <div className="flex items-center  duration-200 cursor-pointer  " >
            <CiLocationOn className="text-white text-2xl" />
            <span className="text-white  ">
                Rasht
            </span>
        </div>
        <button 
        title={selectedLanIndex == 0 ? "delete from your history" : 'حذف از تاریخچه جستجوها'}
        aria-label="delete the item from your search history" 
        className=" text-2xl text-red-600">
            <MdOutlineDelete/>
        </button>
    </div>
    );
}

export default SearchModalItem;
