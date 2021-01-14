import Connection from "./components/connection/index";
import { Reset } from "styled-reset";
import Header from "./components/header/";
import SeConnecter from "./components/seconnecter/index";
import Sinscrire from "./components/sinscrire/index";
import "./App.css";
import ProfilPage from "./pages/profil";

function App() {
  return (
    <div className="App">
      <Reset />
      <ProfilPage />
    </div>
  );
}

export default App;
