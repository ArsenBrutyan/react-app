import { Epic, ofType } from 'redux-observable';
import { mergeMap, of } from 'rxjs';
import * as actionsTypes from 'store/actions/actionTypes';
import { fakeRemove, loadPostList, updatePosts } from 'store/actions';
import { IPosts } from 'store/types';

export const initEpics: Epic[] = [
    (action$) =>
        action$.pipe(
            ofType(actionsTypes.INITIALIZE),
            mergeMap(async () => {
                try {
                    const postListResponse = await fetch(
                        'https://jsonplaceholder.typicode.com/posts',
                    );

                    const response: IPosts[] = await postListResponse.json();
                    return response;
                } catch {
                    return [];
                }
            }),
            mergeMap((data) => {
                return of(loadPostList(data));
            }),
        ),

    (action$) =>
        action$.pipe(
            ofType(actionsTypes.SET_POST),
            mergeMap(async (action) => {
                try {
                    const { post } = action.payload;
                    const postListResponse = await fetch(
                        'https://jsonplaceholder.typicode.com/posts',
                        {
                            method: 'POST',
                            body: JSON.stringify(post),
                            headers: {
                                'Content-type':
                                    'application/json; charset=UTF-8',
                            },
                        },
                    );

                    const response: IPosts = await postListResponse.json();
                    return response;
                } catch {
                    return;
                }
            }),
            mergeMap((data) => {
                return of(updatePosts(data));
            }),
        ),

    (action$) =>
        action$.pipe(
            ofType(actionsTypes.REMOVE_POST),
            mergeMap(async (action) => {
                const { id } = action.payload;
                try {
                    const postListResponse = await fetch(
                        `https://jsonplaceholder.typicode.com/posts/${id}`,
                        {
                            method: 'DELETE',
                        },
                    );
                    // As server is not updated I will id
                    if (postListResponse.status === 200) {
                        return id;
                    }
                } catch {
                    return;
                }
            }),
            mergeMap((id) => {
                return of(fakeRemove(id));
            }),
        ),
];
