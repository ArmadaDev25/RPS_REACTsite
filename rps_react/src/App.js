import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import SiteName from './components/SiteName'
function App() {
  return (
    <div>
    <div className='flex'>
    <SiteName />
    <Nav />
    </div>
    <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
    </div>

  );
}

export default App;
