import React from 'react'


export default class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date()
        };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
        // let time = new Date()
        // let sec = Math.abs(Math.floor(time.setSeconds()/1000)%60); 
        // let min = Math.abs(Math.floor(time.setMinutes()/1000/60)%60); 
        // let hours = Math.abs(Math.floor(time.setHours()/1000/60/60)%24); 

        // if (sec.toString().length === 1) sec = '0' + sec;
        // if (min.toString().length === 1) min = '0' + min;
        // if (hours.toString().length === 1) hours = '0' + hours;
        
        // let timer = `${hours} + ':' + ${min} + ':' + '${sec}'`
        
        this.setState({
            date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          {this.state.date.toLocaleTimeString()}
        </div>
      );
    }
  }