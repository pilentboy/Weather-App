
import { useLocation } from "react-router-dom";

const Result = () => {

    const location=useLocation()


    return (
        <div className="text-white">
            {location.state.name}
        </div>
    );
}

export default Result;
