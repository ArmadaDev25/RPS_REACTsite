import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
const GameSetupPage = () => {
    return (
        <div className='h-screen bg-background'>
        <div className='flex justify-between items-center'>
        <SiteName />
        <Nav />
        </div>
        <section className='flex flex-col'>
            <h1>Choose a Game Mode To Play</h1>
            <div className='flex px-10'>
                <button className='bg-[#00df9a] px-10 py-5 '>
                    <h1 className='text-white'>Vs AI</h1>
                </button> 
                <button>Comming Soon</button>
            </div>
        </section>
        </div>

    )

}
export default GameSetupPage