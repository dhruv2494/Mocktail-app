import { Stack, useRouter } from 'expo-router';
import React from 'react';
import MainLayout from './MainLayout';

export default function TabLayout() {

  const router = useRouter();

  return (
    <MainLayout>
    
      <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="tests" options={{ title: 'Tests' }} />
        <Stack.Screen name="subscriptions" options={{ title: 'Subscriptions' }} />
        <Stack.Screen name="pdfs" options={{ title: 'PDFs' }} />
        <Stack.Screen name="combo" options={{ title: 'Combo Packages' }} />
        <Stack.Screen name="free-quiz" options={{ title: 'Free Quiz' }} />
        <Stack.Screen name="live-tests" options={{ title: 'Live Tests' }} />
        <Stack.Screen name="ebooks" options={{ title: 'eBooks' }} />
        <Stack.Screen name="alerts" options={{ title: 'Job Alerts' }} />
        <Stack.Screen name="purchases" options={{ title: 'Purchase List' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact Us' }} />
        <Stack.Screen name="privacy" options={{ title: 'Privacy Policy' }} />
      </Stack>
     

    </MainLayout>
  );
}
