import { setHeaderText } from '@/store/appConfigSlice';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function FreeQuizScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText("Free Quiz"));
    return () => {
      dispatch(setHeaderText(""));
    };
  }, []);
  return (
    <View style={styles.container}>
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
