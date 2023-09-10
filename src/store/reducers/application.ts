import { ApplicationState } from 'store/types';
import { initialState } from './initialState';
import { AnyAction } from 'redux';

export default function () {
    return function reducer(
        state = initialState,
        action: AnyAction,
    ): ApplicationState {
        switch (action.type) {
            default:
                return state;
        }
    };
}
