import { setHeaderText } from '@/store/appConfigSlice';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
const ALERTS = [
  { title: 'SSC CGL 2025 Notification Out', date: '2025-07-05', link: '#' },
  { title: 'IBPS PO Recruitment Open', date: '2025-07-03', link: '#' },
  { title: 'Railway Group D Results', date: '2025-07-01', link: '#' },
  { title: 'trainee recruitment', date: '2025-07-01', link: '#' },
  { title: 'railway recruitment', date: '2025-07-01', link: '#' },
  { title: 'job alert', date: '2025-07-01', link: '#' },
];

export default function AlertsScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText("Job Alerts"));
    return () => {
      dispatch(setHeaderText(""));
    };
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.alertList}>
        {ALERTS.map(alert => (
          <View key={alert.title} style={styles.alertCard}>
            <Text style={styles.alertTitle}>{alert.title}</Text>
            <Text style={styles.alertDate}>Date: {alert.date}</Text>
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.viewText}>View Details</Text>
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
  alertList: {
    width: '100%',
    alignItems: 'center',
  },
  alertCard: {
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
  alertTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  alertDate: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
  },
  viewBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginTop: 2,
  },
  viewText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
