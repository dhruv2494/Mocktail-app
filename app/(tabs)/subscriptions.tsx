import { setHeaderText, setShowBottomTab } from '@/store/appConfigSlice';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const { colors } = useTheme();
  React.useEffect(() => {
    dispatch(setShowBottomTab(false));
    dispatch(setHeaderText("Choose Your Plan"));
    return () => {
      dispatch(setShowBottomTab(true));
      dispatch(setHeaderText(""));
    };
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background }
      ]}
    >
      <View style={styles.plansContainer}>
        {PLANS.map((plan, idx) => (
          <View
            key={plan.title}
            style={[styles.card, { backgroundColor: colors.card, borderColor: plan.best ? colors.primary : colors.border, shadowColor: colors.primary }, plan.best && styles.bestCard]}
          >
            {plan.best && (
              <Text style={[styles.bestBadge, { backgroundColor: colors.primary, color: colors.card }]}>Most Popular</Text>
            )}
            <Text style={[styles.planTitle, { color: colors.primary }]}>{plan.title}</Text>
            <Text style={[styles.planPrice, { color: colors.text }]}>{plan.price}</Text>
            <View style={styles.featuresList}>
              {plan.features.map(f => (
                <Text key={f} style={[styles.featureItem, { color: colors.text }]}>• {f}</Text>
              ))}
            </View>
            <TouchableOpacity
              style={[
                styles.subscribeBtn,
                { backgroundColor: plan.best ? colors.primary : colors.card, borderWidth: plan.best ? 0 : 1, borderColor: colors.primary },
              ]}
            >
              <Text style={[styles.subscribeText, { color: plan.best ? colors.card : colors.primary }]}>Subscribe</Text>
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
    paddingVertical: 32,
    flexGrow: 1,
  },
  plansContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: 320,
    borderRadius: 18,
    padding: 22,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 4,
    borderWidth: 2,
    shadowOpacity: 0.09,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    position: 'relative',
  },
  bestCard: {
    elevation: 7,
    shadowOpacity: 0.18,
  },
  bestBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
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
    marginBottom: 6,
    marginTop: 8,
  },
  planPrice: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  featuresList: {
    marginBottom: 16,
    width: '100%',
  },
  featureItem: {
    fontSize: 15,
    marginVertical: 2,
    marginLeft: 2,
  },
  subscribeBtn: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 28,
    marginTop: 5,
    borderWidth: 1,
  },
  subscribeText: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
