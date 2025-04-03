
//basic reducer create kiya h
//iske under to paramter store hote h => state and action
// state ke under data kya rahega and action ke under return value aayegi
// jo add_to_cart ke under thi example type and data
// phir hum switch case use kaete h kyuki data change hota h to efficent practose h as compare to if else
import { ADD_TO_CART, REMOVE_TO_CART } from './Constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.some((item) => item.Mobile === action.data.Mobile)) {
        return state; 
      }
      return [...state, action.data];

    case REMOVE_TO_CART:
      return state.filter((item) => item.Mobile !== action.data.Mobile);

    default:
      return state;
  }
};
