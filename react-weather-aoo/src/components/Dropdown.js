import { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import Locationfind from './Locationfind';

function Dropdown() {
  // custom hook kullandık. State tanımlarımızı context'e esitledik(useWeather).
  const { citiesJSON, city, setCity, local_lang } = useWeather();

  //dropdown'dan her sehir ismi degistiginde o verilerin gelmesi icin for döngüsü. 
  const changeCityName = (e) => {
    setCity(citiesJSON[e.target.value-1]);
    localStorage.setItem("lastcity",e.target.value-1);
    console.log(' changeCityName');
  }
  let [getloc,setGetloc ]=useState(false);


  const d = new Date();
  const hour = d.toTimeString().slice(0, 5);
  return (
    //item JSON verimizdeki her bir data. item name şehir isimlerimiz.
    <form>
      <select name="name" id="name" onChange={changeCityName} value={city.id} >
        {
          citiesJSON.map((item, i) => {
            return (
              <option key={i} value={item.id}onChange={changeCityName}>
                {item.name}
              </option>
            )
          })
        }
      </select>

      <label className="locationlabel" onClick={ () => setGetloc(true)}>Konum Bul</label>
      {(getloc) && <Locationfind />}


      <h3>{hour}
        <span> </span>

        <span> </span>
        {new Date().toLocaleString(local_lang, { day: "numeric", month: "long", weekday: "long" })}</h3>

    </form>
    
  )
}

export default Dropdown;