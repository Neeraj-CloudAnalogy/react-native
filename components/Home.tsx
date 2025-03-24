import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, Button, ScrollViewComponent } from 'react-native';
import TextData from './TextData';
import ImageComponent from './ImageComponent';
import FetchDataFlatlist from './FetchDataFlatlist';
import ScrollView1 from './ScrollView1'

function Home({navigation}:{navigation:any}) {
  

  const [hide, setHide] = useState(false);
  const [color, setColor] = useState('white');

  const toggleBackgroundColor = () => {
    setColor((prevColor) => (prevColor === 'white' ? 'black' : 'white'));
  };

  const toggleStatusBar = () => {
    setHide((prevHide) => !prevHide);
  };

  return (

    <View style={styles.container}>
      {/* <Text style={{color:'blue'}}>name</Text> */}
      <ScrollView style={{ backgroundColor: color, gap:10 }} showsVerticalScrollIndicator={false}>
     
     
       <ScrollView1/>
         <TextData/>
      <ImageComponent/>
        
      <View style={{gap:10}}>
     <Button title='GO TO PROFILE SECTION' onPress={()=>{
         navigation.navigate('Profile') ;
       
        }}/>

         <Button title='GO TO CONTACT SECTION' onPress={()=>{
         navigation.navigate('Contact') ;
       
        }}/>

     </View>
     <Text style={styles.text}>Hide the Status Bar</Text>
        <StatusBar
        animated={true}
        backgroundColor="lightblue"
        barStyle="dark-content"
        hidden={hide}
      />

        <Button title="Hide StatusBar" onPress={toggleStatusBar} />
        <Text style={styles.text}>Change BackGround color</Text>
        

        
        <Button title="Change Background Color" onPress={toggleBackgroundColor} />
      
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  text: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Home;
