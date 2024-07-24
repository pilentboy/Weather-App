
const addSearchLocationToHistory= locationName => {

    const upperCaseLocation=locationName.charAt(0).toUpperCase() + locationName.slice(1);
    
    if(localStorage.getItem('locationHistory')){
        const updateLocationHistory=JSON.parse(localStorage.getItem('locationHistory'))
        updateLocationHistory.push(upperCaseLocation)
        localStorage.setItem('locationHistory',JSON.stringify(updateLocationHistory))
    }else{
        localStorage.setItem('locationHistory',JSON.stringify([upperCaseLocation]))
    }
    
}

export default addSearchLocationToHistory