import React from 'react';
import { useNavigate } from "react-router-dom";



const Twelveth = () => {
    const navigate = useNavigate();
    const goHome =() =>{
        navigate("/")
    }
    return (
        <>
        this is new components
        <button onClick={goHome}>go home</button>
        </>
    )
}

export default Twelveth;