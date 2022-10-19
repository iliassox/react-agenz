import './App.css';
import Header from './components/Header';
import Houses from './components/Houses';
import Map from './components/Map';
import OptionsArea from './components/OptionsArea';


function App() {
  return (
    <div className="App">
      <Header/>
      <OptionsArea/>
      <div className="body_section">
        <Map/>
        <Houses/>
      </div>
    </div>
  );
}

export default App;
