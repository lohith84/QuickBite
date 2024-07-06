import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [visibleItems, setVisibleItems] = useState(8);

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
  };

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.slice(0, visibleItems).map((item) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem 
                key={item._id} 
                image={item.image} 
                name={item.name} 
                desc={item.description} 
                price={item.price} 
                id={item._id} 
              />
            );
          }
          return null;
        })}
      </div>
      {visibleItems < food_list.length && (
        <button onClick={handleShowMore} className='show-more-button'>
          Show More
        </button>
      )}
    </div>
  );
};

export default FoodDisplay;
