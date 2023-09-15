import React from 'react';
import { Header } from 'components/header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserList from 'pages/user-list';
import UserDetails from 'pages/user-details';
import Home from 'pages/home';
import { AnimatePresence } from 'framer-motion';
import Error from 'pages/error';

export default function Router(): React.JSX.Element {
    return (
        <BrowserRouter>
            <Header />
            <AnimatePresence>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/list" element={<UserList />}></Route>
                    <Route
                        path="/details/:id"
                        element={<UserDetails />}></Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
}
