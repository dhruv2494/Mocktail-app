import { setHeaderText } from '@/store/appConfigSlice';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText("Contact Us"));
    return () => {
      dispatch(setHeaderText(""));
    };
  }, []);

  const handleSubmit = () => {
    // Placeholder for form submission logic
    Alert.alert('Thank you!', 'Your message has been submitted.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

      <Text style={styles.description}>Have a question or feedback? Fill out the form below and we'll get back to you soon!</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f4faff',
    paddingVertical: 32,
    flexGrow: 1,
  },
  description: {
    fontSize: 15,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
    width: 320,
    fontWeight: '500',
  },
  form: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 22,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 4,
    borderWidth: 2,
    borderColor: '#e0eaff',
    shadowColor: '#3b82f6',
    shadowOpacity: 0.09,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  input: {
    width: '100%',
    backgroundColor: '#f4faff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    fontSize: 15,
    borderWidth: 1.5,
    borderColor: '#e0eaff',
    color: '#222',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  submitBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
    elevation: 2,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
