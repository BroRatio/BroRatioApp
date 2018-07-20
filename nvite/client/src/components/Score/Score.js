import React from "react";
import "./Score.css";

const Score = props => (
    <div className="container">
        <p className='score'>
            <span>Male: {props.male}</span>
            <span>|</span>
            <span>Female: {props.female}</span>
        </p>
        <p className='message'>Mood: {props.mood}</p>
    </div>
);

export default Score;
