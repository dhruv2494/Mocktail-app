import Button from "@/components/common/Button";
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

export default function Forgot() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleForgot =async () => {
    const token = await AsyncStorage.setItem('token', '123456');

    // Add login logic here (API call, etc)
    // Show a message or navigate as needed
    alert("Forgot Password successful (mock)");
    router.replace("/(auth)/verifyOtp");
  };

  return (
    <View style={authStyle.container}>
      <View style={authStyle.header}>

        <Text style={authStyle.heading}>Forgot Password</Text>
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


        <View style={authStyle.buttonContainer}>
          <Button onPress={handleForgot} text="Submit" />
        </View>


        <View style={authStyle.loginTextContainer}>
          <Text style={authStyle.loginText}>
            Do you remember your password ?
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={authStyle.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

