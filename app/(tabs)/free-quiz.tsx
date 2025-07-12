import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FreeQuizScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/mocktale-logo.jpeg')} style={styles.logo} />
      <Text style={styles.heading}>Free Quiz</Text>
      <Text style={styles.description}>
        Test your knowledge for free! Take our daily quiz and see how you score against others.
      </Text>
      <TouchableOpacity style={styles.quizBtn}>
        <Text style={styles.quizBtnText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4faff',
    padding: 24,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 18,
    marginBottom: 16,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    elevation: 3,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 28,
    marginHorizontal: 10,
  },
  quizBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    elevation: 2,
  },
  quizBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
});
