
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ProductScreen({
  route,
  navigation,
}) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Product Details
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.value}>
          {product.title}
        </Text>

        <Text style={styles.label}>
          Description
        </Text>
        <Text style={styles.value}>
          {product.description}
        </Text>

        <Text style={styles.label}>Rating</Text>
        <Text style={styles.value}>
          {product.rating}
        </Text>

        <Text style={styles.label}>
          Product Key
        </Text>
        <Text style={styles.value}>
          {product.key}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          GO BACK HOME
        </Text>
      </TouchableOpacity>
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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
    marginTop: 12,
  },
  value: {
    fontSize: 20,
    color: '#222222',
    marginTop: 5,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
