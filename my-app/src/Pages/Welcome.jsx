import React from 'react'

export default class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first: '',
            last: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            first: event.target.first,
            last: event.target.last,
            email: event.target.email
        });
    }

    store(){
        let first = document.getElementById('first').value;
        localStorage.setItem('first', first);

        let last = document.getElementById('last').value;
        localStorage.setItem('last', last);

        let email = document.getElementById('email').value;
        localStorage.setItem('email', email);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return (
            <div className='welcome'>
                <h1>Welcome to MMG</h1>

                <form id='form' className='form'>
                    <label>
                        First name:
                        <input id='first' type='text' value={this.state.first} onChange={this.handleChange} />
                    </label>

                    <label>
                        Last name:
                        <input id='last' type='text' value={this.state.last} onChange={this.handleChange} />
                    </label>

                    <label>
                        Email name:
                        <input id='email' type='text' value={this.state.email} onChange={this.handleChange} />
                    </label>
                </form>

                <div className='welcome'>
                    <h3>Difficulty:</h3>
                    <select>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                
                    <h3>Select card shirt:</h3>
                    <div>
                        <input type="radio" name='opt' /> Opt 1
                        <input type="radio" name='opt' /> Opt 2
                        <input type="radio" name='opt' /> Opt 3
                    </div>
                    
                    <h3>Rules</h3>
                    <p className='rules'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis quidem consequuntur quis dolor reiciendis doloremque, 
                        quas voluptate assumenda, quibusdam nobis labore error facilis 
                        enim corporis voluptatem id vel maiores molestiae.
                    </p>
                    <input type='submit' value='Start Game' form='form' onClick={this.store} />
                </div>
            </div>
        );
    }
}

