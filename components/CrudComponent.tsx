import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';

const CrudComponent = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const arr = [
    {
      name: "Aditya",
      phone: "9876543210",
      email: "adi.jan@example.com"
    },
    {
      name: "rohit ",
      phone: "9123456780",
      email: "indra.Rohit@example.com"
    },
    {
      name: "Neeraj Sharma",
      phone: "9988776655",
      email: "neeraj.sharma@example.com"
    },
    {
      name: "aryan sharma",
      phone: "9090909090",
      email: "aryan.sharma@example.com"
    }
  ];
  const [data, setData] = useState(arr);

  const deletefun=(index:number)=>{
    const deletedData = data.filter((val, i) => i !== index);
    setData(deletedData);
  }

  const editfun=(index:number)=>{
    const editData =data.find((val,i)=>i == index);
    setName(editData?.name)
    setPhone(editData?.phone)
    setEmail(editData?.email)
    const deletedData1 = data.filter((val, i) => i !== index);
    setData(deletedData1);


    

    
  }

  const formdata = () => {
    if (!name || !email || !phone ) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }

    if (phone.length !== 10) {
      Alert.alert('Error', 'Phone number must be 10 digits');
      return;
    }

    const newUser = {
      name: name,
      phone: phone,
      email: email
    };
    setData([...arr,newUser]);

    Alert.alert('Success', 'Signup Successful');
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setPassword1('');
    navigation.navigate('Login');
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: '#f9fafe' }}>
        <View style={styles.container}>
          <Text style={styles.title}>To-Do List</Text>

          <TextInput
           style={styles.input} 
           placeholder="Enter your Name" 
           value={name}
            onChangeText={setName} 
        
            
            />
          <TextInput
            style={styles.input}
            placeholder="Enter your Phone No"
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
            maxLength={10}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          
          <TouchableOpacity style={styles.button} onPress={formdata}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.listTitle}>Registered Users</Text>
       

        {data.length!=0 && 
        
        <FlatList
          data={data}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={() => {
            return (
              <View style={styles.listHeader}>
                <Text style={styles.headerText}>NAME</Text>
                <Text style={styles.headerText}>PHONE NO</Text>
                <Text style={styles.headerText}>EMAIL</Text>
                <Text style={styles.headerText}>OPERATIONS</Text>
                
              </View>
            );
          }}
          renderItem={({ item ,index }: { item: any ,index:number}) => {
            return (
              <View style={styles.listRow}>
                <Text style={styles.rowText}>{item.name}</Text>
                <Text style={styles.rowText}>{item.phone}</Text>
                <Text style={styles.rowText}>{item.email}</Text>
                <TouchableOpacity
                style={styles.operationButton}
                onPress={()=>{
                  deletefun(index)
                }}
                >
                  <Text>
                    Delete
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.operationButton}
                onPress={()=>editfun(index)}
                >
                  <Text>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />}
      </ScrollView>
    </>
  );
};

export default CrudComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingLeft: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#5A67D8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    color: '#444',
  },
  listContainer: {
    padding: 15,
  },
  listHeader: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    fontWeight:"bold", 
    color: '',
    fontSize: 14,
  },
  operationButton: {
    backgroundColor: 'lightgreen',
    paddingVertical: 20,
    paddingHorizontal: 1,
    borderRadius: 5,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
