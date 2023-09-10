import * as actions from './actionTypes';

export function initialize() {
    return {
        type: actions.INITIALIZE,
        payload: null,
    };
}
