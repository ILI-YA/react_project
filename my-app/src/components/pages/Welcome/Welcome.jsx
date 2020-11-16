import React from 'react'
import { connect } from 'react-redux'
import Form from './components/Form'
import Card1 from '../../common/Card1'
import Card2 from '../../common/Card2'
import Card3 from '../../common/Card3'

import { setDif, setType } from '../../../redux/actions/welcomeAction'

class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            difficulty: '4',
            cardType: 'card1'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onStartClick = () => {
        const dif = this.state.difficulty
        this.props.onWelcomeSubmitClic(dif)

        const type = this.state.cardType
        this.props.onWelcomeType(type)

        this.props.history.push('/game');
    }

    onQuitClick = () => {
        localStorage.clear();
    }

    nameHeader = () => {
        let localValue = localStorage.getItem('firstName');
        return <span>{localValue}</span>;
    }

    handleChange(event) {
        this.setState({difficulty: event.target.value});
    } 

    handleInputChange(event) {
        this.setState({cardType: event.target.value});
      }

    render(){
        let local = localStorage.getItem('firstName');
        let elem;
        let name;
        if(local) {
            name = <this.nameHeader />
        } else {
            elem = <Form />
        }
        return (
            <div className='firstWelcome'>
                <h1>Welcome {name} to MMG</h1>
                {elem}

                <div className='welcome'>
                    <h3>Difficulty:</h3>
                    <select className="select" value={this.state.difficulty} onChange={this.handleChange}>
                        <option value='4' onChange={this.handleChange}>Easy</option>
                        <option value='6' onChange={this.handleChange}>Medium</option>
                        <option value='8' onChange={this.handleChange}>Hard</option>
                    </select>
                
                    <h3>Select card shirt:</h3> 
                    <div className="cards">
                        <label>
                            <input type="radio" name='opt' value='card1' onChange={this.handleInputChange} />
                            <Card1 />
                        </label>
                        <label>
                            <input type="radio" name='opt' value='card2' onChange={this.handleInputChange} />
                            <Card2 />
                        </label>
                        <label>
                            <input type="radio" name='opt' value='card3' onChange={this.handleInputChange} />
                            <Card3 />
                        </label>
                    </div>
                    
                    <h3>Rules</h3>
                    <p className='rules'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis quidem consequuntur quis dolor reiciendis doloremque, 
                        quas voluptate assumenda, quibusdam nobis labore error facilis 
                        enim corporis voluptatem id vel maiores molestiae.
                    </p>
                    <button className="start" type='submit' form='form' onClick={this.onStartClick}>Start Game</button>
                    <button className="quit" type='submit' form='form' onClick={this.onQuitClick}>Quit Game</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    difficulty: state.difficulty,
    cardType: state.cardType
})


const mapDispatchToProps = (dispatch) => ({
    onWelcomeSubmitClic: (dif) => dispatch(setDif(dif)),
    onWelcomeType: (typ) => dispatch(setType(typ))
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)