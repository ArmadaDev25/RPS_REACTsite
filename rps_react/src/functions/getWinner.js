function getWinner(p1choice, p2choice){
    console.log("player 1 choice" + p1choice)
    console.log("player 2 choice" + p2choice)
    if (p1choice == p2choice){
        return "tie"
    }
    else{
        return "not a Tie"
    }

}
export default getWinner