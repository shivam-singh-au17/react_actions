import React from 'react';
import ReactDOM from 'react-dom/client';

const LogoComponent = () => (
    <a href="/">
        <img className='logo' src="https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg" alt="logo" />
    </a>
)

const HeaderComponent = () => {
    return (
        <>
            <div className="header">
                <LogoComponent />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const restaurantList = [
    {
        name: 'Burger King',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'McDonald\'s',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.0',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Wendy\'s',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Subway',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Pizza Hut',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Papa John\'s',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Domino\'s Pizza',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Taco Bell',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Mcdonald\'s',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.0',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    },
    {
        name: 'Wendy\'s',
        img: 'https://trademaklogos.s3.ap-south-1.amazonaws.com/5653883.jpeg',
        address: '221B Baker Street, London',
        rating: '4.5',
        contact: '020 7946 5896',
        openingHours: '10 AM - 9 PM',
        cuisine: ['Fast Food', 'American', 'Burger']
    }
]

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            {restaurantList.map((restaurant) => (
                <div key={restaurant.name} className="restaurant-card-item">
                    <img src={restaurant.img} alt={restaurant.name} />
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.address}</p>
                    <p>Rating: {restaurant.rating}</p>
                    <p>Contact: {restaurant.contact}</p>
                    <p>Opening Hours: {restaurant.openingHours}</p>
                    <p>Cuisine: {restaurant.cuisine.join(', ')}</p>
                </div>
            ))}
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="body">
            <RestaurantCard />
        </div>
    )
}

const FooterComponent = () => {
    return (
        <div className="footer">
            <p>�� 2023 Trademak. All rights reserved.</p>
        </div>
    )
}

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
