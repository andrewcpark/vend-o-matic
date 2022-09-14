import React from 'react';
import ReactDOM, { render } from 'react-dom/client';
window.React = React
import App from './App.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);