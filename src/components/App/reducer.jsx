export const initialState = {
    timeLeft: 0,
    status: 'inactive',
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return {
                ...state,
                status: 'active'
            };
        case 'PAUSE_TIMER':
            return {
                ...state,
                status: 'paused'
            };
        case 'FINISH_TIMER':
            return {
                ...state,
                timeLeft: 0,
                status: 'finished'
            };
        case 'RESET_TIMER':
            return {
                ...state,
                timeLeft: 0,
                status: 'inactive'
            };
        case 'MODIFY_TIME':
            return {
                ...state,
                timeLeft: action.value,
                status: 'paused'
            };
        case 'SET_TIME':
            return {
                ...state,
                timeLeft: action.value,
                status: 'active'
            };
        case 'REDUCE_TIME_BY_SECOND':
            return {
                ...state,
                timeLeft: state.timeLeft - 1,
            };
        default:
            throw new Error('Unknown Action Type');
    }
};