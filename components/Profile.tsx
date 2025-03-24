import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Profile({navigation}:{navigation:any}) {
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.title}>Hlo, this is my Profile Page</Text>
      <Button
        title="GO TO HOME SECTION"
        onPress={() => {
          navigation.goBack(); 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
    backgroundColor: '#f5f5f5', 
    padding: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 20, 
  },
});

export default Profile;
