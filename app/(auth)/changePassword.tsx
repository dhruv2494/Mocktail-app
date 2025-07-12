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

export default function ChangePassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleChangePassword =async () => {
    const token = await AsyncStorage.setItem('token', '123456');

    // Add login logic here (API call, etc)
    // Show a message or navigate as needed
    showToast({ type: "success", text1: "Change Password successful!" });
    router.replace("/(tabs)");
  };

  return (
    <View style={authStyle.container}>
      <View style={authStyle.header}>

        <Text style={authStyle.heading}>Change Password</Text>
      </View>

      <ScrollView style={authStyle.form}>

      <View style={authStyle.inputContainer}>
          <Text style={authStyle.label}>New Password</Text>
          <View style={authStyle.passwordContainer}>
            <TextInput
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

        <View style={authStyle.inputContainer}>
          <Text style={authStyle.label}>Confirm Password</Text>
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
          <Button onPress={handleChangePassword} text="Change Password" />
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

