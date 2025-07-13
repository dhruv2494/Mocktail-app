import { showToast } from '@/modules/utils';
import { setHeaderText } from '@/store/appConfigSlice';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderText("Contact Us"));
    return () => {
      dispatch(setHeaderText(""));
    };
  }, []);

  const handleSubmit = () => {
    // Placeholder for form submission logic
    showToast({ type: "success", text1: "Thank you!", text2: "Your message has been submitted." });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.description}>
        Have a question or feedback? Fill out the form below and we'll get back to you soon!
      </Text>

      <View style={styles.form}>
        {/* Name */}
        <View style={styles.fieldWrapper}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputWrapper}>
            <Feather name="user" size={18} color="#3b82f6" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.fieldWrapper}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Feather name="mail" size={18} color="#3b82f6" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="example@domain.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Message */}
        <View style={styles.fieldWrapper}>
          <Text style={styles.label}>Message</Text>
          <View style={[styles.inputWrapper, { alignItems: 'flex-start' }]}>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Write your message here..."
              placeholderTextColor="#999"
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>

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
  fieldWrapper: {
    width: '100%',
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '600',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4faff',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#e0eaff',
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 12,
    color: '#222',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
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
