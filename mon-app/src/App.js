import Connection from './components/connection/index';
import { Reset } from 'styled-reset';
import Header from "./components/header/";
import SeConnecter from "./components/seconnecter/index";  
import Sinscrire from "./components/sinscrire/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <Connection />
      <SeConnecter />
      <Sinscrire />
    </div>
  );

}

export default App;
