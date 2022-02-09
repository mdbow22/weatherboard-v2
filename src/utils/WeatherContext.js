import { createContext, useReducer, useState } from "react";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {

    const [localInfo, setLocalInfo] = useState({
        locale: '',
        lat: '',
        long: ''
    });

    const [weatherInfo, setWeatherInfo] = useState({
        today: {
            high: '',
            low: '',
            humidity: '',
            uv: '',
            now: '',
            feelsLike: '',
            weather: {
                description: '',
                icon: ''
            }
        },
        //daily will have same info as today w/o feelsLike, now, and UV
        daily: []
    })

    return (
        <WeatherContext.Provider value={{localInfo, setLocalInfo}}>
            {children}
        </WeatherContext.Provider>
    )
}