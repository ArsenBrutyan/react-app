import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

export const postsSelector = createSelector(
    (state: RootState) => state.application.posts,
    (posts) => {
        if (!posts.length) {
            return;
        }
        return posts;
    },
);

export const themeModeSelector = createSelector(
    (state: RootState) => state.application.isDarkMode,
    (mode) => mode,
);
