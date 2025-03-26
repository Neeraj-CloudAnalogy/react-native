import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,BackHandler, Alert } from 'react-native';

const LoginPage = ({navigation}:{navigation:any}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both username and password');
    } else {
      Alert.alert('Success', `Welcome, ${username}`);
    }
  };


  const BackAction =()=>{
          Alert.alert("Hold on!" ,"Are you really want to go back ",[
            {
              text: 'No',
              onPress:()=>null,

            },
            {
              text: 'Yes',
              onPress:()=>navigation.goBack(),

            }
          ]);  
           return true;
  
      }
  
      const backHandler =BackHandler.addEventListener(
          "hardwareBackPress",BackAction
      )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginPage;
