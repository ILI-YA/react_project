import React from 'react'
import Timer from './components/Timer'
import Field from './components/Field'





export default class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    onNewGameClick = () => {
        this.props.history.push('/welcome');
    }

    onRestartClick = () => {
        this.props.history.push('/game');
    }

    onFlipClick = () => {
        return this.value
    }
     

    render(){
        return (
            <div className='game'>
               <header>
                   <Timer />
                   <div className='counter'>0</div>
               </header>
                <Field />
               <div>
                   <button className="quit" type='submit' onClick={this.onRestartClick}>RESTART</button>
                   <button className="quit" type='reset' onClick={this.onNewGameClick}>new game</button>
               </div>
            </div>
        );
    }
}