import { IconSymbol } from "@/components/ui/IconSymbol";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    Easing,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.8;

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

    const toggleSidebar = () => {
        Animated.timing(sidebarAnim, {
            toValue: sidebarVisible ? -SIDEBAR_WIDTH : 0,
            duration: 250,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
        setSidebarVisible(!sidebarVisible);
    };

    const sideMenuItems = [
        { label: "Home", icon: "home", route: "/", lib: "Feather" },
        { label: "Subscriptions", icon: "credit-card", route: "/subscriptions", lib: "Feather" },
        { label: "Combo Packages", icon: "layers", route: "/combo", lib: "Feather" },
        { label: "Free Quiz", icon: "help-circle", route: "/free-quiz", lib: "Feather" },
        { label: "Free PDF", icon: "file-text", route: "/pdfs", lib: "Feather" },
        { label: "Live Test", icon: "play-circle", route: "/live-tests", lib: "Feather" },
        { label: "eBooks", icon: "book", route: "/ebooks", lib: "Feather" },
        { label: "Job Alerts", icon: "bell", route: "/alerts", lib: "Feather" },
        { label: "Purchase List", icon: "shopping-cart", route: "/purchases", lib: "Feather" },
        { label: "Contact Us", icon: "mail", route: "/contact", lib: "Feather" },
        { label: "Privacy Policy", icon: "lock", route: "/privacy", lib: "Feather" },
        // { label: "Log Out", icon: "log-out", route: "/logout", lib: "Feather" },
    ];
    const logout = async () => {
        await AsyncStorage.removeItem("token");
        router.replace("/(auth)/login");
    };

    return (
        // <SafeAreaProvider>
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={toggleSidebar} style={{
                    // backgroundColor: "red",
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                }}>
                    <Text style={{ fontSize: 24, color: "#2a2a2a" }}>☰</Text>
                    {/* <IconSymbol name="text.alignleft" size={24} color="#2a2a2a" /> */}
                </TouchableOpacity>
                <Text style={styles.logoText}>MockTale</Text>
            </View>

            <View style={{ flex: 1, flexDirection: "row", position: "relative" }}>
                {/* Overlay */}
                {sidebarVisible && (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={toggleSidebar}
                        style={styles.overlay}
                    />
                )}

                {/* Sidebar */}
                <Animated.View style={[styles.sidebar, { left: sidebarAnim }]}>
                    <View style={styles.userProfile}>
                        <View style={styles.userProfileImageWrapper}>
                            <Image
                                source={{ uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" }} style={styles.userProfileImage}
                            />
                        </View>
                        <Text style={styles.name}>John Doe</Text>
                    </View>
                    <Text style={styles.email}>john.doe@example.com</Text>
                    <ScrollView style={styles.sidebarContent}>
                        {sideMenuItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.sidebarItem}
                                onPress={() => {
                                    toggleSidebar();
                                    router.replace(item.route);
                                }}
                            >
                                <Icon name={item.icon} size={24} color="#2a2a2a" />
                                <Text style={styles.sidebarText}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            style={styles.sidebarItem}
                            onPress={() => {
                                logout();
                                }}
                            >
                                <Icon name="log-out" size={20} color="#2a2a2a" />
                                <Text style={styles.sidebarText}>Log Out</Text>
                            </TouchableOpacity>
                    </ScrollView>
                </Animated.View>

                {/* Main Content */}
                <View style={styles.mainContent}>
                    <View style={{ flex: 1 }}>{children}</View>
                </View>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => router.replace("/")}>
                    <IconSymbol size={28} name="house.fill" color="#3b82f6" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => router.replace("/tests")}>
                    <IconSymbol size={28} name="doc.text.magnifyingglass" color="#3b82f6" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => router.replace("/subscriptions")}>
                    <IconSymbol size={28} name="creditcard.fill" color="#3b82f6" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => router.replace("/pdfs")}>
                    <IconSymbol size={28} name="doc.richtext" color="#3b82f6" />
                </TouchableOpacity>
            </View>
        </View>
        // </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: 1,
    },
    sidebar: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: SIDEBAR_WIDTH,
        backgroundColor: "#fff",
        zIndex: 2,
        shadowColor: '#c2e7ff',
        shadowOpacity: 0.15,
        shadowRadius: 24,
        elevation: 10,
        overflow: 'hidden',
    },
    userProfile: {
        marginBottom: 20,
        backgroundColor: "#3D5CFF",
        height: "15%",
        width: "100%",
        padding: 16,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "relative",
    }, userProfileImageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
        position: "absolute",
        left: 16,
        bottom: '-50%',
        margin: "auto",
    }, userProfileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
    }, name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 8,
    }, email: {
        fontSize: 14,
        color: '#000',
        textAlign: "right",
        paddingRight: 16,
        maxWidth: "70%",
        alignSelf: "flex-end",
        marginBottom: 20,
    },
    sidebarContent: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopWidth: 2,
        borderTopColor: "#e0e0e0",
    },
    sidebarItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    sidebarText: {
        fontSize: 16,
        marginLeft: 12,
    },
    mainContent: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        backgroundColor: "#f8f9fa",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        zIndex: 1,
    },
    logoText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2a2a2a",
        marginLeft: 16,
    },
    bottomNav: {
        backgroundColor: "#fff",
        borderRadius: 0,
        elevation: 14,
        shadowColor: "#c2e7ff",
        shadowOpacity: 0.16,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 4 },
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 28,
        paddingVertical: 10,
    },
    bottomNavBtn: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#c2e7ff',
        // borderRadius: 18,
        padding: 9,
        marginHorizontal: 8,
        // shadowColor: '#b4d2f7',
        // shadowOpacity: 0.09,
        // shadowRadius: 6,
        // elevation: 2,
    },
});
