import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PRIVACY_TEXT = `
Your privacy is important to us. This Privacy Policy explains how Mocktale collects, uses, and protects your information.

1. **Information Collection**: We collect information you provide directly, such as when you create an account, contact us, or use our services.

2. **Use of Information**: Your information is used to provide and improve our services, communicate with you, and ensure security.

3. **Data Sharing**: We do not sell your personal information. We may share data with trusted partners who assist us in operating our app, provided they agree to keep it confidential.

4. **Security**: We implement reasonable security measures to protect your data.

5. **Your Rights**: You can access, update, or delete your information by contacting us.

6. **Changes to Policy**: We may update this policy. Changes will be posted in the app.

For any questions, please contact us at support@mocktale.com.
`;

export default function PrivacyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/mocktale-logo.jpeg')} style={styles.logo} />
      <Text style={styles.heading}>Privacy Policy</Text>
      <View style={styles.policyBox}>
        <Text style={styles.policyText}>{PRIVACY_TEXT}</Text>
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
  logo: {
    width: 90,
    height: 90,
    borderRadius: 18,
    marginBottom: 12,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    elevation: 3,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  policyBox: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    elevation: 2,
    borderWidth: 1.5,
    borderColor: '#e0eaff',
    shadowColor: '#3b82f6',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'flex-start',
  },
  policyText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
});
