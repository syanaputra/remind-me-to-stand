import ReactGA from 'react-ga';
import { config } from '../config';

const { ANALYTICS_ID, ANALYTICS_DEBUG } = config;

/**
 * Send Timer Event to GA
 * 
 * @param {string} action 
 * @param {string} label 
 * @param {string} value 
 */
export const initializeGA = () => {
    ReactGA.initialize(ANALYTICS_ID, {
        debug: ANALYTICS_DEBUG,
        titleCase: false,
    });

    ReactGA.pageview('/');
};

/**
 * Send Timer Event to GA
 * 
 * @param {string} action 
 * @param {string} label 
 * @param {string} value 
 */
export const sendTimerEvent = (action = '', label = '', value = '') => {
    if(action !== '') {
        let payload = {
            category: 'Timer',
            action: action
        };

        if(label !== '') payload.label = label;
        if(value !== '') payload.value = value;

        ReactGA.event(payload);

        return true;
    }

    return false;
};
