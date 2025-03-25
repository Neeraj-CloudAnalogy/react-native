import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import LoginComponent from './LoginComponent';
function FetchDataFlatlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.head}>
        Clothes/Electronics items

      </Text>
      <LoginComponent/>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsVerticalScrollIndicator ={false}
        renderItem={({ item }:{item:any}) => {
          return (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title.length>30 ? item.title.substring(0,20) + '...':item.title}</Text>
                <Text style={styles.description}>{item.title.length>30 ? item.title.substring(0,20) + '...':item.title}</Text>
                <Text style={styles.price}>{"$" + item.price}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  head:{
  fontSize:20,
  fontWeight:"bold",
  padding:10,
  marginLeft:5
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    // flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default FetchDataFlatlist;
