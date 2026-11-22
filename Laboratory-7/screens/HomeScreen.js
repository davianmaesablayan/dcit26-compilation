
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomUser = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://randomuser.me/api/'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await response.json();
      setUser(data.results[0]);
    } catch (err) {
      setError('Unable to load user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#2196F3"
        />
      ) : user ? (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', {
                user: user,
              })
            }
          >
            <Image
              source={{ uri: user.picture.large }}
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.name}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      ) : null}

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={fetchRandomUser}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          RANDOM USER
        </Text>
      </TouchableOpacity>

      <Text style={styles.hint}>
        Tap the picture to view the profile.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
  },
  error: {
    color: '#D32F2F',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  hint: {
    fontSize: 14,
    color: '#777777',
    marginTop: 20,
    textAlign: 'center',
  },
});
