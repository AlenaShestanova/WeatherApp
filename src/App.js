import React, {useState} from 'react';
import Header from './Components/Header'

import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = '44f3279a58667d6583e74c55bac5aee0'

function App() {
    const [state, setState] = React.useState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined

    })

    async function gettingWeather(event) {

        event.preventDefault()
        const city = event.target.elements.city.value

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44f3279a58667d6583e74c55bac5aee0`);

            const data = await api_url.json()

            function ConvertTime(time) {
                var date = new Date()
                date.setTime(time)
                return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }


            setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: ConvertTime(data.sys.sunrise),
                sunset: ConvertTime(data.sys.sunset),
                error: undefined
            })
        } else {
            setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: 'Введите название города'
            })
        }
    }

    return (
        <div className='wrapper'>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className='col-sm-5 header' ><Header></Header></div>
                        <div className='col-sm-7 form' ><Form weatherMethod={gettingWeather}></Form>


                            <Weather temp={state.temp}
                                     city={state.city}
                                     county={state.country}
                                     sunrise={state.sunrise}
                                     sunset={state.sunset}
                                     error={state.error}
                            ></Weather>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default App;
