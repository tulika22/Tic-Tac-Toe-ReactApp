import React from 'react'
import './Result.css'

function Result(props) {
  return (
    <div>
    <div className='background'> 
        <div className='box'> 
            <div className='closeX'>
                <button onClick={() => props.closeTab(false)}> X </button>
            </div>
            
            <div className='heading'> <h1>
                Congratulations </h1> 
            </div>
            <div className='body'> 
            <h2>{props.winner} WON!
                </h2>
            </div>
            <div className='foot'>
                <button onClick={() => props.restart()}>Play Again</button>
                <button onClick={() => props.closeTab(false)}> Close</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Result