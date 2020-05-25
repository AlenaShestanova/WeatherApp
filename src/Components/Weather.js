import React from 'react'

export default function Weather(props) {

    return (

        <div className='infoWeath'>
            {props.city&&
            <div>
                <p>Местоположение:{props.city},{props.county}</p>
                <p>Температура:{props.temp}</p>
                <p>Восход солнца:{props.sunrise}</p>
                <p>Заход солнца:{props.sunset}</p>


            </div>
            }
            <p className='error'>{props.error}</p>
        </div>
    )
}