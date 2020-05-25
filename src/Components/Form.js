import React from 'react'


export default function Form({weatherMethod}) {
    return(
        <form onSubmit={weatherMethod} >
            <input type="text" name="city" placeholder='Город'/>
            <button>Получить погоду</button>
        </form>
    )
}