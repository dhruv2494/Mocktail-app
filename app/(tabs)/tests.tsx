import { setHeaderText } from '@/store/appConfigSlice';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const TESTS = [
  { title: 'Mock Test 1', date: '2025-07-15', questions: 50 },
  { title: 'Mock Test 2', date: '2025-07-20', questions: 40 },
  { title: 'Maths Practice', date: '2025-07-22', questions: 30 },
  { title: 'Reasoning Test', date: '2025-07-25', questions: 25 },
  { title: 'English Mastery', date: '2025-07-28', questions: 35 },
];

export default function TestsScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText('Tests'));
    return () => {
      dispatch(setHeaderText(''));
    };
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.testList}>
        {TESTS.map((test) => (
          <View key={test.title} style={styles.testCard}>
            <Text style={styles.testTitle}>{test.title}</Text>
            <Text style={styles.testInfo}>Date: {test.date}</Text>
            <Text style={styles.testInfo}>Questions: {test.questions}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    flexGrow: 1,
    alignItems: 'center',
  },
  testList: {
    width: '100%',
    alignItems: 'center',
  },
  testCard: {
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
    position: 'relative',
  },
  testTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 6,
  },
  testInfo: {
    fontSize: 15,
    color: '#444',
    marginVertical: 2,
  },
});
