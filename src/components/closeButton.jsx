import { IoIosCloseCircleOutline } from "react-icons/io";

const CloseButton = ({action}) => {
    return (
        <button  
        onClick={()=> action(false)}
        className="text-4xl text-red-600 hover:scale-110 duration-200">
            <IoIosCloseCircleOutline/>
        </button>
    );
}

export default CloseButton;
