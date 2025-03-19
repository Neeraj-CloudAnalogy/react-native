
import React, { Children }  from 'react';
import {useState}  from 'react';
import Home from './components/Home';
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
  ActivityIndicator
  
} from 'react-native';
 

function App(): React.JSX.Element {
   const [hide,sethide]=useState(true);
   const [colorx,setcolor]=useState('black');
   const [data,setdata]=useState('');
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(!isEnabled);
  //  const [act,setact]=useState(true);

  const safePadding = '5%';
const name ="neeraj sharma"
let age =25;
// const Activity=()=>{
//   setact(true)
//   setTimeout(()=>{
//     setact(false)
//   }
//   ,2000)
// }

const Section = (props: { title: string; children: React.ReactNode; }) => {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.title}</Text>
      {props.children}
    </View>
  );
};

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
   
      <ScrollView style={[styles.container,{backgroundColor:colorx}]} >
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

        <Section title="custom component">
          <View>
            <Text>neeraj sharma</Text>
            <Text>Gaurav sharma</Text>
          </View>

        </Section>
         <Text style={styles.Text}>Status:
            {isEnabled ? 'Enabled' : 'Disabled'}
         </Text>
        <Switch
        style={{marginLeft:100, width:100 , height:100}}
  onValueChange={setIsEnabled}
  value={isEnabled}
  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
  
/>
        
        
        <View style={{gap:10,marginTop:20,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'}}
          style={{width: 100, height: 100, borderRadius:100,opacity:0.5}}
          onLoad={(()=>console.log('image loaded'))}
          />
    <Image source={require('./assets/photo1.jpeg')}
          style={{width: 200, height: 300}}
          resizeMode='contain'/>
         
         {/* <ActivityIndicator size={50} 
          color ="red" 
          animating={true}
          hidesWhenStopped={false}
          /> */}

      </View>
      <View>
        <Text style={[styles.Text]}>Age: {age} </Text>
        
          
        
        <Button title="change statusbar" onPress={Hidestatus}/>
      </View>
      <View style={{marginTop:20}}>
        
        <Button title="change background color"  onPress={Backgound}/>
      </View>
     <Userdata/>
     <Home/>
      <Userdata/>

      <Text style={styles.Text}>Data: {data}</Text>
     
      

     <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       placeholder="Enter some text"
       value={data} 
       onChangeText={setdata}
      //  keyboardType='numeric'
       secureTextEntry={false}
       maxLength={10}
      // selection={{start:0,end:3}}
      selectionColor={'red'}
      selectionHandleColor={'green'}
      
       
        
      />
        <Userdata/>
        <Userdata/>

        {/* <View>
          <Button title='activity indicator'  onPress={Activity}/>
        </View> */}
         <Pressable style={ styles.press}
         onHoverIn={()=>Alert.alert('Hlo  ','You have pressed the button')}
         onHoverOut={()=>console.log('hover out')}
         onPress={()=>Alert.alert('Hlo user ','You have pressed the button')}
         
         >
                <Text style={styles.Text}>Hii I am Pressbale </Text>
            </Pressable>

            <Pressable style={ styles.press}
         
         onLongPress={()=>Alert.alert('Hlo user ','You have long  pressed the button')}
         onPressOut={()=>Alert.alert('Hlo user ','You have been out from   pressing the button')}
         
         >
                <Text style={styles.Text}>Hii I am Pressbale </Text>
            </Pressable>
        
            <TouchableOpacity style={ styles.press}
            activeOpacity={0.5}
           
         
         
         >
                <Text style={styles.Text}>Hii I am TouchableOpacity </Text>
            </TouchableOpacity>
    
      </ScrollView>
     
     
   
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
  press:{
    backgroundColor:"yellow", 
    borderColor:"red",
    borderWidth:3, 
    marginLeft:80,
    borderRadius:10, 
    padding:10, 
    margin:10,
    width:"50%",
    justifyContent:'center',
    alignItems:'center',
    shadowColor: 'green',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 90,
    elevation:90
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
