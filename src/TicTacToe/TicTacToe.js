import React, { useState } from 'react'
import './TicTacToe.css'
import Result from './Result';

const TicTacToe = () => {
    const [turn,setTurn] = useState('X');
    const [cells,setCells] = useState(Array(9).fill(''));
    const [winner,setWinner] = useState();
    const [chance,setChance] = useState(0);
    const [winMod, setWinMod] = useState(false);

    const checkForWinner = ({squares}) => {
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagnol: [
                [0,4,8],
                [6,4,2]
            ]
        }

        for(let combo in combos){
            combos[combo].forEach((pattern) => {
                //console.log(pattern);
                if (squares[pattern[0]] === '' ||
                squares[pattern[1]] === '' ||
                squares[pattern[2]] === '')
                {
                    
                    //do nothing 
                }
                else if( squares[pattern[0]] === squares[pattern[1]]
                    && squares[pattern[1]] === squares[pattern[2]])
                    {
                        setWinner(squares[pattern[0]]);
                        setWinMod(true);
                        return;
                    }
            });
        }
    };

    const handleRestart = () =>{
        setWinner();
        setCells(Array(9).fill(''));
        setTurn('X');
        setChance(0);
        setWinMod(false);
    }

    const handleClick = (num) =>{
        let squares = [...cells];

        if(winner!= null)
        {
            alert('Play again!');
            return;
        }

        if(chance == 9 && winner == null)
        {
            //setWinner('No One');
            alert('Match Draw! Play again!');
            return;
        }

        if(cells[num] != ''){
            alert('Cell is already filled!');
            return;
        }
        if(turn == 'X')
        {
            squares[num] = 'X';
            setTurn('O');
            setChance(chance+1);
        }
        else
        {
            squares[num] = 'O';
            setTurn('X');
            setChance(chance+1);
        }
        
        setCells(squares);

        checkForWinner({squares});

        console.log({chance});
        

    }
    

    const Cell = ({num}) => {
         return <td onClick={() => handleClick(num)}> {cells[num]} </td>
    }

  return (
    <div className='parent'>
     <div className='header'> 
        <h1>  TIC TAC TOE</h1>

    </div>    
    
    <div className='container'>
       
        <table className='board'>
            <h2> Turn : {turn} </h2>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>

            </tbody>
      </table>
      <div className='win'>
        {winner && (
        <>
            {winMod && <Result closeTab={setWinMod} restart={handleRestart} winner={winner}/>}
             
            <button onClick={() => handleRestart()}> Play Again</button>
        </>

      )}
      {chance == 9 && !winner && (
      <>
            <h3>There is no Winner! </h3> 
            <button onClick={() => handleRestart()}> Play Again</button>
      </>
      )}
      </div>
      
      </div>
      <div className='footer'>
            <h4>© powered by Tulika Tiwari - ®</h4>
      </div>
    </div>
  )
}

export default TicTacToe