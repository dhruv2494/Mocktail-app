import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const EBOOKS = [
  { title: 'SSC English Mastery', file: 'SSC_English.pdf' },
  { title: 'Banking Awareness', file: 'Banking_Awareness.pdf' },
  { title: 'Reasoning Tricks', file: 'Reasoning_Tricks.pdf' },
];

export default function eBooksScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/mocktale-logo.jpeg')} style={styles.logo} />
      <Text style={styles.heading}>eBooks</Text>
      <Text style={styles.description}>Download our exclusive eBooks to boost your exam preparation!</Text>
      <View style={styles.ebookList}>
        {EBOOKS.map(ebook => (
          <View key={ebook.file} style={styles.ebookCard}>
            <Text style={styles.ebookTitle}>{ebook.title}</Text>
            <TouchableOpacity style={styles.downloadBtn}>
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  description: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 18,
    marginHorizontal: 10,
  },
  ebookList: {
    width: '100%',
    alignItems: 'center',
  },
  ebookCard: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
    borderWidth: 1.5,
    borderColor: '#e0eaff',
    shadowColor: '#3b82f6',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  ebookTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  downloadBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginTop: 2,
  },
  downloadText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
