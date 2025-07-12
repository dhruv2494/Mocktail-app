import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Add validation and authentication logic here
    await AsyncStorage.setItem("token", "dummy-access-token");
    router.replace("/(tabs)"); // go to tabs home
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/mocktale-logo.jpeg")} style={styles.logo} />
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to MockTale Academy</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>📧</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#7a7a7a"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#7a7a7a"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Text>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => router.push("/forgot")}> 
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.bottomText}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}> 
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 16,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 30,
  },
  card: {
    width: '100%',
    maxWidth: 370,
    backgroundColor: '#fff',
    borderRadius: 26,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 16,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#2a2a2a',
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
  },
  error: {
    color: '#e74c3c',
    marginBottom: 8,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7faff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#b4d2f7',
    marginVertical: 7,
    width: '100%',
    paddingHorizontal: 10,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 16,
    paddingVertical: 13,
    fontSize: 16,
    color: '#222',
  },
  eyeIcon: {
    padding: 4,
    marginLeft: 2,
  },
  button: {
    backgroundColor: '#ffbe76',
    borderRadius: 18,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginVertical: 14,
    shadowColor: '#ffbe76',
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.3,
  },
  link: {
    color: '#3b82f6',
    marginTop: 4,
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 15,
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
});
