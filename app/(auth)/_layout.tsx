import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" options={{ title: "Welcome" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="forgot" options={{ title: "Forgot Password" }} />
      <Stack.Screen name="verifyOtp" options={{ title: "Verify OTP" }} />
      <Stack.Screen name="changePassword" options={{ title: "Change Password" }} />
    </Stack>
  );
}
