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
import Icon from "react-native-vector-icons/Feather";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleSignup = () => {
    showToast({ type: "success", text1: "Signup successful!" });
    router.replace("/(tabs)");
  };

  return (
    <View style={authStyle.container}>
      <View style={authStyle.header}>

        <Text style={authStyle.heading}>Sign Up</Text>
        <Text style={authStyle.subHeading}>Enter your details below & free sign up</Text>
      </View>

      <ScrollView style={authStyle.form}>
        <View style={authStyle.inputContainer}>
          <Text style={authStyle.label}>username</Text>
          <TextInput
            placeholder="Cooper Kristin"
            placeholderTextColor="#333"
            style={authStyle.input}
          />
        </View>

        <View style={authStyle.inputContainer}>
          <Text style={authStyle.label}>Your Email</Text>
          <TextInput
            placeholder="Cooper_Kristin@gmail.com"
            placeholderTextColor="#333"
            style={authStyle.input}
          />
        </View>
        <View style={authStyle.inputContainer}>
          <Text style={authStyle.label}>Your Phone Number</Text>
          <TextInput
            placeholder="+91 1234567890"
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
          <Button onPress={() => router.push("/(auth)/login")} text="Creat account" />
        </View>

        <View style={authStyle.checkboxContainer}>
          <Text style={authStyle.checkboxText}>
            By creating an account you have to agree with our them & condication.
          </Text>
        </View>

        <View style={authStyle.loginTextContainer}>
          <Text style={authStyle.loginText}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={authStyle.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

