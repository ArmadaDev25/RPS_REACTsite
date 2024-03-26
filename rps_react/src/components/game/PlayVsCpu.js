import { useState, useEffect } from "react"

const PlayVScpu = (props) => {
    const choices = ['Rock', 'Paper', 'Scissors']
    const [cpuChoice, setCpuChoice] = useState(null)

    function makeCPUchoice(){
        console.log("This has run")
        setCpuChoice(choices[Math.floor(Math.random()* 3)])
    }

    

  

    //Component that contains the logic for making a choice 
    const CpuLogicComp = () => {
        useEffect(() => {
            makeCPUchoice()

        },[])
        return(
            <div>
                <h1>The CPU Choose: {cpuChoice}</h1>
            </div>
        )
    }
    
   if (props.playerchoice != null){    
        console.log(props)
        return(
            <div>
                <h1>Play Vs Computer</h1>
                <CpuLogicComp />
                <h1>The Player Choose: {props.playerchoice}</h1>

            </div>
        )    
   }
   if (props.playerchoice == null ){
        
        return(
            <div>
                <h1>Play Vs Computer</h1>
            </div>
        )

   }





}
export default PlayVScpu