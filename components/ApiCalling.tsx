import React, { useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet, ToastAndroid } from 'react-native';
import axios from 'axios';
import PropsDrillingAndContextApi from './PropsDrillingAndContextApi';

function ApiCalling() {
    const apiurl = 'http://10.0.2.2:3000/posts';
    const [arr, setarr] = useState([]);

    const getreqapi = () => {
        return fetch(apiurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                return Promise.reject('API request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => setarr(data))
        .catch(error => {
            console.error('Error fetching data:', error);
            return Promise.reject(error);
        });
    };

    const putreqapi = () => {
        return fetch('http://10.0.2.2:3000/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'data is updated',
            }),
        })
        .then(response => {
            if (!response.ok) {
                return Promise.reject('API request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => setarr(data))
        .catch(error => Promise.reject(error));
    };

    const putreqbyaxios = () => {
        return axios.put(`${apiurl}/4`, { name: 'data is up to date' })
        .then(response => setarr(response.data))
        .catch(error => Promise.reject(error));
    };

    const patchreqbyaxios = () => {
        return axios.patch(`${apiurl}/2`, { name: 'data is up to date', surname: 'patch done' })
        .then(response => setarr(response.data))
        .catch(error => Promise.reject(error));
    };

    const deletereqbyaxios = () => {
        return axios.delete(`${apiurl}/4`)
        .then(response => setarr(response.data))
        .catch(error => Promise.reject(error));
    };

    const getreqapifromaxios = () => {
        return axios.get(apiurl)
        .then(response => setarr(response.data))
        .catch(error => Promise.reject(error));
    };

    const postreq = () => {
        return fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: 'raghav', surname: 'diman' }),
        })
        .then(response => response.json())
        .then(data => setarr(data))
        .catch(error => Promise.reject(error));
    };

    const postreqbyaxios = () => {
        return axios.post(apiurl, { name: 'manav', surname: 'kumar' })
        .then(response => setarr(response.data))
        .catch(error => Promise.reject(error));
    };

    const renderItem = ({ item}:{item:any}) => (
        <View style={styles.listItem}>
            <Text style={styles.listText}>Name: {item?.name}</Text>
            <Text style={styles.listText}>Last Name: {item?.surname}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <PropsDrillingAndContextApi />
            <FlatList
                data={arr}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                style={styles.flatList}
            />
            <View style={styles.buttonContainer}>
                <Button title="Call API from Axios" onPress={() => {
                    getreqapifromaxios()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
                <Button title="Call API from Fetch" onPress={() => {
                    getreqapi()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
                <Button title="Push Data to Server (Fetch)" onPress={() => {
                    postreq()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
                <Button title="Push Data to Server (Axios)" onPress={() => {
                    postreqbyaxios()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
                <Button title="Update Data (Fetch)" onPress={() => {
                    putreqapi()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
                <Button title="Update Data (Axios)" onPress={() => {
                    putreqbyaxios()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
                <Button title="Delete Data (Axios)" onPress={() => {
                    deletereqbyaxios()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
                <Button title="Patch Data (Axios)" onPress={() => {
                    patchreqbyaxios()
                    .then(() => ToastAndroid.show('Success', ToastAndroid.TOP))
                    .catch(() => ToastAndroid.show('Error', ToastAndroid.TOP));
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    flatList: {
        marginBottom: 20,
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    listText: {
        fontSize: 16,
        color: '#333',
    },
    buttonContainer: {
        marginTop: 20,
        justifyContent: 'space-between',
    },
});

export default ApiCalling;
