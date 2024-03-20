import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
const GameSetupPage = () => {
    return (
        <div>
        <div className='flex justify-between items-center'>
        <SiteName />
        <Nav />
        </div>
        <h1>Choose a Game Mode To Play</h1>
        <div className='flex'>
        <button className='bg-[#00df9a]'>Vs AI</button>
        <button>Comming Soon</button>
        </div>
        
        </div>

    )

}
export default GameSetupPage