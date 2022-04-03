import React from 'react';
import Router from '../Router';
import AuthProvider from './Context/AuthProvider';


const Wrapper = () => {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    )
}

export default Wrapper;