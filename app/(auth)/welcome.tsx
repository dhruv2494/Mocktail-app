import Button from "@/components/common/Button";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
//welcome-page-image.png
export default function Welcome() {
  const router = useRouter();


  return (
    <View style={styles.container}>
      <View style={styles.illustrationWrapper}>
        <Image
          source={require('../../assets/images/welcome-page-image.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.heading}>Create your own{"\n"}study plan</Text>
      <Text style={styles.subheading}>
        Study according to the study plan, make study more motivated
      </Text>
      <View style={styles.buttonRow}>
        <Button onPress={() => router.push('/(auth)/signup')} text="Sign up" />
        <Button onPress={() => router.push('/(auth)/login')} text="Log in" isBackgroundFilled={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  illustrationWrapper: {
    alignItems: 'center',
    marginBottom: 28,
    marginTop: 36,
  },
  illustration: {
    width: 210,
    height: 180,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#23223e',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 34,
  },
  subheading: {
    color: '#7e7e9a',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 8,
    lineHeight: 22,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e4e8f1',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 22,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3b5bfd',
    marginHorizontal: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 18,
    gap: 14,
  },
});
