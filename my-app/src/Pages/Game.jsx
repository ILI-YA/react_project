import React from 'react'

export default class Game extends React.Component {
    constructor(){
        super();
        this.state = {};
    }


    render(){
        return (
            <div className='game'>
               <header>
                   <div id='timer'>00:00:00.0</div>
                   <div className='counter'>0</div>
               </header>
               <div className='playField'></div>
               <div>
                   <button type='submit'>RESTART</button>
                   <button type='reset'>new game</button>
               </div>
            </div>
        );
    }
}