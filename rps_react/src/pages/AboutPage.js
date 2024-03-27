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

        </div>
        
    )

}
export default AboutPage