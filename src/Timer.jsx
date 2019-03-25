import React from 'react';

export default function Timer(props) {
  return (
    <div className="countdownDisplay"> 
      <h1> Coutdown Clock :</h1>
      <ul>

      <li><span id="hours">{props.times.hours}</span>hours</li>
      <li><span id="minutes">{props.times.minutes}</span>minutes</li>
      <li><span id="seconds">{props.times.seconds}</span>seconds</li>
      </ul>
    </div>
  )
}