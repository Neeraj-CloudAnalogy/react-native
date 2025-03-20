import React from 'react';
import { View, Text } from 'react-native';
function sections(props: { title: string; children: React.ReactNode }) {
    return (
        <View style={{padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.title}</Text>
      {props.children}
    </View>
    );
}

export default sections;