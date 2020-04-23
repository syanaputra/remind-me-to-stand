import { convertTimeToSeconds, convertSecondsToTime } from './time';

test('helper: convertTimeToSeconds()', () => {
    expect(convertTimeToSeconds('')).toBe(0);
    expect(convertTimeToSeconds('00:00:01')).toBe(1);
    expect(convertTimeToSeconds('00:01:00')).toBe(60);
    expect(convertTimeToSeconds('01:00:00')).toBe(3600);
    expect(convertTimeToSeconds('00:59:59')).toBe((59 * 60) + 59);
});

test('helper: convertSecondsToTime()', () => {
    expect(convertSecondsToTime(0)).toBe('00:00:00');
    expect(convertSecondsToTime(1)).toBe('00:00:01');
    expect(convertSecondsToTime(60)).toBe('00:01:00');
    expect(convertSecondsToTime(3600)).toBe('01:00:00');
    expect(convertSecondsToTime((59 * 60) + 59)).toBe('00:59:59');
});