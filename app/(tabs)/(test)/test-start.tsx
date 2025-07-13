import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";

const options = [
  { key: 'A', label: '20' },
  { key: 'B', label: '21' },
  { key: 'C', label: '22' },
  { key: 'D', label: '23' },
  { key: 'E', label: '24' },
];

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function TestStart() {
  const { colors } = useTheme();
  const [selected, setSelected] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const router = useRouter();
  const openSidebar = () => {
    setSidebarOpen(true);
    Animated.timing(sidebarAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(sidebarAnim, {
      toValue: SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setSidebarOpen(false));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      {/* Header */}
      <View style={{
        height: 70,
        width: "100%",
        backgroundColor: colors.primary || '#4C5DF4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 10,
        elevation: 4,
      }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 'bold' }}>Free Quiz</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>00:03:26</Text>
          <TouchableOpacity onPress={openSidebar}>
            <Text style={{ fontSize: 28, color: "#fff" }}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <View style={{ width: '100%', maxWidth: 500, backgroundColor: '#fff', borderRadius: 20, padding: 24, marginTop: 24, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 }}>
          {/* Qn Info */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
            <Text style={{ color: '#4C5DF4', fontWeight: '600' }}>Qn : 1/10</Text>
            <Text style={{ color: '#4C5DF4', fontWeight: '600' }}>Qn. Time: 06:34</Text>
          </View>
          {/* Question */}
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 18, color: '#222' }}>
            What value should come in the place of (?) in the following number series?
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18 }}>
            52, 42, 62, 32, 72, ?
          </Text>
          {/* Options */}
          {options.map((opt, idx) => (
            <TouchableOpacity
              key={opt.key}
              onPress={() => setSelected(opt.key)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: selected === opt.key ? '#E6F0FD' : '#F9F9F9',
                borderColor: selected === opt.key ? '#4C5DF4' : '#ddd',
                borderWidth: 1.5,
                borderRadius: 12,
                paddingVertical: 12,
                paddingHorizontal: 16,
                marginBottom: 12,
              }}
            >
              <View style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                borderWidth: 2,
                borderColor: selected === opt.key ? '#4C5DF4' : '#bbb',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 14,
                backgroundColor: '#fff',
              }}>
                {selected === opt.key && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#4C5DF4' }} />}
              </View>
              <Text style={{ fontSize: 16, color: '#222' }}>{opt.label}</Text>
            </TouchableOpacity>
          ))}
          {/* Footer Buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, gap: 12 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#E6F0FD', borderRadius: 10, paddingVertical: 14, alignItems: 'center' }}>
              <Text style={{ color: '#4C5DF4', fontWeight: 'bold', fontSize: 16 }}>Mark for review</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#4C5DF4', borderRadius: 10, paddingVertical: 14, alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* Sidebar Drawer and Overlay */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={closeSidebar}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              zIndex: 99,
            }}
          />
          {/* Sidebar */}
          <Animated.View style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 340,
            backgroundColor: '#fff',
            borderLeftWidth: 1,
            borderColor: '#eee',
            padding: 20,
            shadowColor: '#000',
            shadowOpacity: 0.10,
            shadowRadius: 12,
            elevation: 8,
            zIndex: 100,
            transform: [{ translateX: sidebarAnim }],
          }}>
            {/* Close Button */}
            <TouchableOpacity onPress={closeSidebar} style={{ position: 'absolute', top: 18, right: 18, zIndex: 10 }}>
              <Text style={{ fontSize: 28, color: '#888' }}>×</Text>
            </TouchableOpacity>
            {/* Avatar and Name */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18, marginTop: 10 }}>
              <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#B3D6F5', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Text style={{ fontSize: 28, color: '#fff', fontWeight: 'bold' }}>O</Text>
              </View>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#222', flex: 1 }}>John Doe</Text>
            </View>
            {/* Dropdown (static for now) */}
            <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 18 }}>
              <Text style={{ fontSize: 16, color: '#444' }}>Missing Number...</Text>
            </View>
            {/* Question numbers grid */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 18, justifyContent: 'center' }}>
              {Array.from({ length: 30 }, (_, i) => (
                <View key={i} style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: '#F4F7FB', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: i === 0 ? '#4C5DF4' : '#ddd', marginBottom: 6 }}>
                  <Text style={{ color: '#222', fontWeight: 'bold', fontSize: 16 }}>{i + 1}</Text>
                </View>
              ))}
            </View>
            {/* Legend */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
              <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#F66', marginRight: 8 }} />
              <Text style={{ fontSize: 14, color: '#444', flex: 1 }}>Visited but not answered</Text>
              <Text style={{ fontSize: 14, color: '#444' }}>0</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
              <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#4C5DF4', marginRight: 8 }} />
              <Text style={{ fontSize: 14, color: '#444', flex: 1 }}>Answered</Text>
              <Text style={{ fontSize: 14, color: '#444' }}>0</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
              <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#8E44AD', marginRight: 8 }} />
              <Text style={{ fontSize: 14, color: '#444', flex: 1 }}>Marked for review</Text>
              <Text style={{ fontSize: 14, color: '#444' }}>0</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
              <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#ddd', marginRight: 8 }} />
              <Text style={{ fontSize: 14, color: '#444', flex: 1 }}>Not visited</Text>
              <Text style={{ fontSize: 14, color: '#444' }}>30</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: '#8E44AD', marginRight: 8 }} />
              <Text style={{ fontSize: 14, color: '#444', flex: 1 }}>Answered and marked for review</Text>
              <Text style={{ fontSize: 14, color: '#444' }}>0</Text>
            </View>
            {/* Submit Button */}
            <TouchableOpacity style={{ backgroundColor: '#4C5DF4', borderRadius: 10, paddingVertical: 14, alignItems: 'center', marginTop: 8, width: '100%' }} onPress={() => router.push("/(tabs)/(test)/test-result")}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        </>
      )}
    </View>
  );
}