import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './context/WeatherContext';
import Locationfind from './components/Locationfind'
function App() {

  if (localStorage.getItem("lastcity")==null) localStorage.setItem("lastcity",-1);

  return (       
      <WeatherProvider> {/* context api'dan geliyor */}
        <div className="app">
        {/* provide ile child'lara dataları gönderebilriz, erisim sağlayabilir yani. Buradaki data ne value degerimiz  */}
      {(localStorage.getItem("location")==null) && <Locationfind />}
      <Header />
      <Dropdown />
      <WeatherCard />
      </div>
      </WeatherProvider>   
  );
}

export default App;
