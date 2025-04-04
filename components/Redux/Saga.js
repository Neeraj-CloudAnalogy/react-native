import { put, takeEvery } from "redux-saga/effects"
import { USER_LIST ,GET_USER_LIST} from "./Constant";
import { get_user_list } from "./Action";


function* userList(){
    const url ="https://dummyjson.com/users"
    let data =yield fetch(url);
    data =yield data.json();
    console.warn("data in saga", data);
    yield put(get_user_list(GET_USER_LIST, data.users));
    // yha pe humne api se data ko fetch kiya h
    // phir humne usko action me pass kiya h
    // aur phir humne usko reducer me pass kiya h
    // phir humne usko put kiya h
    // put ka matlab h ki ye data ko reducer me pass karega
    // aur reducer me wo data store hoga    
    // aur jab bhi hum isko use karenge to wo reducer se milega
    // ab hum isko use karenge
    // jab bhi hum userList ko call karenge to ye function chalega
    // aur ye function userList ko call karega
}



function* SagaData(){
    yield takeEvery(USER_LIST,userList)
    //takeEvery ka matlab jab bhi user_list action trigger hoga to userList function chalega
    //takeEvery ek generator function hai jo action ko listen karta hai
    // jab bhi action trigger hota hai to ye function chalega
    // aur ye function userList ko call karega;
    

}
export default SagaData 