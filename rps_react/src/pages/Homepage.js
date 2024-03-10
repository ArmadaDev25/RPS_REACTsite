import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
const Homepage = () => {
    return(
        <div>
        <div className='flex'>
        <SiteName />
        <Nav />
        </div>
        <h1 className="text-3xl font-bold">
        Hello world!
        </h1>
        </div>
    
    )
    
}
export default Homepage