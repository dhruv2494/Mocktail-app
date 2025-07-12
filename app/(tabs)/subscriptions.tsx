import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const PLANS = [
  {
    title: 'Basic',
    price: '₹99/mo',
    features: ['Access to quizzes', 'Free PDFs', 'Job Alerts'],
    best: false,
  },
  {
    title: 'Pro',
    price: '₹249/mo',
    features: ['All Basic features', 'Live Tests', 'Combo Packages', 'eBooks'],
    best: true,
  },
  {
    title: 'Premium',
    price: '₹499/mo',
    features: ['All Pro features', 'Personal Support', 'Early Access'],
    best: false,
  },
];

export default function SubscriptionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/mocktale-logo.jpeg')} style={styles.logo} />
      <Text style={styles.heading}>Choose Your Plan</Text>
      <View style={styles.plansContainer}>
        {PLANS.map((plan, idx) => (
          <View key={plan.title} style={[styles.card, plan.best && styles.bestCard]}>
            {plan.best && <Text style={styles.bestBadge}>Most Popular</Text>}
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planPrice}>{plan.price}</Text>
            <View style={styles.featuresList}>
              {plan.features.map(f => (
                <Text key={f} style={styles.featureItem}>• {f}</Text>
              ))}
            </View>
            <TouchableOpacity style={[styles.subscribeBtn, plan.best && styles.bestBtn]}>
              <Text style={styles.subscribeText}>Subscribe</Text>
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
    color: '#222',
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  plansContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
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
  bestCard: {
    borderColor: '#3b82f6',
    elevation: 7,
    shadowOpacity: 0.18,
  },
  bestBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#3b82f6',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 2,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 6,
    marginTop: 8,
  },
  planPrice: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  featuresList: {
    marginBottom: 16,
    width: '100%',
  },
  featureItem: {
    fontSize: 15,
    color: '#444',
    marginVertical: 2,
    marginLeft: 2,
  },
  subscribeBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 28,
    marginTop: 5,
  },
  bestBtn: {
    backgroundColor: '#2563eb',
  },
  subscribeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
