import React, { Component } from 'react';
import InputTimer from './InputTimer';
import './App.css';
import Buttons from './Buttons'
import Timer from './Timer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      hours: 0, 
      minutes: 0,
      seconds: 0
    }
    // eslint-disable-next-line no-unused-expressions
    this.secondsRemaining;
    // eslint-disable-next-line no-unused-expressions
    this.intervalHandle;
    this.handleCountDown = this.handleCountDown.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleHoursChange = this.handleHoursChange.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
    this.handleSecondsChange = this.handleSecondsChange.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
  }
  
  startCountdown() {
    var hr = Math.floor(this.secondsRemaining/3600);
    var mins = Math.floor((this.secondsRemaining - (hr * 3600))/60); //7322 - 7200 = 122 /60 = 2
    var sec = Math.floor(this.secondsRemaining % 3600 % 60);
    
    this.setState({
      hours: hr, 
      minutes: mins,
      seconds: sec
    });
    
    if (hr < 10) {
      this.setState({
        hours: "0" + hr
      });
    }

    if (mins < 10) {
      this.setState({
        minutes: "0" + mins
      });
    }
    
    if (sec < 10) {
      this.setState({
        seconds: "0" + sec
      });
    }

    if (hr === 0 && mins === 0 && sec === 0 ) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--
  }

  handleCountDown() {
    const {hours, minutes, seconds} = this.state
    this.intervalHandle = setInterval(this.startCountdown, 1000);
    let time = (hours * 3600) + (minutes * 60) + parseInt(seconds)
  
    this.secondsRemaining = time;
  }
  

  handlePauseClick() {
    clearInterval(this.intervalHandle);
  }

  handleResetClick() {
    clearInterval(this.intervalHandle);
    this.setState({
      hours: 0, 
      minutes: 0, 
      seconds: 0
    });
  }

  handleHoursChange(event) {
    this.setState({
      hours: event.target.value,
    });
  }

  handleMinutesChange(event) {
    this.setState({
      minutes: event.target.value,
    });
  }

  handleSecondsChange(event) {
    this.setState({
      seconds: event.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <InputTimer 
          countdown={this.state}
          handleHoursChange={this.handleHoursChange} 
          handleMinutesChange={this.handleMinutesChange} 
          handleSecondsChange={this.handleSecondsChange} 
        />
        <Buttons countdown={this.handleCountDown} pause={this.handlePauseClick} reset={this.handleResetClick}/>
        <Timer times={this.state} />
      </div>
    );
  }
}

export default App;
