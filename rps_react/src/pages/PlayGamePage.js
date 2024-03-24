// Page Where the player plays the actual game
import SiteName from '../components/SiteName'
import Nav from '../components/Nav'
import PlayVScpu from '../components/game/PlayVsCpu'

import {useState, useEffect} from "react"

const PlayGamePage = ( props ) => {
    console.log(props.gamemode)
    
    // Holds the player current choice 
    const [currentChoice, setChoice] = useState()

   // Functions that set the player choice 
   function setUserChoiceRock() {
        setChoice('Rock')    
   }
   function setUserChoicePaper() {
        setChoice('Paper')
   }
   function setUserChoiceScissors() {
        setChoice('Scissors')
   }

   console.log(currentChoice)
    // Local JSX element that holds the game buttons
    const Gamebuttons = () => {
        
        return (
            <div>
                <button onClick={setUserChoiceRock} className='bg-[#00df9a] px-10 py-5 '>Rock</button>
                <button onClick= {setUserChoicePaper} className='bg-[#00df9a] px-10 py-5 '>Paper</button>
                <button onClick= {setUserChoiceScissors} className='bg-[#00df9a] px-10 py-5 '>Scissors</button>

            </div>
        )

    }
    
    if (props.gamemode == 1) {
        return (
            <div className='h-screen bg-background'>
            <div className='flex justify-between items-center'>
            <SiteName />
            <Nav />
            </div>
            <PlayVScpu playerchoice = {currentChoice}/>
            <Gamebuttons />
            </div>
    
        )
    }
}
export default PlayGamePage

