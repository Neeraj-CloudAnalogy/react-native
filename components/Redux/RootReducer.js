// bahut saare reducer ho skate h to hum ek parentreducer banate h jiske under child reducer hote h
import { combineReducers } from "redux";
import { reducer } from "./Reducer";
import { apireducer } from "./Reducer";
export default combineReducers({
    reducer,
    apireducer
    
    // yha pe humne reducer ko import kiya h
    // aur isko combineReducers me pass kiya h
    // ab hum isko use karenge
    // jab bhi hum reducer ko use karenge to wo combineReducers se milega
});