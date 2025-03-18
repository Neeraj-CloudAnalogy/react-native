
import React  from 'react';
import {useState}  from 'react';

import {
  
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  useColorScheme,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  
} from 'react-native';
 

function App(): React.JSX.Element {
   const [hide,sethide]=useState(true);
   const [colorx,setcolor]=useState('black');
   const [data,setdata]=useState('');

  const safePadding = '5%';
const name ="neeraj sharma"
let age =25;
const Userdata=()=>{
  return(
<View>
  <Text style={styles.Text}>hlo world</Text> 
</View>
  )
 }
 const Backgound=()=>{
  if(colorx==='black'){
   setcolor('white')
  }else{
    setcolor('black')
  }
  
 }

 const Hidestatus=()=>
  sethide(!hide)
 

  return (
   
      <SafeAreaView style={[styles.container,{backgroundColor:colorx}]} >
       <StatusBar
       animated={true}
        backgroundColor="blue"
        barStyle='dark-content'
         hidden={hide}
       />
          
  
       
        <Text style={styles.Text}>Hello {name}</Text>
        <View style={styles.mainbox}>
          <View style={styles.box1}>
            <Text>
              box1
            </Text>

          </View>
          <View style={styles.box2}>
            <Text>
              box2
            </Text>

          </View>
          <View style={styles.box3}>
            <Text>
              box3
            </Text>

          </View>
        </View>
        <View style={{gap:10,marginTop:20,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'}}
          style={{width: 100, height: 100, borderRadius:100,opacity:0.5}}
          onLoad={(()=>console.log('image loaded'))}
          />
    <Image source={require('./assets/photo1.jpeg')}
          style={{width: 200, height: 300}}
          resizeMode='contain'/>
         
        

      </View>
      <View>
        <Text style={[styles.Text]}>Age: {age} </Text>
        <Button title="change statusbar" onPress={Hidestatus}/>
      </View>
      <View style={{marginTop:20}}>
        
        <Button title="change background color"  onPress={Backgound}/>
      </View>
     <Userdata/>
     <Userdata/>
      <Userdata/>

      <Text style={styles.Text}>Data: {data}</Text>
     
      

     <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       placeholder="Enter some text"
       value={data} 
       onChangeText={(data)=>setdata(data)}
       
        
      />
    
      </SafeAreaView>
     
     
   
  );
};
const styles =StyleSheet.create({
  container:{
   
    flex:1,
    
    borderWidth:10,
    borderRadius:10,
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
  mainbox:{
     display:'flex',
     marginLeft:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
     
    height:200,
    width:200,
    backgroundColor:'yellow',

  },
  box1:{
    height:50,
    width:50,
   
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
  },
  box2:{
    height:50,
    width:50,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },box3:{
    height:50,
    width:50,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
  },
})
 
export default App;
