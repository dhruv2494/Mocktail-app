import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Forgot() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleForgot = async () => {
    // Add forgot password logic here (API call, etc)
    // Show a message or navigate as needed
    alert("Password reset link sent to your email (mock)");
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/mocktale-logo.jpeg")} style={styles.logo} />
      <Text style={styles.title}>Forgot your password?</Text>
      <Text style={styles.subtitle}>Enter your email to reset your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7a7a7a"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleForgot}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <TouchableOpacity onPress={() => router.push("/login")}> 
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2e7ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#2a2a2a',
    fontFamily: 'sans-serif-medium',
  },
  subtitle: {
    fontSize: 15,
    color: '#444',
    marginBottom: 18,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 14,
    marginVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#b4d2f7',
  },
  button: {
    backgroundColor: '#ffbe76',
    borderRadius: 18,
    width: '100%',
    padding: 14,
    alignItems: 'center',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#3b82f6',
    marginTop: 4,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
});
