import { Epic, ofType } from 'redux-observable';
import { mergeMap, of, take } from 'rxjs';
import * as actionsTypes from 'store/actions/actionTypes';

export const initEpics: Epic[] = [
    (action$) =>
        action$.pipe(
            ofType(actionsTypes.INITIALIZE),
            take(1),
            mergeMap(({ payload }) => {
                console.log('initialize');
                console.log(payload);
                return of();
            }),
        ),
];
