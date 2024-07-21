import { useState } from 'react';
import './index.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const apiKey='4591cff101074e3dcffaa9f770b4b812'
  const url='https://api.openweathermap.org/data/2.5/weather?'

  const [locationWeather,setLocationWeather]=useState()
  const [error,setError]=useState()
  const [loading,setLoading]=useState(false)
  const [inputValue,setInputValue]=useState('')
  const [lang,setLang]=useState('en')

  const handleDisplayWeather=async (e)=>{
    e.preventDefault()

    if(inputValue){
      setLoading(true)
      setLocationWeather()
      setError(false)
        try {
          const res=await axios.get(`${url}&appid=${apiKey}&lang=${lang}&units=metric&q=${inputValue}`)
          if(res.status === 200){
            setLocationWeather(res.data)
          }
        } catch (error) {
          setError(lang === 'en' ? 'location not found!' : '!مکان پیدا نشد')
        }

      setLoading(false)

    }else{
      alert("input can't be empty")
    }
  }

  useEffect(()=>{
    console.log(locationWeather)
    console.log(lang)
  },[locationWeather,lang])

  return (
    <div className='w-screen h-screen bg-black text-white'>
  <form action="" onSubmit={handleDisplayWeather} className='space-x-6 p-5'>
        <button onClick={handleDisplayWeather} className='bg-blue-700 font-weight py-1 px-2 rounded-md'>
              {lang === 'en' ? 'search' : 'جستجو'}
          </button>
          <input type='text' className={`text-black px-2 py-3 rounded-lg border border-blue-700 text-2xl outline-none ${lang === 'en' ? 'text-start' :'text-right'}`} value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <select onChange={e=> setLang(e.target.value)} className='text-black'>
            <option>en</option>
            <option>fa</option>
          </select>


          {locationWeather && <ul>
            <li>{locationWeather.name}</li>
            <li>{lang === 'en' ? 'temp: ' : 'دما: '} {locationWeather.main.temp}</li>

            </ul>}

    </form>
      {
        loading && <h1>{lang === 'en' ? 'loading: ' : 'در حال حستجو... '}</h1>
      }
      {
        error && error
      }

    </div>
  
    
 
  );
}

export default App;