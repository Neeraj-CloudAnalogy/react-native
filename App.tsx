import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home'; 
import Profile from './components/Profile';
import Contact from './components/Contact';
import { Text, View, Button } from 'react-native';
import Stacknavigator from './components/Stacknavigator';
import DrawerComponent from './components/DrawerComponet';
import LoginPage from './components/LoginPage';
import OpenAndCloseDrawer from './components/OpenAndCloseDrawer';
import ModalComponent from './components/ModalComponent';
import SignupComponent from './components/SignupComponent';
import axios, { Axios } from 'axios';



function App(): React.JSX.Element {
const apiurl ='http://10.0.2.2:3000/posts'
const [arr ,setarr] =useState([]);
const [arr1 ,setarr1] =useState([]);
const [arr2 ,setarr2] =useState([]);
const [arr3 ,setarr3] =useState([]);

const getreqapi =async ()=>{
  try {
    const response =await fetch(apiurl,{
      method:"GET",
      headers :{
        "Content-Type": "application/json",
      },
    })
    const data =await response.json();
   setarr(data);
  
  } catch (error) {
    console.log("error is their",error)
  }
  
 
}


const putreqapi =async (postid:number)=>{
  try {
    const updatedvalue ={
     title:"data is updated"
    }
    const response =await fetch(`http://10.0.2.2:3000/posts/${postid}`,{
      method:"PUT",
      headers :{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(updatedvalue)
    })
    const data =await response.json();
   setarr1(data);
  
  } catch (error) {
    console.log("error is their",error)
  }
  
 
}



const getreqapifromaxios =async ()=>{
  try {
    const response =await axios.get(apiurl)
    setarr1(response.data);
  
  } catch (error) {
    console.log("error is their",error)
  }
  
 
}


const postreq=async()=>{
  try {
    const data ={
      id: 3,
     title: "react native",
     views: 600 
    }
    const response=await fetch(apiurl,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
     body:JSON.stringify(data)
    });
    const responseData =await response.json();
    setarr2(responseData);


    
  } 
  catch (error) {
    console.log("error is their",error)
  }
 
}

const postreqbyaxios=async()=>{
  try {
    const data ={
      id: 4,
     title: "react native axioes",
     views: 800 
    }
    const response=await axios.post(apiurl,data)
    
    setarr3(response.data);


    
  } 
  catch (error) {
    console.log("error is their",error)
  }
 
}

  return (
  <>
 <Text>hlo i am using api</Text>
 
  {arr.map((val:any)=>{
    return (
      <>
    <Text>
      {val.id}
      {val.title}
      {val.views}
    </Text>
      </>
    )
})
 }

{arr1.map((val:any)=>{
    return (
      <>
    <Text>
      {val.id}
      {val.title}
      {val.views}
    </Text>
      </>
    )
})
 }

{/* {arr3.map((val:any)=>{
    return (
      <>
    <Text>
      {val.id}
      {val.title}
      {val.views}
    </Text>
      </>
    )
})
 } */}
   <Button title='call api from axios' onPress={ getreqapifromaxios}/>
   <Button title='call api from fetch' onPress={ getreqapi}/>
   <Button title='push data to server using fetch' onPress={postreq}/>
   <Button title='push data to server using axios' onPress={postreqbyaxios}/>
   <Button title='put data updated to server using fetch' onPress={()=>putreqapi(2)}/>
  </>
 
  
   
    
  );
}




export default App;