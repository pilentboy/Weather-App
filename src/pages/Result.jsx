
import { useLocation } from "react-router-dom";

const Result = () => {

    const location =useLocation()

    console.log(location.state)

    return <h1>{location.state.name}</h1>
    
}

export default Result;
