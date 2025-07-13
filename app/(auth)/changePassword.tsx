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
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const router = useRouter();

  const handleChangePassword = async () => {
    const token = await AsyncStorage.setItem('token', '123456');
    showToast({ type: "success", text1: "Password changed successfully!" });
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B3D6F5' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
        <View style={[authStyle.card, { width: '90%', maxWidth: 400 }]}>{/* Card container */}
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <Text style={[authStyle.heading, { color: '#222', fontSize: 30 }]}>Change Password</Text>
          </View>



          <View style={authStyle.inputContainer}>
            <Text style={authStyle.label}>New Password</Text>
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

          <View style={authStyle.inputContainer}>
            <Text style={authStyle.label}>Confirm Password</Text>
            <View style={authStyle.passwordContainer}>
              <TextInput
                secureTextEntry={!confirmPasswordVisible}
                placeholder="********"
                placeholderTextColor="#333"
                style={[authStyle.input, { flex: 1, borderWidth: 0 }]}
              />
              <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                <Icon
                  name={confirmPasswordVisible ? "eye" : "eye-off"}
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
              Do you remember your password?
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>{/* Go to signup */}
              <Text style={authStyle.loginLink}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

