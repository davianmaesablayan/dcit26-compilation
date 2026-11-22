
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.getParent()?.navigate('HomeDrawer')
        }
      >
        <Text style={styles.buttonText}>
          GO BACK
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() =>
          navigation.dispatch(DrawerActions.openDrawer())
        }
      >
        <Text style={styles.menuText}>
          OPEN MENU
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuButton: {
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  menuText: {
    color: '#2196F3',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
