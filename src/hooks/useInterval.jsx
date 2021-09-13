import React, { useRef } from 'react'

const useInterval = () => {
    const interval = useRef(null);

    const setup = (callback, delay) => {
        if (!interval.current) {
            interval.current = setInterval(callback, delay);
        }
    };

    const clear = () => {
        clearInterval(interval.current);
        interval.current = null;
    }

    return { interval, setup, clear };
}

export default useInterval;