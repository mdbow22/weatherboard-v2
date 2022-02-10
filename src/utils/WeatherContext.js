import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {

    const [localInfo, setLocalInfo] = useState({
        locale: '',
        lat: '',
        long: ''
    });

    const [weatherInfo, setWeatherInfo] = useState(null)

    const [first, setFirst] = useState(true)

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${localInfo.lat}&lon=${localInfo.long}&units=imperial&appid=3e8fd441ffe94cd1d1f73c4d27b77283`;
        
        if(!first) {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const today = data.current;
                const daily = data.daily;
                setWeatherInfo({
                    today,
                    daily
                });
            })
        }

        setFirst(false);
        
    }, [localInfo, setWeatherInfo]);

    return (
        <WeatherContext.Provider value={{localInfo, setLocalInfo, weatherInfo}}>
            {children}
        </WeatherContext.Provider>
    )
}