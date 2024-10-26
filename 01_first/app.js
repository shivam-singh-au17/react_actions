const headingOne = React.createElement('h1', {
    id: "h1tagline",
}, 'Hello, Shivam!');

const headingTwo = React.createElement('h2', {
    id: "h2tagline",
}, 'Hello, Singh!');

const container = React.createElement('div', {
    id: "container",
}, [headingOne, headingTwo]);

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(container); 
