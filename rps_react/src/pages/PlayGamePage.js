// Page Where the player plays the actual game
import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
import PlayVScpu from '../components/game/PlayVsCpu'

const PlayGamePage = ( props ) => {
    console.log(props.gamemode)
    
    
    // Local JSX element that holds the game buttons
    const Gamebuttons = () => {
        
        return (
            <div>
                <button>Rock</button>
                <button>Paper</button>
                <button>Scissors</button>

            </div>
        )

    }
    

    if (props.gamemode == 1) {
        return (
            <div className='h-screen bg-background'>
            <div className='flex justify-between items-center'>
            <SiteName />
            <Nav />
            </div>
            <PlayVScpu />
            <Gamebuttons />
            </div>
    
        )

    }


    

}
export default PlayGamePage

