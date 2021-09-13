import React, { useRef } from 'react'

export const SOUND_LIST = {
    bell: '/assets/sound/bell.mp3',
};

const useAlarmSound = () => {
    const audio = useRef(null);

    const playSound = (key) => {
        audio.current = new Audio(SOUND_LIST[key]);
        audio.current.loop = false;
        audio.current.play();
    
        return true;
    };

    const stopSound = () => {
        if(audio.current != null) {
            audio.current.pause();
            audio.current.currentTime = 0;
            audio.current.src = '';
            audio.current = null;
        }
    };

    return { playSound, stopSound };
}

export default useAlarmSound;