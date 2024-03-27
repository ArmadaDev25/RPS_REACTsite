import './App.css';

// Page Imports
import Homepage from './pages/Homepage';
import PlayGamePage from './pages/PlayGamePage';
import GameSetupPage from './pages/GameSetupPage';
import RulesPage from './pages/RulesPage'
import AboutPage from './pages/AboutPage';

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
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    
    </div>
    
    

  );
}

export default App;
