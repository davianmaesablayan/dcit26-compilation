
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const products = [
  {
    key: '1',
    title: 'Xbox',
    description: 'A gaming console developed by Microsoft.',
    rating: '5/5',
  },
  {
    key: '2',
    title: 'PS5',
    description: 'A gaming console developed by Sony.',
    rating: '5/5',
  },
  {
    key: '3',
    title: 'Nintendo Switch',
    description: 'A hybrid gaming console developed by Nintendo.',
    rating: '5/5',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Product List
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productButton}
            onPress={() =>
              navigation.navigate('Product', {
                product: item,
              })
            }
          >
            <Text style={styles.productText}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222222',
  },
  productButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    elevation: 2,
  },
  productText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#222222',
  },
});
