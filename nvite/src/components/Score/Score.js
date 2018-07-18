import React from "react";
import "./Score.css";

const Score = props => (
    <div className="container">
        <p className='score'>
            <span>Male: {props.male}</span>
            <span>|</span>
            <span>Female: {props.female}</span>
        </p>
        <p style={props.text} className='message'>{props.message}</p>
    </div>
);

export default Score;
