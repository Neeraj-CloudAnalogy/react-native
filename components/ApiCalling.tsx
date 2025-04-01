import React, { useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import PropsDrillingAndContextApi from './PropsDrillingAndContextApi';

function ApiCalling() {
    const apiurl = 'http://10.0.2.2:3000/posts';
    const [arr, setarr] = useState([]);

    const getreqapi = async () => {
        try {
            const response = await fetch(apiurl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setarr(data);
        } catch (error) {
            console.log('error is their', error);
        }
    };

    const putreqapi = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/posts/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'data is updated',
                }),
            });
            const data = await response.json();
            setarr(data);
        } catch (error) {
            console.log('error is their', error);
        }
    };

    const putreqbyaxios = async () => {
        const response = await axios.put(`http://10.0.2.2:3000/posts/${'4'}`, {
            name: 'data is up to date',
        });
        setarr(response.data);
    };

    const patchreqbyaxios = async () => {
        const response = await axios.patch(`http://10.0.2.2:3000/posts/${'2'}`, {
            name: 'data is up to date',
            surname: 'patch done',
        });
        setarr(response.data);
    };

    const deletereqbyaxios = async () => {
        const response = await axios.delete(`http://10.0.2.2:3000/posts/${'4'}`);
        setarr(response.data);
    };

    const getreqapifromaxios = async () => {
        try {
            const response = await axios.get(apiurl);
            setarr(response.data);
        } catch (error) {
            console.log('error is their', error);
        }
    };

    const postreq = async () => {
        try {
            const data = {
                name: 'raghav',
                surname: 'diman',
            };
            const response = await fetch(apiurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            setarr(responseData);
        } catch (error) {
            console.log('error is their', error);
        }
    };

    const postreqbyaxios = async () => {
        try {
            const data = {
                name: 'manav',
                surname: 'kumar',
            };
            const response = await axios.post(apiurl, data);

            setarr(response.data);
        } catch (error) {
            console.log('error is their', error);
        }
    };

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.listItem}>
            <Text style={styles.listText}>Name: {item.name}</Text>
            <Text style={styles.listText}>Last Name: {item.surname}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <PropsDrillingAndContextApi/>
            <FlatList
                data={arr}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                style={styles.flatList}
            />
            <View style={styles.buttonContainer}>
                <Button title="Call API from Axios" onPress={getreqapifromaxios} />
                <Button title="Call API from Fetch" onPress={getreqapi} />
                <Button title="Push Data to Server (Fetch)" onPress={postreq} />
                <Button title="Push Data to Server (Axios)" onPress={postreqbyaxios} />
                <Button title="Update Data (Fetch)" onPress={putreqapi} />
                <Button title="Update Data (Axios)" onPress={putreqbyaxios} />
                <Button title="Delete Data (Axios)" onPress={deletereqbyaxios} />
                <Button title="Patch Data (Axios)" onPress={patchreqbyaxios} />
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
