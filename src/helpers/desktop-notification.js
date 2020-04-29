import { SITE_NAME } from './document';
import Logo from '../assets/logo/logo.png';

/**
 * Request notification from browser
 */
export const requestNotification = () => {
    if (!Notification) {
        console.log('Desktop notifications not available in your browser. Try Chromium.');
        return false;
    }
      
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
};

/**
 * Notify that timer has finished
 */
export const notifyTimerFinished = (timerAction) => {
    if (Notification.permission !== 'granted') {
        requestNotification();
    }
    else {
        var notification = new Notification(SITE_NAME, {
            icon: Logo,
            body: 'Hey there! It is time to stand up and stretch a little bit',
        });

        notification.onclick = function() {
            timerAction.reset();
        };

        notification.onclose = function() {
            timerAction.reset();
        };
    }
}
