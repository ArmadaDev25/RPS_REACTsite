import { Link } from 'react-router-dom'
const SiteHero = () => {
    return (
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-5xl font-bold text-[#00df9a]'>
                RPS REACT
            </h1>
            <h2>The online Rock Paper Scissors game made in React</h2>
            <HeroButtons />
        </div>
    )

}
// Component that simply holds the buttons for only the hero on the homepage
const HeroButtons = () => {
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
export default SiteHero