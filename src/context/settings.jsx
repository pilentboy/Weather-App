import { createContext, useState } from "react";

const Settings=createContext()

const SettingsProvider=({children})=>{

    const [language,setLanguage]=useState('en')

    return (
        <Settings.Provider value={{language}}>
            {children}
        </Settings.Provider>
    )
}

export default SettingsProvider
export {Settings}