import React from 'react';

export default function Buttons(props) {
  return (
    <div className="buttons">
    <button onClick={props.countdown}>Start Countdown</button>
    <button onClick={props.pause}>Pause</button>
    <button onClick={props.reset}>Reset</button>
    </div>
  )
}