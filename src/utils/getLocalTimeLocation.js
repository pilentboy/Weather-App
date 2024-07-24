import axios from "axios"

async function getLocalTimeLocation(coord){

    const apikey='X7K0FSMA7VZI'

    try {
        const res=await axios.get(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apikey}&lat=${coord['lat']}&lng=${coord['lon']}&by=position&format=json`)
   
        const localTimeLocation=res.data.formatted.split(' ')[1].split(":")
    
         return localTimeLocation[0] + ':' + localTimeLocation[1]
    } catch (error) {
        console.log(error)
    }
}


export default getLocalTimeLocation