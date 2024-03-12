// Page Where the player can choose between playing against the AI or against another player NOTE: Player VS Player is a stretch goal
import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
const PlayGamePage = () => {
    return (
        <div>
        <div className='flex justify-between items-center'>
        <SiteName />
        <Nav />
        </div>
        </div>

    )

}
export default PlayGamePage