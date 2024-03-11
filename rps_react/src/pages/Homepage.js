import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
const Homepage = () => {
    return(
        <div>
        <div className='flex justify-between items-center'>
        <SiteName />
        <Nav />
        </div>
        <h1 className="text-3xl font-bold">
        Rock, Paper, Scissors, REACT
        </h1>
        <h2>The online Rock Paper Scissors game made in React</h2>
        </div>
    
    )
    
}
export default Homepage