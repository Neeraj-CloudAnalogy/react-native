import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet ,ToastAndroid} from 'react-native';
import { useSelector, UseSelector } from 'react-redux';

function Header() {
    const cartData =useSelector((state:any)=>state.reducer)
    const [cartcount,setcartcount]=useState(0);
    useEffect(()=>{
        setcartcount(cartData.length)

    },[cartData])
    
    return (
       <View style={styles.container}>
        <Text style={styles.text}>
            ITEMS IN CART: {cartcount}
        </Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#6200ea',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Header;
