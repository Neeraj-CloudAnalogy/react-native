import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const NestedFlatList = () => {
  const [expandedItem, setExpandedItem] = useState(null); // Track the expanded item

  const data = [
    {
      id: '1',
      title: 'Category 1',
      sublist: [
        { id: '1-1', title: 'Item 1.1' },
        { id: '1-2', title: 'Item 1.2' },
      ],
    },
    {
      id: '2',
      title: 'Category 2',
      sublist: [
        { id: '2-1', title: 'Item 2.1' },
        { id: '2-2', title: 'Item 2.2' },
      ],
    },
    {
      id: '3',
      title: 'Category 3',
      sublist: [
        { id: '3-1', title: 'Item 3.1' },
        { id: '3-2', title: 'Item 3.2' },
      ],
    },
  ];

  const toggleSublist = (id) => {
    // Toggle the expanded state of the sublist
    setExpandedItem(expandedItem === id ? null : id);
  };

  const renderSublist = (sublist) => (
    <FlatList
      data={sublist}
      renderItem={({ item }) => (
        <View style={styles.sublistItem}>
          <Text style={styles.sublistText}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );

  const renderItem = ({ item}:any) => { return(
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => toggleSublist(item.id)} // Toggle the sublist visibility
      >
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
      {/* Only show the sublist if this item is expanded */}
      {expandedItem === item.id && renderSublist(item.sublist)}
    </View>
  )};

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  item: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  sublistItem: {
    padding: 10,
    marginLeft: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
  },
  sublistText: {
    fontSize: 16,
    color: '#2c3e50',
  },
});

export default NestedFlatList;
