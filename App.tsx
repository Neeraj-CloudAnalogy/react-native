
import React, { Children }  from 'react';
import {useState}  from 'react';
import Home from './components/Home';
import ScrollView1 from './components/ScrollView1';
import TextData from './components/TextData';
import Sections from './components/sections';
import Buttonandpressable from './components/Buttonandpressable';
import ImageComponent from './components/ImageComponent';
import SwitchComponent from './components/SwitchComponet';
import TextInputComponent from './components/TextInputComponent';
import Sectionlistcomponent from './components/Sectionlistcomponent';

import {
  
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  useColorScheme,
  View,
  ScrollView,
  Pressable,
  Switch,
  TextInput,
  Alert,
  ActivityIndicator,
 
} from 'react-native';

 

function App(): React.JSX.Element {
   const [hide,sethide]=useState(true);
   const [colorx,setcolor]=useState('white');
   
   
  //  const [act,setact]=useState(true);

  const safePadding = '5%';

// const Activity=()=>{
//   setact(true)
//   setTimeout(()=>{
//     setact(false)
//   }
//   ,2000)
// }

const Userdata=()=>{
  return(
<View>
  <Text style={styles.Text}>hlo world</Text> 
</View>
  )
 }
 const Backgound=()=>{
  if(colorx==='white'){
   setcolor('black')
  }else{
    setcolor('white')
  }
  
 }

 const Hidestatus=()=>
  sethide(!hide)

  return (
      <>
      <ScrollView style={[styles.container,{backgroundColor:colorx}]} >
       <StatusBar
       animated={true}
        backgroundColor="lightblue"
        barStyle='dark-content'
         hidden={hide}
       />


      <ScrollView1/>

       
       <TextData/>
        <Buttonandpressable/>
        <ImageComponent/>

        <Sections title="custom component">
          <View>
            <Text>neeraj sharma</Text>
            <Text>Gaurav sharma</Text>
          </View>

        </Sections>

        <SwitchComponent/>
         
        <TextInputComponent/>
        
         {/* <ActivityIndicator size={50} 
          color ="red" 
          animating={true}
          hidesWhenStopped={false}
          /> */}
          <Sectionlistcomponent/>

      
      <View>
       
        
          
        
        <Button title="change statusbar" onPress={Hidestatus}/>
      </View>
      <View style={{marginTop:20}}>
        
        <Button title="change background color"  onPress={Backgound}/>
      </View>
    
     <Home/>
        {/* <View>
          <Button title='activity indicator'  onPress={Activity}/>
        </View> */}
         
      </ScrollView>
      </>
    
  );
};
const styles =StyleSheet.create({
  container:{
   
    flex:1,
    
    
    borderRadius:50,
    borderColor:'red',
    // justifyContent:'center',
    // alignItems:'center',
    
    gap:10,
    
  },
  
  Text:{
    color:'red',
    fontSize:20,
    textAlign:'center',
    paddingTop:10,
  },
  
})
 
export default App;
