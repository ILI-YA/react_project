import React from 'react'



export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        localStorage.setItem(name, value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    nameHeader = () => {
       let localValue = localStorage.getItem('firstName');
       return localValue;
    }

    render() {
        return (
            <form id='form' className='form' onSubmit={this.handleSubmit}>
            <label>
                First name:
                <input id='first' className="input"  name="firstName" type='text' value={this.state.firstName} onChange={this.handleChange} />
            </label>

            <label>
                Last name:
                <input id='last' className="input" name="lastName" type='text' value={this.state.lastName} onChange={this.handleChange} />
            </label>

            <label>
                Email:
                <input id='email' className="input" name="email" type='text' value={this.state.email} onChange={this.handleChange} />
            </label>
            </form>
        )
    }

}

