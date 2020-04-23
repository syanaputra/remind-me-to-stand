import React from 'react';
import classnames from 'classnames';
import TimerInput from './TimerInput';
import '../../styles/scss/timer.scss';
import { convertTimeToSeconds, convertSecondsToTime } from '../../helpers/time';

const DEFAULT_TIME_INPUT = '00:00:00';

const Timer = (props) => {
    const { data, timerAction } = props;
    const { start, modify } = timerAction;
    const { timeLeft, status } = data;
    const active = timeLeft > 0;
    const warning = timeLeft > 0 && timeLeft <= 5;

    const onChangeTime = async (e) => {
        await modify(Number(convertTimeToSeconds(e.target.value)));
    };

    const submitTime = async (e) => {
        if(timeLeft > 0) {
            await start();
        }
    };

    return (
        <div className="timer-container">
            <div className={classnames('timer', status === 'finished' && 'timer--finished', active && !warning && 'timer--active', warning && 'timer--warning')}>
                <div className="timer__body">
                    <div className="timer__notification">
                        <span>time's up</span>
                    </div>
                    <div className="timer__text">
                        <TimerInput
                            onChange={onChangeTime}
                            onBlur={submitTime}
                            value={convertSecondsToTime(timeLeft) || DEFAULT_TIME_INPUT} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;