import { createContext, useState } from "react";

const Settings=createContext()

const SettingsProvider=({children})=>{

    const weatherAPIKey='46bcde85a7f74ae2938205451241008'
        
    const [histoyModal,setHistoryModal]=useState(false)

    const languages=[
        { value: 'en', label: 'EN'}
        // { value: 'fa', label: 'FA'}
    ]


	const localStorageHistori=localStorage.getItem('locationHistory')
        
    const [locationHistory,setLocationHistory]=useState(localStorage ? JSON.parse(localStorageHistori) : [])



    // not available in this version of the app
    // const [selectedLanIndex,setSelectedLanIndex]=useState(localStorage.getItem('language')?.valueOf() || 0)
	
    // at the moment just ENG 
    // const handleChangeLan=v => {
    //     const lanIndex=languages.findIndex(lan => lan.value === v)
    //     window.localStorage.setItem('language',lanIndex)
    //     setSelectedLanIndex(lanIndex)
    // }
    /////////////////

	

    return (
        <Settings.Provider value={{languages,locationHistory,setLocationHistory,weatherAPIKey,histoyModal,setHistoryModal}}>
            {children}
        </Settings.Provider>
    )
}

export default SettingsProvider
export {Settings}