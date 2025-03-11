import * as chai from 'chai';

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
  





