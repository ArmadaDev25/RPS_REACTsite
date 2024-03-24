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
                <button className='bg-[#00df9a] px-10 py-5 '>Rock</button>
                <button className='bg-[#00df9a] px-10 py-5 '>Paper</button>
                <button className='bg-[#00df9a] px-10 py-5 '>Scissors</button>

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

