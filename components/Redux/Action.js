import { ADD_TO_CART } from "./Constant";
import { REMOVE_TO_CART } from "./Constant";
import { USER_LIST } from "./Constant"; 
export function add_to_cart (item){
 return{
    type:ADD_TO_CART,
    data:item
 }
} 

export function remove_to_cart (item){
   return{
      type:REMOVE_TO_CART,
      data:item
   }
}
 export function user_list(){
   return{
      type:USER_LIST,
   }
}  

export function get_user_list(GET_USER_LIST, data){
   return{
      type:GET_USER_LIST,
      data:data
   }
}
