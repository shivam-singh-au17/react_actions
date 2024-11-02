import { restaurantListData } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const BodyComponent = () => {
    const [searchValue, setSearchValue] = useState('');
    const [restaurantList, setRestaurantList] = useState(restaurantListData);

    const filteredRestaurants = (searchValue, restaurantList) => {
        return restaurantList.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    return (
        <div className="body">
            <div className="search-box">
                <input
                    className="restaurant-list"
                    type="text"
                    placeholder="Search for a restaurant"
                    value={searchValue}
                    onChange={(e) => {
                        // e.target.value => What the user types in the search bar
                        setSearchValue(e.target.value)
                        setRestaurantList(restaurantListData)
                    }}
                />
                <button className="search-btn" onClick={
                    () => {
                        const data = filteredRestaurants(searchValue, restaurantList);
                        setRestaurantList(data);
                    }
                }>Search </button>
            </div>
            <div className="restaurant-card">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.name} restaurant={restaurant} />
                    ))
                }
            </div>

        </div>
    )
}

export default BodyComponent;
