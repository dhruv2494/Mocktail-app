import { setHeaderText } from '@/store/appConfigSlice';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
const PURCHASES = [
  { item: 'Pro Subscription', date: '2025-06-25', amount: '₹249' },
  { item: 'Ultimate Combo', date: '2025-05-15', amount: '₹799' },
  { item: 'SSC English eBook', date: '2025-04-10', amount: '₹99' },
  { item: 'second Pro Subscription', date: '2025-06-25', amount: '₹249' },
  { item: 'second Ultimate Combo', date: '2025-05-15', amount: '₹799' },
  { item: 'second SSC English eBook', date: '2025-04-10', amount: '₹99' },
];

export default function PurchasesScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText("Purchases"));
    return () => {
      dispatch(setHeaderText(""));
    };
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.purchaseList}>
        {PURCHASES.map(purchase => (
          <View key={purchase.item + purchase.date} style={styles.purchaseCard}>
            <Text style={styles.purchaseItem}>{purchase.item}</Text>
            <Text style={styles.purchaseInfo}>Date: {purchase.date}</Text>
            <Text style={styles.purchaseInfo}>Amount: {purchase.amount}</Text>
            <TouchableOpacity style={styles.receiptBtn}>
              <Text style={styles.receiptText}>Download Receipt</Text>
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
  purchaseList: {
    width: '100%',
    alignItems: 'center',
  },
  purchaseCard: {
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
  purchaseItem: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  purchaseInfo: {
    fontSize: 15,
    color: '#444',
    marginBottom: 2,
  },
  receiptBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginTop: 8,
  },
  receiptText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
