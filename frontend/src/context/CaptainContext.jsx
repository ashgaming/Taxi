import React, { createContext, useState, useContext } from 'react'

export const CaptainDataContext = createContext();

/*export const useCaptain = () => {
    const context = useContext(CaptainContext);
    
    if(!context){
        throw new Error('useCaptain must be used within a CaptainProvider')
    }

    return context
}
*/
const CaptainContext = ({children}) => {
    const [captian , setCaptain ] = useState(null);
    const [loading,setLoading ] = useState(false);
    const [error , setError] = useState(null);

    const updateCaptain = (captianData) =>{
        setCaptain(captianData);
    };

    const value = {
        captian,
        setCaptain,
        loading,
        setLoading,
        error,
        setError,
        updateCaptain

    }

    return (
        <CaptainDataContext.Provider value={value} >
            {children}
        </CaptainDataContext.Provider>

    )
    
}

export default CaptainContext
