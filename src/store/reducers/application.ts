import { AnyAction } from 'redux';
import { initialState } from './initialState';
import { ApplicationState } from 'store/types';
import * as actionTypes from '@/store/actions/actionTypes';

export default function () {
    return function reducer(
        state = initialState,
        action: AnyAction,
    ): ApplicationState {
        switch (action.type) {
            case actionTypes.LOAD_POST_LIST: {
                return {
                    ...state,
                    posts: action.payload.data,
                };
            }
            case actionTypes.UPDATE_POST_LIST: {
                const { post } = action.payload;
                return {
                    ...state,
                    posts: [...state.posts, post],
                };
            }
            case actionTypes.FAKE_REMOVE_POST: {
                const { id } = action.payload;
                const index = state.posts.findIndex((post) => post.id === id);
                state.posts.splice(index, 1);
                return {
                    ...state,
                    posts: [...state.posts],
                };
            }
            case actionTypes.SET_THEME: {
                return {
                    ...state,
                    isDarkMode: !state.isDarkMode,
                };
            }
            default:
                return state;
        }
    };
}
