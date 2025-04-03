import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { add_to_cart, remove_to_cart } from './Redux/Action';
import { useDispatch, useSelector } from 'react-redux';

function PhoneItem(props: any) {
  const x = props.item;
  const dispatch = useDispatch();

  const HandleRemoveCartItem = (x: any) => {
    console.warn("item removed", x);
    dispatch(remove_to_cart(x)); 
  };

  const HandleCartItem = (x: any) => {
    console.warn("item added", x);
    dispatch(add_to_cart(x));
  };

  const cartItem = useSelector((item: any) => item.reducer);

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
  
    const result = cartItem.some((element: any) => element.Mobile === x.Mobile);
    setIsAdded(result);
  }, [cartItem]);

  return (
    <View style={styles.container}>
      <Text style={styles.mobileText}>{x.Mobile}</Text>
      <Text style={styles.detailText}>{x.Color}</Text>
      <Text style={styles.detailText}>{x.Price}</Text>
      {
        !isAdded ?
          <TouchableOpacity style={styles.button}
            onPress={() => HandleCartItem(x)}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          :

          <TouchableOpacity style={styles.button}
            onPress={() => HandleRemoveCartItem(x)} 
          >
            <Text style={styles.buttonText}>Remove From Cart</Text>
          </TouchableOpacity>
      }
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
