import { setHeaderText } from '@/store/appConfigSlice';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const PRIVACY_SECTIONS = [
  {
    title: '',
    body: 'Your privacy is important to us. This Privacy Policy explains how Mocktale collects, uses, and protects your information.'
  },
  {
    title: 'Information Collection',
    body: 'We collect information you provide directly, such as when you create an account, contact us, or use our services.'
  },
  {
    title: 'Use of Information',
    body: 'Your information is used to provide and improve our services, communicate with you, and ensure security.'
  },
  {
    title: 'Data Sharing',
    body: 'We do not sell your personal information. We may share data with trusted partners who assist us in operating our app, provided they agree to keep it confidential.'
  },
  {
    title: 'Security',
    body: 'We implement reasonable security measures to protect your data.'
  },
  {
    title: 'Your Rights',
    body: 'You can access, update, or delete your information by contacting us.'
  },
  {
    title: 'Changes to Policy',
    body: 'We may update this policy. Changes will be posted in the app.'
  },
  {
    title: '',
    body: 'For any questions, please contact us at support@mocktale.com.'
  },
];

function renderPrivacySections(sections: { title: string; body: string }[]) {
  return sections.map((section, idx) => (
    <View key={idx} style={{ marginBottom: 14 }}>
      {section.title ? (
        <Text style={[styles.policyText, { fontWeight: 'bold', marginBottom: 2 }]}>
          {section.title}
        </Text>
      ) : null}
      <Text style={styles.policyText}>{section.body}</Text>
    </View>
  ));
}

export default function PrivacyScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText('Privacy Policy'));
    return () => {
      dispatch(setHeaderText(''));
    };
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.policyBox}>
        {renderPrivacySections(PRIVACY_SECTIONS)}
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
