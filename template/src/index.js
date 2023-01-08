/**
 * Import the React JavaScript library.
 */
import React from 'react';

/**
 * Import the react-dom module that handles rendering for React
 */
import ReactDOM from 'react-dom/client';

/**
 * Import the application entry point.
 */
import Application from './Application';

import './assets/index.css'

/**
 * Define the root element for react-dom.
 */
const ROOT = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Build the application on start.
 */
const build = () => {

    ROOT.render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    );
}

// Start the application.
build();