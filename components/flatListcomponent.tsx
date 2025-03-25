import React from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, StyleSheet } from 'react-native';

function FlatListComponent() {
  const flatlistItems = [
    { name: "Neeraj", age: 20, data: ["Java", "JS"] },
    { name: "Gaurav", age: 22, data: ["Python", "React"] },
    { name: "Amit", age: 23, data: ["C#", "Angular"] },
    { name: "Ravi", age: 21, data: ["Ruby", "Node.js"] }
  ];

  // Function to handle item press
  const handleItemPress = (name:string) => {
    Alert.alert(`Item pressed: ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        We are implementing the FlatList
      </Text>

      <FlatList
        data={flatlistItems}
        keyExtractor={(item) => item.name} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.name)} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Skills: {item.data.join(', ')}</Text>
          </TouchableOpacity>
        )}
        
        // Custom Header
        ListHeaderComponent={() => (
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}>User Information</Text>
          </View>
        )}

        // Custom Footer
        ListFooterComponent={() => (
          <Text style={styles.footer}>End of List</Text>
        )}

        // Custom Empty State
        ListEmptyComponent={() => (
          <Text style={styles.empty}>No data available</Text>
        )}

        ItemSeparatorComponent={() => <View style={styles.separator} />} // Separator between items
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listHeaderContainer: {
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default FlatListComponent;