
const addSearchLocationToHistory= (locationName,setLocationHistory) => {

    const upperCaseLocation=locationName.charAt(0).toUpperCase() + locationName.slice(1);
    
    if(localStorage.getItem('locationHistory')){
        const updateLocationHistory=JSON.parse(localStorage.getItem('locationHistory'))
        const filterLocations=updateLocationHistory.filter(location => location == upperCaseLocation) // avoiding duplicating locations
        
        if(filterLocations.length === 0) {
            updateLocationHistory.push(upperCaseLocation)
            localStorage.setItem('locationHistory',JSON.stringify(updateLocationHistory))
            setLocationHistory(JSON.parse(localStorage.getItem('locationHistory')))
        } 
       
    }else{
        localStorage.setItem('locationHistory',JSON.stringify([upperCaseLocation]))
        setLocationHistory(JSON.parse(localStorage.getItem('locationHistory')))
    }
    
}

export default addSearchLocationToHistory