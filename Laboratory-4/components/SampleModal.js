
import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={styles.image}
          />

          <Text style={styles.text}>
            Technology has become an important part of our
            everyday lives. It helps people communicate,
            access information, and complete tasks more
            efficiently. From smartphones and computers
            to online platforms, technology continues to
            change how we live, study, and work.
          </Text>

          <Text style={styles.text}>
            In education, technology provides students
            with new opportunities to learn and develop
            their skills. Online resources, educational
            applications, and digital learning platforms
            make information more accessible. Students
            can also collaborate with classmates and
            complete school activities using various
            technological tools.
          </Text>

          <Text style={styles.text}>
            Technology also plays an important role in
            communication. Through messaging applications,
            video calls, and social media, people can
            connect with others regardless of distance.
            These tools allow individuals to share ideas,
            exchange information, and maintain connections
            with family, friends, and colleagues.
          </Text>

          <Text style={styles.text}>
            In the workplace, technology improves
            productivity by automating repetitive tasks
            and organizing information. Businesses use
            computer systems to manage records, monitor
            operations, and provide better services to
            customers. As technology continues to advance,
            new opportunities for innovation and
            development become available.
          </Text>

          <Text style={styles.text}>
            However, responsible use of technology is
            equally important. People should understand
            the importance of protecting personal
            information, practicing online safety, and
            balancing their time between digital
            activities and real-world responsibilities.
          </Text>

          <Text style={styles.text}>
            Overall, technology has a significant impact
            on modern society. By learning how to use
            technological tools effectively and
            responsibly, individuals can improve their
            knowledge, develop useful skills, and
            contribute to a more connected and innovative
            future.
          </Text>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>
              CLOSE
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 28,
    color: '#000000',
    textAlign: 'justify',
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    backgroundColor: '#F44336',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
