import { useState } from 'react'
import axios from 'axios'
import clouds from './asset/climate.jpg'

const Weather = () => {
    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [description, setdescription] = useState("")

    const changecity = (e) => {

        setcity(e.target.value)
    }

    const getreport = () => {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e318f621dce558e735c0bfde38f06c1d`)

        weatherdata.then((getdata) => {
            setweather(getdata.data.weather[0].main)
            setdescription(getdata.data.weather[0].description)
            settemp(getdata.data.main.temp)
        })
            .catch((ermsg) => {
                console.log(ermsg)
            })
    }
    return (
        <div className='flex justify-center mt-10 font-serif '>

            <div className="flex justify-center p-2"
                style={{
                    width: '70%', height: '550px',
                    backgroundImage: `url(${clouds})`,
                    backgroundRepeat: 'no-repeat', // Set repeat mode
                    backgroundSize: '100% 100%', // Set fill mode          
                }}>

                <div>

                    <h1 className="text-3xl  text-center font-bold  mb-3 text-red-600 tracking-wider">Weather Report</h1>
                    <p>I can give you weather report about your city!</p>              

                    <p className='ml-7'>
                        <input className='mt-16 rounded-md p-2 text-black outline-none' onChange={changecity} type='text' placeholder="Enter your city name" />
                    </p>

                    <p className='ml-20'>
                        <button className="rounded-md p-2 mt-2 bg-red-600 text-white" onClick={getreport}>Get Report</button>
                    </p>

                    <p className='font-bold p-2'>Weather: {weather}</p>
                    <p className='font-bold p-2'>Temprature: {temp}</p>
                    <p className='font-bold p-2'>Description: {description}</p>
                 
                </div>

            </div>
        </div>
    )
}

export default Weather