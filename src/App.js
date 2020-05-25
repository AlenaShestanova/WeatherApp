import React,{useState} from 'react';
import Header from './Components/Header'

import Form from "./Components/Form";
import Weather from "./Components/Weather";
const API_KEY='44f3279a58667d6583e74c55bac5aee0'
function App() {
    const [state,setState]=React.useState({
        temp:undefined,
        city:undefined,
        country:undefined,
        sunrise:undefined,
        sunset:undefined,
        error:undefined

    })
async function gettingWeather(event){

      event.preventDefault()
    const city=event.target.elements.city.value
const api_url=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44f3279a58667d6583e74c55bac5aee0`);

      const data= await api_url.json()
      console.log(data)
    setState({
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        sunrise:data.sys.sunrise,
        sunset:data.sys.sunset,
        error:''
    })
    }
  return (
      <div>
     <Header></Header>
        <Form weatherMethod={gettingWeather}></Form>
    <Weather temp={state.temp}
             city={state.city}
              county={state.country}
             sunrise={state.sunrise}
             sunset={state.sunset}
             error={state.error}
    ></Weather>
      </div>

  );

}

export default App;
