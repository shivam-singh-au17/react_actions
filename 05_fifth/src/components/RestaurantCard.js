const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card-item">
            <img src={restaurant.img} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Contact: {restaurant.contact}</p>
            <p>Opening Hours: {restaurant.openingHours}</p>
            <p>Cuisine: {restaurant.cuisine.join(', ')}</p>
        </div>
    )
}

export default RestaurantCard;
