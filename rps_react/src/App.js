import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import SiteName from './components/SiteName'

// Page Imports
import Homepage from './pages/Homepage';
import PlayGamePage from './pages/PlayGamePage';
import GameSetupPage from './pages/GameSetupPage';
import RulesPage from './pages/RulesPage'

// Route Import 
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div classname='bg-current'>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/playgame" element={<GameSetupPage />}/>
        <Route path="/playvscpu" element={<PlayGamePage gamemode={1}/>}/>
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    
    </div>
    
    

  );
}

export default App;
