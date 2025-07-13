import Button from "@/components/common/Button";
import { showToast } from "@/modules/utils";
import { authStyle } from "@/styles/authStyle";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef<Array<TextInput | null>>([]);
  const router = useRouter();

  const handleOtpChange = (text: string, idx: number) => {
    if (!/^[0-9]?$/.test(text)) return;
    const newOtp = [...otp];
    newOtp[idx] = text;
    setOtp(newOtp);
    if (text && idx < 3) {
      otpRefs.current[idx + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (e: any, idx: number) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join("").length === 4) {
      // Add verification logic
      showToast({ type: "success", text1: "OTP Verified",});
      router.replace("/(auth)/changePassword");
    } else {
      showToast({ type: "error", text1: "Please enter the 4-digit OTP" });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#B3D6F5' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
        <View style={[authStyle.card, { width: '90%', maxWidth: 400 }]}>{/* Card container */}
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <Text style={[authStyle.heading, { color: '#222', fontSize: 30 }]}>Verify OTP</Text>
          </View>

          <View style={authStyle.inputContainer}>
            <Text style={authStyle.label}>Enter OTP</Text>
            <View style={authStyle.otpRow}>
            {[0, 1, 2, 3].map((i) => (
              <TextInput
                key={i}
                ref={ref => { otpRefs.current[i] = ref; }}
                style={authStyle.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={otp[i]}
                onChangeText={text => handleOtpChange(text, i)}
                onKeyPress={({ nativeEvent }) => handleOtpKeyPress(nativeEvent, i)}
                autoFocus={i === 0}
                returnKeyType="next"
              />
            ))}
          </View>
          </View>


          <View style={authStyle.buttonContainer}>
            <Button onPress={handleVerify} text="Verify" />
          </View>

          <View style={authStyle.loginTextContainer}>
            <Text style={authStyle.loginText}>
              Didn't receive OTP?
            </Text>
            <TouchableOpacity>{/* Go to signup */}
              <Text style={authStyle.loginLink}> Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

