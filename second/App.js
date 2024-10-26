import React from 'react';
import ReactDOM from 'react-dom/client';

const headingOne = React.createElement('h1', {
    id: "h1tagline",
    key: "1"
}, 'Hello, Shivam Singh is here!');

const headingTwo = React.createElement('h2', {
    id: "h2tagline",
    key: "2"
}, 'Hello, Singh!');

const container = React.createElement('div', {
    id: "container",
}, [headingOne, headingTwo]);

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(container); 
