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
    <View style={{ flex: 1, backgroundColor: '#B3D6F5' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
        <View style={[authStyle.card, { width: '90%', maxWidth: 400 }]}>{/* Card container */}
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <Text style={[authStyle.heading, { color: '#222', fontSize: 30 }]}>Sign Up</Text>
            <Text style={[authStyle.subHeading, { color: '#6A7BA2', fontSize: 15 }]}>Enter your details below & free sign up</Text>
          </View>

          <View style={authStyle.inputContainer}>
            <Text style={authStyle.label}>Username</Text>
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

          {/* Checkbox and terms */}
          {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <TouchableOpacity
              onPress={() => setAgree(!agree)}
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: agree ? '#4C5DF4' : '#B3D6F5',
                backgroundColor: agree ? '#4C5DF4' : '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}
            >
              {agree && <View style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: '#fff' }} />}
            </TouchableOpacity>
            <Text style={{ color: '#8E8E93', fontSize: 14, flex: 1 }}>
              By creating an account, you agree to our <Text style={{ color: '#4C5DF4', textDecorationLine: 'underline' }}>terms & conditions</Text>.
            </Text>
          </View> */}

          <View style={authStyle.buttonContainer}>
            <Button onPress={handleSignup} text="Create account" />
          </View>

          <View style={authStyle.loginTextContainer}>
            <Text style={authStyle.loginText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>{/* Go to login */}
              <Text style={authStyle.loginLink}> Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

