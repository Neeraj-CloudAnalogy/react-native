import React from 'react';
import {ScrollView, Text} from 'react-native';
import PhoneItem from './PhoneItem';
import Header from './Header';
function PhoneList() {
  const item = [
    {
      Mobile: 'samsung',
      Color: 'white',
      Price: 2000,
    },
    {
      Mobile: 'Apple',
      Color: 'red',
      Price: 2000,
    },
    {
      Mobile: 'realme',
      Color: 'black',
      Price: 2000,
    },
    {
      Mobile: 'Redmi',
      Color: 'blue',
      Price: 2000,
    },
    {
        Mobile: 'Apple',
        Color: 'red',
        Price: 2000,
      },
      {
        Mobile: 'Apple',
        Color: 'red',
        Price: 2000,
      },
      {
        Mobile: 'Apple',
        Color: 'red',
        Price: 2000,
      },
  ];
  return (
    <>
   <Header/>
    <ScrollView>
      {
      item.map(x => <PhoneItem item={x} />
      )
      }
    </ScrollView>
    </>
    
  );
}

export default PhoneList;
