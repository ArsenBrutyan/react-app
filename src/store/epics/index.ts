import { initEpics } from 'store/epics/init-epics';

export const getApplicationEpics = () => {
    return [...initEpics];
};
