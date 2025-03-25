import React, { useState } from 'react';
import { TextInput, View ,Text, TouchableOpacity} from 'react-native';



function LoginComponent() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    return (
       <View>
        <Text>Time to Login </Text>
        <View>
            <Text>Name:</Text>
            <TextInput value='name' onChangeText={setName} placeholder='Enter your Name'/>
        </View>
        <View>
            <Text>Email:</Text>
            <TextInput value='email' onChangeText={setEmail} placeholder='Enter your Name'/>
        </View>
        <TouchableOpacity>Submit data</TouchableOpacity>
       </View>
    );
}

export default LoginComponent;