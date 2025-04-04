import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LIST } from './Redux/Constant'; 
import { ScrollView } from 'react-native-gesture-handler';

function SagaUserList() {
    const dispatch = useDispatch();

    // Ensure we select the correct reducer
    const userList = useSelector((state: any) => state.apireducer); 
    
    useEffect(() => {
        dispatch({ type: USER_LIST }); // Dispatch USER_LIST action to fetch user data
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User List</Text>
            <Button title="Refresh" onPress={() => dispatch({ type: USER_LIST })} />
        
            <ScrollView>

            {userList.length === 0 && <Text>Loading...</Text>}
            
            {
            userList.map((user: any, index: number) => (
                <View key={index} style={styles.userItem}>
                    <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
                    <Text style={styles.userEmail}>Email: {user.email}</Text>
                    <Text style={styles.userEmail}>age:   {user.age}</Text>
                    <Text style={styles.userEmail}>Gender: {user.gender}</Text>
                    <Text style={styles.userEmail}>Phone no : {user.phone}</Text>
                </View>
            ))}



              </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    userName: {
        fontSize: 18,
    },
    userEmail: {
        fontSize: 14,
        color: '#555',
    },
});

export default SagaUserList;
