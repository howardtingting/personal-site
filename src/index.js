import React from 'react';
import ReactDOM from 'react-dom';
import './css/components/customKeyframes.css';
import App from './App';
document.body.style.overflow = 'hidden';
//document.body.style.overflowY='hidden';
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)), document.getElementById('root'));
