import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GreetingPage from './GreetingPage';

const Router = () => {
    return (
        <>
            <Routes>
                <Route paht="/" element={<GreetingPage />} />
            </Routes>
        </>
    )
}

export default Router;