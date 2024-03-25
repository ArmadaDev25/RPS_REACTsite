import { useState, useEffect } from "react"

const PlayVScpu = (props) => {
    const choices = ['rock', 'paper', 'scissors']
    const [cpuChoice, setCpuChoice] = useState()
    

    function getNumChoice(max) {
        
        let num = Math.floor(Math.random()* max)
        console.log(num)
        let choice = choices[num]
        setCpuChoice(choice)


    }

    useEffect(() =>{
        getNumChoice(3)
    },[])

    
   if (props.playerchoice != null){
        
        return(
            <div>
                <h1>Play Vs Computer</h1>
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