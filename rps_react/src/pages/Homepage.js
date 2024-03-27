
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

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
        <HomepageButtons />
        </div>
    
    )
    
}


// Component that simply holds the buttons for only the homepage
const HomepageButtons = () => {
    return (
        <div>
            <Link to="/playvscpu">
                <button className='bg-Green hover:bg-Green-dark px-10 py-5 '>
                        <h1 className='text-white'>Play Now</h1>
                </button>
            </Link>
            <Link to="/about">
                <button className='bg-Green hover:bg-Green-dark px-10 py-5 '>
                        <h1 className='text-white'>Learn More</h1>
                </button>
            </Link>
        </div>
    )
}

export default Homepage