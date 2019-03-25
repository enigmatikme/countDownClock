import React from 'react';

export default function InputTimer(props) {
    return(
      <div className="timeInput">
        <label for="timeInput">Hours: </label>
          <input type="number" min="0" max="24" name="hours" value={props.countdown.hours} onChange={props.handleHoursChange}></input>
        <label for="timeInput">Minutes: </label>
          <input type="number" min="0" max="60" value={props.countdown.minutes} onChange={props.handleMinutesChange} required></input>
        <label for="timeInput">Seconds: </label>
          <input type="number" min="0" max="60" value={props.countdown.seconds} onChange={props.handleSecondsChange}></input>
        </div>
    )
}

