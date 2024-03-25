import {useState, useEffect} from "react"
import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
import { Link } from "react-router-dom"
const GameSetupPage = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }, []);
    
    
    if (isLoading){
        return (
            <div className='h-screen bg-background'></div>

        )
    }
    return (
        <div className='h-screen bg-background'>
        <div className='flex justify-between items-center'>
        <SiteName />
        <Nav />
        </div>
        <section className='flex flex-col'>
            <h1>Choose a Game Mode To Play</h1>
            <div className='flex px-10 animate-in fade-in duration-1000'>
                <Link to="/playvscpu">
                <button className='bg-Green hover:bg-Green-dark px-10 py-5 '>
                    <h1 className='text-white'>Vs AI</h1>
                </button>
                </Link> 
                <button>Comming Soon</button>
            </div>
        </section>
        </div>

    )

}
export default GameSetupPage