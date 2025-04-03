import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import PhoneItem from './PhoneItem';
import Header from './Header';

function PhoneList({ navigation }:{navigation :any}) {  
  const item = [
    { Mobile: 'samsung', Color: 'white', Price: 2000 },
    { Mobile: 'Apple', Color: 'red', Price: 2000 },
    { Mobile: 'realme', Color: 'black', Price: 2000 },
    { Mobile: 'Redmi', Color: 'blue', Price: 2000 },
    { Mobile: 'honor', Color: 'red', Price: 2000 },
    { Mobile: 'oppo', Color: 'red', Price: 2000 },
    { Mobile: 'nothing', Color: 'red', Price: 2000 },
  ];

  return (
    <>
      <Button title="Go to API Calling" onPress={() => navigation.navigate("ApiCalling")} />
      <Header />
      <ScrollView>
        {item.map((x, index) => <PhoneItem key={index} item={x} />)}
      </ScrollView>
    </>
  );
}

export default PhoneList;
