import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './global.css';
import { StateContextProvider } from './contexts/StateContextProvider';

ReactDOM.render(
    <StateContextProvider>
        <Router>
        <App />

        </Router>

    </StateContextProvider>,
    

 document.getElementById('root')
);