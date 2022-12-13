import React from 'react';
import Router from '../Router';
import AuthProvider from './Context/AuthProvider';
//import { LogBox } from 'react-native';

const Wrapper = () => {
   // LogBox.ignoreLogs(['Remote debugger']);
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    )
}

export default Wrapper;