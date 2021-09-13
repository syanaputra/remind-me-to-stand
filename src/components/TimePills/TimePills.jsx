import React from 'react';
import Pill from '../Common/Pill';

const TimePills = (props) => {
    const { timerAction } = props;
    const { modify, start } = timerAction;

    return (
        <div className="time-pills">
            <Pill 
                text="2 hours"
                onClick={(e) => {
                    modify(2 * 60 * 60);
                    start();
                }}
            />
            <Pill 
                text="1 hour"
                onClick={(e) => {
                    modify(60 * 60);
                    start();
                }}
            />
            <Pill 
                text="30 mins"
                onClick={(e) => {
                    modify(30 * 60);
                    start();
                }}
            />
            <Pill 
                text="15 mins"
                onClick={(e) => {
                    modify(15 * 60);
                    start();
                }}
            />
            <Pill 
                text="5 mins"
                onClick={(e) => {
                    modify(5 * 60);
                    start();
                }}
            />
            <Pill 
                text="3 sec"
                onClick={async (e) => {
                    modify(3);
                    start();
                }}
            />
        </div>
    );
}

export default TimePills;