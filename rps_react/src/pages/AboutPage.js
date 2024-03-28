// Page that tells the player about the RPS project and its development
import SiteName from "../components/SiteName"
import Nav from "../components/Nav"


const AboutPage = () => {
    return (
        <div className='h-screen bg-background'>
            <div className='flex justify-between items-center'>
                <SiteName />
                <Nav />
            </div>
            <h1 className="text-7xl font-bold text-[#00df9a]">The Development of RPS React</h1>
            <h1>From Python Script to web app.</h1>

        </div>
        
    )

}
export default AboutPage