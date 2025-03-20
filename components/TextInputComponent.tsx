import React from 'react';
import { useState } from 'react';
import { TextInput,View,Text } from 'react-native';
function TextInputComponent() {
    const [data,setdata]=useState('');
    return (
        <>
        <Text style={{fontSize:20, textAlign:'center',marginTop:20,marginBottom:20}}>
                Data: {data}
              </Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth:1,margin:10,
            padding:10, borderRadius:10,    shadowColor: 'green',
            shadowOffset: {width: -2, height: 4}}}
               placeholder="Enter some text"
               value={data} 
               onChangeText={setdata}
              //  keyboardType='numeric'
               secureTextEntry={false}
               maxLength={100}
              // selection={{start:0,end:3}}
              selectionColor={'red'}
              selectionHandleColor={'green'}
              />
              

        </>
    
        
    );
}

export default TextInputComponent;