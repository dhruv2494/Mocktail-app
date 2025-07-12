import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    // Add validation and signup logic here
    await AsyncStorage.setItem("token", "dummy-access-token");
    router.replace("/(tabs)"); // go to tabs home
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/mocktale-logo.jpeg")} style={styles.logo} />
      <Text style={styles.title}>Create your MockTale Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#7a7a7a"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7a7a7a"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#7a7a7a"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#7a7a7a"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/login")}> 
          <Text style={styles.link}>Login</Text>
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
    marginBottom: 18,
    color: '#2a2a2a',
    fontFamily: 'sans-serif-medium',
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
