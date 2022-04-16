import { useWeather } from '../context/WeatherContext';

let latitude = 38.4189;
let longitude = 27.1287;
let firstrun = true;
var Findcity;
var found= -1;
var boundary= 0.2;
function Locationfind() {
  const { citiesJSON,  setCity } = useWeather();

  if (firstrun) {
    firstrun = false;
    Findcity = Fcity;
    GetLocation();
  }
  function Fcity() {
    //latitude=40.731647; for testing
    //longitude=31.589813;
    for (let i = 0; i < citiesJSON.length; i++) {
      let deltalo = Math.abs( citiesJSON[i].longitude - longitude);
      let deltala = Math.abs(citiesJSON[i].latitude - latitude);
      if ((deltalo < boundary) && (deltala < boundary) ) {
        found = i;
        localStorage.setItem("location", i);
        break; }
    }

    (found >-1) ? setCity(citiesJSON[found]) : localStorage.setItem("location", -1);
    //firstrun=true;
    console.log('Ffind çalıştı');

  }
  console.log('Loccatonfind çalıştı');
  return null;
}

function GetLocation() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    latitude = crd.latitude;
    longitude = crd.longitude;
    Findcity();
    console.log('Your current position is:');
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
  return 0
}

export default Locationfind;