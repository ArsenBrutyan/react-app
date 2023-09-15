import { IPosts } from 'store/types';
import * as actions from './actionTypes';

export function initialize() {
    return {
        type: actions.INITIALIZE,
    };
}

export function loadPostList(data: IPosts[]) {
    return {
        type: actions.LOAD_POST_LIST,
        payload: { data },
    };
}

export function removePost(id: number | undefined) {
    return {
        type: actions.REMOVE_POST,
        payload: { id },
    };
}

export function addPost(post: IPosts) {
    return {
        type: actions.SET_POST,
        payload: { post },
    };
}

// As we don't have server and it is not updated I need to create this function
export function updatePosts(post: IPosts | undefined) {
    return {
        type: actions.UPDATE_POST_LIST,
        payload: { post },
    };
}

export function fakeRemove(id: number) {
    return {
        type: actions.FAKE_REMOVE_POST,
        payload: { id },
    };
}

export function changeTheme() {
    return {
        type: actions.SET_THEME,
    };
}
