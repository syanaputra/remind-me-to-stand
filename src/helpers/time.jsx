import Numeral from 'numeral';

/**
 * Convert time string hh:mm:ss to seconds
 * 
 * @param {string} timeInput 
 * @returns {int} hh:mm:ss
 */
export const convertTimeToSeconds = (timeInput) => {
    if(!timeInput) return 0;

    const tmp = timeInput.split(":");
    const hours = Number(tmp[0]) || 0;
    const minutes = Number(tmp[1]) || 0;
    const seconds = Number(tmp[2]) || 0;

    return (hours * 3600) + (minutes * 60) + seconds;
};

/**
 * Convert seconds to hh:mm:ss
 * 
 * @param {string} timeInput 
 * @returns {string} hh:mm:ss
 */
export const convertSecondsToTime = (timeInput) => {
    if(!timeInput) return '00:00:00';

    let time = Number(timeInput);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${Numeral(hours).format('00')}:${Numeral(minutes).format('00')}:${Numeral(seconds).format('00')}`;
};