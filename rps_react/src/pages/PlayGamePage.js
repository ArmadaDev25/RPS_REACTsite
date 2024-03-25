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
   function setUserChoiceNull(){
        setChoice(null)
   }

   console.log(currentChoice)
    // Local JSX element that holds the game buttons
    const Gamebuttons = () => {
        // if the user has not chosen between the 3 options, the buttons allawing them to make a choice will appear
        if (currentChoice == null) {   
            return (
                <div>
                    <button onClick={setUserChoiceRock} className='bg-Green hover:bg-Green-dark px-10 py-5 m-1 ' >Rock</button>
                    <button onClick= {setUserChoicePaper} className='bg-Green hover:bg-Green-dark px-10 py-5 m-1'>Paper</button>
                    <button onClick= {setUserChoiceScissors} className='bg-Green hover:bg-Green-dark px-10 py-5 m-1'>Scissors</button>
    
                </div>
            ) 

        }
        // If the user has already made their choice, and the victor has been decided, then they will have the option to play again
        // Hitting the Play Again? button will reset to users choice to null, restarting the game loop
        if (currentChoice != null){
            return (
                <div>
                    <button onClick={setUserChoiceNull}className='bg-Green hover:bg-Green-dark px-10 py-5 '>Play Again?</button>
                </div>
            )

        }
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

