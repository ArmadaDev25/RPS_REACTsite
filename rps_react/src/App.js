import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import SiteName from './components/SiteName'

// Page Imports
import Homepage from './pages/Homepage';
import PlayGamePage from './pages/PlayGamePage';
// Route Import 
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/play" element={<PlayGamePage />}/>
      </Routes>
    
    </div>
    
    

  );
}

export default App;
