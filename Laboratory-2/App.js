
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Davian Mae P. Sablayan</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>20 years old</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Course/Year/Section:</Text>
        <Text style={styles.info}>
          BS Computer Science, 3 - 5
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>About Me:</Text>
        <Text style={styles.info}>
          I am a Computer Science student who is
          passionate about technology, programming,
          and learning new skills.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Achievements:</Text>
        <Text style={styles.info}>
          {"• Dean's Lister (2024 - 2025)\n"}
          {"• Student Council Member\n"}
          {"• Most Outsatnding COMRECS Encrypt 2026"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.info}>
          {'• HTML and CSS\n'}
          {'• Web Development'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000000',
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  info: {
    fontSize: 15,
    color: '#333333',
    marginTop: 4,
  },
});
