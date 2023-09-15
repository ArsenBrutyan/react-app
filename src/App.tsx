import Router from 'Router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialize } from './store/actions';

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return <Router />;
};

export default App;
