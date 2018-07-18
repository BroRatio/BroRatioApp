import React from "react";
import "./Score.css";

const Score = props => (
    <div className="container">
        <p className='score'>
            <span>Male: {props.male}</span>
            <span>|</span>
            <span>Female: {props.female}</span>
        </p>
        <p className='mood'>{props.mood}</p>
        <p className='message'>{props.message}</p>
    </div>
);

export default Score;
