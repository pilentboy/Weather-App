
const addSearchLocationToHistory= locationName => {

    const upperCaseLocation=locationName.charAt(0).toUpperCase() + locationName.slice(1);
    
    if(localStorage.getItem('locationHistory')){
        const updateLocationHistory=JSON.parse(localStorage.getItem('locationHistory'))
        const filterLocations=updateLocationHistory.filter(location => location == upperCaseLocation) // avoiding duplicating locations
        console.log(filterLocations)
        if(filterLocations.length === 0) {
            updateLocationHistory.push(upperCaseLocation)
            localStorage.setItem('locationHistory',JSON.stringify(updateLocationHistory))
        } 
       
    }else{
        localStorage.setItem('locationHistory',JSON.stringify([upperCaseLocation]))
    }
    
}

export default addSearchLocationToHistory