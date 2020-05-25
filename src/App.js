import React from 'react';
import Header from './Components/Header'

import Form from "./Components/Form";
import Weather from "./Components/Weather";
const API_KEY='44f3279a58667d6583e74c55bac5aee0'
function App() {
async function gettingWeather(event){
      event.preventDefault()
const api_url=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kazan&appid=44f3279a58667d6583e74c55bac5aee0`);
   // const api_url=await fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02')
      const data= await api_url.json()
      console.log(data)
    }
  return (
      <div>
     <Header></Header>
        <Form weatherMethod={gettingWeather}></Form>
    <Weather></Weather>
      </div>

  );

}

export default App;
