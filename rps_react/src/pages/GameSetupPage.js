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
        <button>Vs AI</button>
        </div>

    )

}
export default GameSetupPage