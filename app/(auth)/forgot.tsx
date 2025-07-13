import Button from "@/components/common/Button";
import { showToast } from "@/modules/utils";
import { authStyle } from "@/styles/authStyle";
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

  const handleForgot = async () => {
    showToast({ type: "success", text1: "Forgot Password sent to your email!" });
    router.replace("/(auth)/verifyOtp");
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B3D6F5' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
        <View style={[authStyle.card, { width: '90%', maxWidth: 400 }]}>{/* Card container */}
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <Text style={[authStyle.heading, { color: '#222', fontSize: 30 }]}>Forgot Password</Text>
          </View>

          <View style={authStyle.inputContainer}>
            <Text style={authStyle.label}>Your Email</Text>
            <TextInput
              placeholder="Cooper_Kristin@gmail.com"
              placeholderTextColor="#333"
              style={authStyle.input}
            />
          </View>



          <View style={authStyle.buttonContainer}>
            <Button onPress={handleForgot} text="Forgot Password" />
          </View>

          <View style={authStyle.loginTextContainer}>
            <Text style={authStyle.loginText}>
              Remember your password?
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

