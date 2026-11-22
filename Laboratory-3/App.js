
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setItems([...items, item.trim()]);
      setItem('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={item}
          onChangeText={setItem}
        />

        <Button title="ADD" onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    padding: 10,
    marginRight: 8,
    borderRadius: 4,
  },
  listItem: {
    backgroundColor: '#808080',
    padding: 12,
    marginBottom: 5,
    borderRadius: 4,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
