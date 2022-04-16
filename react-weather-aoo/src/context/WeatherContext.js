import {createContext, useContext, useState} from 'react'
import citiesJSON from "../data/cities.json";
// JSON import ettik yani Türkiye illeri bilgileri olan dosyamızı.

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    //data bilgilerini tutacak state. Yani API'dan gelen hava durumu bilgileri.
    const [weatherData, setWeatherData] = useState([]);

    // Eğer önceden konum bulunmuşsa o şehri getirir.
    // konum yoksa app kapatıldığında bakılan şehri getirir.
    //varsayılan Ankara göstermesi icin 5.index verdim. 
    //index numaraları 0'dan baslar.
    const loc = localStorage.getItem("location");
    const lcity = localStorage.getItem("lastcity");
    const [city, setCity] = useState(citiesJSON[(loc!=null && loc>-1)?loc:lcity>-1?lcity:5]);

    //  Kıllanıcınım browserda tercih ettiği dil. App bu dili kullansın.
    const local_lang = navigator.language;

    const values = {
        weatherData,
        setWeatherData,
        city,
        setCity,
        citiesJSON,
        local_lang
    };
    
    return ( 
    <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>
    )
};

//custom hook kullanıyoruz burada. Tekrar tekrar aynı seyleri componentlere yazmamak icin.
export const useWeather = () => useContext(WeatherContext);