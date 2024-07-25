import { createContext, useState } from "react";

const Settings=createContext()

const SettingsProvider=({children})=>{

    const apiKey='4591cff101074e3dcffaa9f770b4b812'
    const URL='https://api.openweathermap.org/data/2.5/weather?'
        
    const [histoyModal,setHistoryModal]=useState(false)

    const languages=[
        { value: 'en', label: 'EN'},
        { value: 'fa', label: 'FA'}
    ]

    const [selectedLanIndex,setSelectedLanIndex]=useState(localStorage.getItem('language')?.valueOf() || 0)
	
	const localStorageHistori=localStorage.getItem('locationHistory')
        
    const [locationHistory,setLocationHistory]=useState(localStorage ? JSON.parse(localStorageHistori) : [])


    const handleChangeLan=v => {
        const lanIndex=languages.findIndex(lan => lan.value === v)
        window.localStorage.setItem('language',lanIndex)
        setSelectedLanIndex(lanIndex)
    }

	

    return (
        <Settings.Provider value={{languages,selectedLanIndex,handleChangeLan,locationHistory,setLocationHistory,apiKey,URL,histoyModal,setHistoryModal}}>
            {children}
        </Settings.Provider>
    )
}

export default SettingsProvider
export {Settings}