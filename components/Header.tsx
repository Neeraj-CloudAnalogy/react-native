import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {
    return (
       <View style={styles.container}>
        <Text style={styles.text}>
            ITEMS IN CART: 0
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
