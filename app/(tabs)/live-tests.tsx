import { setHeaderText } from '@/store/appConfigSlice';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
const LIVE_TESTS = [
  { title: 'Mock Test 1', date: '2025-07-10', time: '10:00 AM' },
  { title: 'Current Affairs Live', date: '2025-07-12', time: '4:00 PM' },
  { title: 'Maths Marathon', date: '2025-07-15', time: '8:00 PM' },
  { title: 'Reasoning Marathon', date: '2025-07-16', time: '10:00 PM' },
  { title: 'SSC English Marathon', date: '2025-07-17', time: '12:00 PM' },
];

export default function LiveTestsScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText("Live Tests"));
    return () => {
      dispatch(setHeaderText(""));
    };
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.testList}>
        {LIVE_TESTS.map(test => (
          <View key={test.title} style={styles.testCard}>
            <Text style={styles.testTitle}>{test.title}</Text>
            <Text style={styles.testInfo}>Date: {test.date}</Text>
            <Text style={styles.testInfo}>Time: {test.time}</Text>
            <TouchableOpacity style={styles.joinBtn}>
              <Text style={styles.joinText}>Join Now</Text>
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

  description: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 18,
    marginHorizontal: 10,
  },
  testList: {
    width: '100%',
    alignItems: 'center',
  },
  testCard: {
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
  testTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  testInfo: {
    fontSize: 15,
    color: '#444',
    marginBottom: 2,
  },
  joinBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginTop: 8,
  },
  joinText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
