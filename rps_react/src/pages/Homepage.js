
import Nav from '../components/Nav'
const Homepage = () => {
    return(
        <div className='h-screen bg-background'>
        <div className='flex justify-center'>
            <Nav />
        </div>
        <h1 className="text-7xl font-bold text-[#00df9a]">
        RPS REACT
        </h1>
        <h2>The online Rock Paper Scissors game made in React</h2>
        </div>
    
    )
    
}
export default Homepage