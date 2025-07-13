import { setShowBottomTab, setShowHeader, setShowSidebarToggle } from "@/store/appConfigSlice";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function TestLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setShowHeader(false));
    dispatch(setShowBottomTab(false));
    dispatch(setShowSidebarToggle(false));
    return () => {
      dispatch(setShowHeader(true));
      dispatch(setShowBottomTab(true));
      dispatch(setShowSidebarToggle(true));
    };
  }, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="test-start" options={{ title: "Test" }} />
      <Stack.Screen name="test-result" options={{ title: "Test Result" }} />
    </Stack>
  );
}
