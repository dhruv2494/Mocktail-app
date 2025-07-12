import { setShowHeader } from '@/store/appConfigSlice';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    // Hide the common header for the dashboard
    dispatch(setShowHeader(true));
    return () => {
      // Restore default when leaving screen
      dispatch(setShowHeader(true));
    };
  }, []);

  const quickLinks = [
    { label: 'Tests', icon: 'assignment', route: '/tests' },
    { label: 'Subscriptions', icon: 'credit-card', route: '/subscriptions' },
    { label: 'PDFs', icon: 'picture-as-pdf', route: '/pdfs' },
    { label: 'Combo', icon: 'layers', route: '/combo' },
    { label: 'Free Quiz', icon: 'quiz', route: '/free-quiz', lib: 'MaterialIcons' },
    { label: 'eBooks', icon: 'book', route: '/ebooks', lib: 'MaterialCommunityIcons' },
  ];

  const recommendedTests = [
    { title: 'Mock Test 1', questions: 50 },
    { title: 'Maths Practice', questions: 30 },
    { title: 'Reasoning Master', questions: 25 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Welcome Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerHeading}>Welcome back! 👋</Text>
        <Text style={styles.bannerSub}>Let’s boost your preparation today.</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1584697964231-059f07c7f4b1?w=1200&q=80' }}
          style={styles.bannerImg}
        />
      </View>

      {/* Quick Links */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Quick Links</Text>
        <View style={styles.quickGrid}>
          {quickLinks.map((item) => {
            const IconCmp = item.lib === 'MaterialCommunityIcons' ? MaterialCommunityIcons : MaterialIcons;
            return (
              <TouchableOpacity
                key={item.label}
                style={styles.quickItem}
                onPress={() => router.replace(item.route)}
              >
                <IconCmp name={item.icon as any} size={28} color="#3b82f6" />
                <Text style={styles.quickLabel}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Recommended Tests */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Recommended Tests</Text>
        {recommendedTests.map((test) => (
          <View key={test.title} style={styles.testCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="#3b82f6" />
              <Text style={styles.testTitle}>{test.title}</Text>
            </View>
            <Text style={styles.testMeta}>{test.questions} Questions</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const CARD_WIDTH = width - 40;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  banner: {
    width: CARD_WIDTH,
    backgroundColor: '#eef4ff',
    borderRadius: 22,
    padding: 20,
    marginBottom: 24,
    overflow: 'hidden',
  },
  bannerHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 4,
  },
  bannerSub: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 12,
  },
  bannerImg: {
    width: '100%',
    height: 140,
    borderRadius: 16,
  },
  section: {
    width: CARD_WIDTH,
    marginBottom: 26,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 14,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  quickLabel: {
    fontSize: 13,
    marginTop: 6,
    color: '#1e293b',
    textAlign: 'center',
  },
  testCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    elevation: 4,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  testTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#0f172a',
  },
  testMeta: {
    fontSize: 14,
    color: '#475569',
    marginTop: 6,
    marginLeft: 32,
  },
});