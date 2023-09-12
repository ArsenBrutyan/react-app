import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path="/home" element={<h1>Home Page</h1>}></Route>
            <Route path="/list" element={<h1>User List Page</h1>}></Route>
            <Route path="/details" element={<h1>User Details Page</h1>}></Route>
            <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
    );
}
