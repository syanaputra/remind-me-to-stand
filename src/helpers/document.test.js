import { changeDocumentTitle, updateDocumentTitleBySecond, updateDocumentTitleWithSiteName, resetDocumentTitle } from './document';
import { config } from '../config';
const { SITE_NAME } = config;

test('helper: changeDocumentTitle()', () => {
    changeDocumentTitle('test123');
    expect(document.title).toBe('test123');
});

test('helper: updateDocumentTitleBySecond()', () => {
    updateDocumentTitleBySecond('1');
    expect(document.title).toEqual(expect.stringContaining('0:00:01'));
});

test('helper: updateDocumentTitleWithSiteName()', () => {
    updateDocumentTitleWithSiteName('test');
    expect(document.title).toEqual(expect.stringContaining('test'));
    expect(document.title).toEqual(expect.stringContaining(SITE_NAME));
});

test('helper: resetDocumentTitle()', () => {
    resetDocumentTitle();
    expect(document.title).toEqual(SITE_NAME);
});

