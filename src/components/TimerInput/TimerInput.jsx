import React from 'react';
import Cleave from 'cleave.js/react';
import '../../styles/scss/timer.scss';

const TimerInput = (props) => {
    
    const formatValue = (value) => {
        const newValue = value.replace(/:/ig, "");
        let hours = newValue.substr(0,2) || '00';
        let minutes = newValue.substr(2,2) || '00';
        let seconds = newValue.substr(4,2) || '00';

        if(Number(minutes) > 60) minutes = '60';
        if(Number(seconds) > 60) seconds = '60';

        return `${hours}:${minutes}:${seconds}`;
    };

    const onChange = (e) => {
        e.target.value = formatValue(e.target.value);

        if(props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <Cleave
            {...props}
            placeholder="00:00:00"
            options={{
                time: true,
                timePattern: ['h', 'm', 's']
            }}
            value={props.value || '00:00:00'}
            onChange={onChange}
            onClick={props.onClick}
        />
    );
}

export default TimerInput;