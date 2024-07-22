
import { useLocation } from "react-router-dom";
import {useEffect } from "react";

const Result = () => {

    const location=useLocation()

    // useEffect(()=>{
    //     if(!location.state) navigate('/')
    // },[])



    return <h1>{location.state.name}</h1>
    
}

export default Result;
