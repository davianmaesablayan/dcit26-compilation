
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function ProfileScreen({ route }) {
  const { user } = route.params;

  const fullName = [
    user.name.title,
    user.name.first,
    user.name.last,
  ].join(' ');

  const address = [
    user.location.street.number,
    user.location.street.name,
    user.location.city,
    user.location.state,
    user.location.country,
    user.location.postcode,
  ].join(', ');

  const Detail = ({ label, value }) => (
    <View style={styles.detailRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>
        {String(value ?? 'N/A')}
      </Text>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Image
        source={{ uri: user.picture.large }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {fullName}
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          About
        </Text>
        <Detail label="Gender" value={user.gender} />
        <Detail label="Age" value={user.dob.age} />
        <Detail label="Birthday" value={user.dob.date} />
        <Detail label="Nationality" value={user.nat} />
        <Detail label="Address" value={address} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Contact
        </Text>
        <Detail label="Email" value={user.email} />
        <Detail label="Phone" value={user.phone} />
        <Detail label="Cell" value={user.cell} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Account
        </Text>
        <Detail
          label="Username"
          value={user.login.username}
        />
        <Detail
          label="UUID"
          value={user.login.uuid}
        />
        <Detail
          label="Registered Date"
          value={user.registered.date}
        />
        <Detail
          label="Registered Age"
          value={user.registered.age}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Additional Details
        </Text>

        {Object.entries(user).map(([key, value]) => (
          <Detail
            key={key}
            label={key}
            value={
              typeof value === 'object'
                ? JSON.stringify(value, null, 2)
                : value
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
    alignItems: 'center',
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
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 12,
  },
  detailRow: {
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#666666',
  },
  value: {
    fontSize: 17,
    color: '#222222',
    marginTop: 4,
    lineHeight: 24,
  },
});
