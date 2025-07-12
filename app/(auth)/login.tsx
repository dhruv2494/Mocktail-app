import Button from "@/components/common/Button";
import { showToast } from "@/modules/utils";
import { authStyle } from "@/styles/authStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleLogin =async () => {
    const token = await AsyncStorage.setItem('token', '123456');

    // Add login logic here (API call, etc)
    // Show a message or navigate as needed
    showToast({ type: "success", text1: "Login successful!" });
    router.replace("/(tabs)");
  };

  return (
    <View style={authStyle.container}>
      <View style={authStyle.header}>

        <Text style={authStyle.heading}>Login</Text>
      </View>

      <ScrollView style={authStyle.form}>


        <View style={authStyle.inputContainer}>
          <Text style={authStyle.label}>Your Email</Text>
          <TextInput
            placeholder="Cooper_Kristin@gmail.com"
            placeholderTextColor="#333"
            style={authStyle.input}
          />
        </View>

        <View style={authStyle.inputContainer}>
          <Text style={authStyle.label}>Password</Text>
          <View style={authStyle.passwordContainer}>
            <TextInput
              secureTextEntry={!passwordVisible}
              placeholder="********"
              placeholderTextColor="#333"
              style={[authStyle.input, { flex: 1, borderWidth: 0 }]}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon
                name={passwordVisible ? "eye" : "eye-off"}
                size={20}
                color="#333"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={authStyle.buttonContainer}>
          <Button onPress={handleLogin} text="Login" />
        </View>
        <View style={authStyle.forgotPasswordContainer}>
          <Text style={authStyle.forgotPasswordText} onPress={() => router.push("/(auth)/forgot")}>Forgot Password ?</Text>
        </View>

        <View style={authStyle.checkboxContainer}>
          <Text style={authStyle.checkboxText}>
            By creating an account you have to agree with our them & condication.
          </Text>
        </View>
        <View style={authStyle.loginTextContainer}>
          <Text style={authStyle.loginText}>
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
            <Text style={authStyle.loginLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

