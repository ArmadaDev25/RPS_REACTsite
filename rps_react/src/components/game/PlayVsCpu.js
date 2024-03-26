import { useState, useEffect } from "react"

const PlayVScpu = (props) => {
    const choices = ['rock', 'paper', 'scissors']
    const [cpuChoice, setCpuChoice] = useState(null)
    const [refresh, setRefresh] = useState(false)

    function getNumChoice() {
        
        


    }
    function makeCPUchoice(){
        console.log("this has run")
        setCpuChoice(choices[Math.floor(Math.random()* 3)])
    }

    function resetcpuchoice(){
        setCpuChoice(null)
    }

    useEffect(() =>{
        
        if(cpuChoice == null){
            makeCPUchoice()
        }
        if(refresh == false){
            makeCPUchoice()
            console.log(refresh)
            console.log("This is what the CPU Choose")
            console.log(cpuChoice)
        }
        
    },[refresh])
    
   if (props.playerchoice != null){
        if (refresh == false){
            setRefresh()
        }
        
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