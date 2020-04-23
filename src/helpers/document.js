import Numeral from 'numeral';

export const SITE_NAME = 'Remind Me To Stand';

/**
 * Change document title
 * 
 * @param {string} newTitle 
 */
export const changeDocumentTitle = (newTitle) => {
    document.title = newTitle;
};

/**
 * Change document title to reflect the timer
 * 
 * @param {*} seconds 
 */
export const updateDocumentTitleBySecond = (seconds) => {
    const timing = Numeral(seconds).format('00:00:00');

    changeDocumentTitle(`${timing} Left - ${SITE_NAME}`);
};

/**
 * Update document title with extra site name at the back
 * 
 * @param {*} title 
 */
export const updateDocumentTitleWithSiteName = (title) => {
    changeDocumentTitle(`${title} - ${SITE_NAME}`);
};

/**
 * Reset document title
 */
export const resetDocumentTitle = () => {
    changeDocumentTitle(`${SITE_NAME}`);
};