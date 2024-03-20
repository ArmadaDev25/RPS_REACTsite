// Page Where the player plays the actual game
import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
const PlayGamePage = ( props ) => {
    console.log(props.gamemode)
    return (
        <div className='h-screen bg-background'>
        <div className='flex justify-between items-center'>
        <SiteName />
        <Nav />
        </div>
        </div>

    )

}
export default PlayGamePage