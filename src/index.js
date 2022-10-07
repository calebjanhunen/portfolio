import React from 'react';
import ReactDom from 'react-dom/client';

import './sass/_animations.scss';
import './sass/_global.scss';

import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
