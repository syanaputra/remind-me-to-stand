export const SOUND_LIST = {
    bell: '/assets/sound/bell.mp3',
};

let audio = null;

/**
 * Play sound
 *  
 * @param {string} key 
 */
export const playSound = (key) => {
    audio = new Audio(SOUND_LIST[key]);
    audio.loop = false;
    audio.play();

    return true;
};

/**
 * Stop sound
 */
export const stopSound = () => {
    if(audio != null) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = '';
        audio = null;
    }
};