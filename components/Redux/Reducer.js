
//basic reducer create kiya h
//iske under to paramter store hote h => state and action
// state ke under data kya rahega and action ke under return value aayegi
// jo add_to_cart ke under thi example type and data
// phir hum switch case use karte h kyuki data change hota h to efficent practose h as compare to if else
import { ADD_TO_CART, REMOVE_TO_CART, USER_LIST } from './Constant';
import { GET_USER_LIST } from './Constant';

const initialState = [];
const apiIntialState = [];

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


export const apireducer =(state=apiIntialState, action)=>{
  switch (action.type){
    case GET_USER_LIST:
        return  action.data
      // yha pe humne api se aane wale data ko state me store kiya h
      // ab hum isko use karenge
      // jab bhi hum api se data laenge to wo state me store hoga
      // aur jab bhi hum isko use karenge to wo state se milega
    default:
      return state;

  }

}