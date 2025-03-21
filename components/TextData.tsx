import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function TextData() {
    const name ="neeraj sharma"
let age ="App Developer";
    return (
        <View>
<Text style={styles.Text}>Hello {name}</Text>
            <Text style={[styles.Text]}>({age}) </Text>
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
   
        </View>
        
       );
}
const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        color: 'purple',
        textAlign: 'center',
        fontWeight:"bold"
    },
    mainbox:{
        display:'flex',
       
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
        
       height:400,
       width:400,
       borderRadius:3000,
       backgroundColor:'lightblue',
   
     },
     box1:{
       height:70,
       width:70,
       margin:5,
       borderRadius:40,
      
       backgroundColor:'orange',
       justifyContent:'center',
       alignItems:'center',
     },
     box2:{
       height:70,
       width:70,
       margin:5,
       borderRadius:40,
       backgroundColor:'red',
       justifyContent:'center',
       alignItems:'center',
     },box3:{
       height:70,
       width:70,
       margin:5,
       borderRadius:40,
       backgroundColor:'green',
       justifyContent:'center',
       alignItems:'center',
     },
});

export default TextData;