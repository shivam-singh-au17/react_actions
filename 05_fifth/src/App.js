import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';
import BodyComponent from './components/Body';
import FooterComponent from './components/Footer';

const AppComponent = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </React.Fragment>
    )
}

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<AppComponent />);
