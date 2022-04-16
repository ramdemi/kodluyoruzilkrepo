import {useEffect} from 'react';
import { useWeather  } from '../context/WeatherContext';

function WeatherCard() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const {weatherData, setWeatherData, city, local_lang} = useWeather();
  
  console.log(weatherData);
  console.log(city);

  useEffect(() => {
    const getWeather = async () => {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&lang=${local_lang}&units=metric&exclude=current,minutely,hourly,alerts&appid=1b8b00609be6199c062ce764970dd564`
      );
      //fetch kulanınca json'a cevirmemiz gerekli.
      const res = await api_call.json();
      setWeatherData(res.daily);
    };
    getWeather();
  }, [city, setWeatherData]);


  return (
    <div className="weather-card-container">
    {weatherData &&
      weatherData.map((oneDay, i) => {
        return (
          <div className="weather-item" key={i}>
            <p className='day'>{new Date(oneDay.dt * 1000).toLocaleString(local_lang,{weekday:"short"})}</p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`}
                alt="weather icon"/>
            </div>

            <span className="description">{oneDay.weather[0].description}</span>
            {/* burada weather[0].description, temp.min-temp.max ,dt cektigimiz API'dan gelen degerler. Gelen degerleri console'dan okuyabiliriz. */}
            <p>
              <span className='temp-max'>{Math.round(oneDay.temp.max)}&#176;C </span>             
              <span>   </span>
              <span>{Math.round(oneDay.temp.min)}&#176;C </span>              
            </p>         
          </div>
        );
      }
      )}
  </div>      
  )
}

export default WeatherCard;