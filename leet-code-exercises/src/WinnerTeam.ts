export function tournamentWinner(competitions: string[][], results: number[]) {
    let scoreBoard = new Map<string, number>();
    for( let i=0;i<competitions.length; i++){
      let winnerIndex = results[i] ==0 ?1:0;
      const winner = competitions[i][winnerIndex]
      
      if(scoreBoard.has(winner)){
        console.log(`${winner} ${scoreBoard.get(winner)}`)
        let winnerCurrentPoints = scoreBoard.get(winner) as number;
        winnerCurrentPoints = scoreBoard.get(winner)  as number
        winnerCurrentPoints +=3;
        scoreBoard.set(winner,winnerCurrentPoints)
      }
      else 
         scoreBoard.set(winner,3)
    }
  
    let max =0;
    let winner =""
    for( const [key, value] of scoreBoard){
      if(max< value){
        winner =key;
        max =value;
      }
    }
    return winner;
  }
  

function tournamentWinnerSolution2(competitions: string[][], results: number[]) {

  let scoreBoard = new Map<string, number>();
  let tournamentWinner = {team: "",score:  0};
  for( let i=0;i<competitions.length; i++){
    let winnderIndex: number = results[i] == 0 ?1:0
    let winner:string = competitions[i][winnderIndex] 
    let winnersNewPointTelly =(scoreBoard.get(winner) ??  0) +3
    
    scoreBoard.set(winner,winnersNewPointTelly)
  
    if(winnersNewPointTelly > tournamentWinner.score){
      tournamentWinner = {team: winner, score: winnersNewPointTelly}
    }
  }
  return tournamentWinner.team;

}
  

  
  



