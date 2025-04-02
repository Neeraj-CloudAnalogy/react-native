import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { add_to_cart } from './Redux/Action';
import {useDispatch} from 'react-redux'
function PhoneItem(props: any) {
  const x = props.item;
  const dispatch=useDispatch();

  const HandleCartItem=(x:any)=>{
    //  dispatch(add_to_cart(x))
    

  }
  return (
    <View style={styles.container}>
      <Text style={styles.mobileText}>{x.Mobile}</Text>
      <Text style={styles.detailText}>{x.Color}</Text>
      <Text style={styles.detailText}>{x.Price}</Text>
      <TouchableOpacity style={styles.button}
      onPress={()=>HandleCartItem(x)}
      >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
  },
  mobileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detailText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 2,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhoneItem;
