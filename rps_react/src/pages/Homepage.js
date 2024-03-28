import SiteHero from '../components/SiteHero'
import Nav from '../components/Nav'


const Homepage = () => {
    return(
        <div className='h-screen bg-background'>
        <div className='flex justify-center'>
            <Nav />
        </div>
        <SiteHero />
        </div>
    )
}
export default Homepage