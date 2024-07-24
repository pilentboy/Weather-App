import { createContext, useState } from "react";

const Settings=createContext()

const SettingsProvider=({children})=>{


        
    const languages=[
        { value: 'en', label: 'EN'},
        { value: 'fa', label: 'FA'}
    ]

    const [selectedLanIndex,setSelectedLanIndex]=useState(localStorage.getItem('language')?.valueOf() || 0)
        


    const handleChangeLan=v => {
        const lanIndex=languages.findIndex(lan => lan.value === v)
        window.localStorage.setItem('language',lanIndex)
        setSelectedLanIndex(lanIndex)
    }


    return (
        <Settings.Provider value={{languages,selectedLanIndex,handleChangeLan}}>
            {children}
        </Settings.Provider>
    )
}

export default SettingsProvider
export {Settings}