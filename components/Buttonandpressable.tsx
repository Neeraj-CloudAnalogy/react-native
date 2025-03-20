import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, TouchableOpacity } from 'react-native';
function Buttonandpressable() {
    return (
        <>
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
            
        </>
        
    );
}
const styles = StyleSheet.create({
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
    
})
export default Buttonandpressable;
