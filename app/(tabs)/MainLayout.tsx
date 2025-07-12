import { IconSymbol } from "@/components/ui/IconSymbol";
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
    View,
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
const SCREEN_WIDTH = Dimensions.get("window").width;
const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.6;

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
        { label: "Log Out", icon: "log-out", route: "/logout", lib: "Feather" },
    ];
    

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
                    <View style={styles.profileCard}>
                        <View style={styles.profileImageWrapper}>
                            <Image
                                source={{ uri: "https://placehold.co/64x64" }}
                                style={styles.profileImage}
                            />
                        </View>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.email}>johndoe@email.com</Text>
                    </View>

                    <ScrollView style={styles.menuContainer}>
                        {sideMenuItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.menuItem}
                                onPress={() => {
                                    router.replace(item.route);
                                    toggleSidebar();
                                }}
                            >
                                <Icon name={item.icon} size={20} color="#2a2a2a" />
                                <Text style={styles.menuText}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
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
        backgroundColor: "#eaf6ff",
        borderTopRightRadius: 32,
        borderBottomRightRadius: 32,
        paddingTop: 30,
        paddingHorizontal: 8,
        zIndex: 2,
        shadowColor: '#c2e7ff',
        shadowOpacity: 0.15,
        shadowRadius: 24,
        elevation: 10,
        borderRightWidth: 2,
        borderRightColor: '#c2e7ff',
        overflow: 'hidden',
    },
    profileCard: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 22,
        paddingVertical: 18,
        paddingHorizontal: 8,
        marginBottom: 22,
        marginHorizontal: 8,
        shadowColor: '#c2e7ff',
        shadowOpacity: 0.18,
        shadowRadius: 12,
        elevation: 6,
    },
    profileImageWrapper: {
        backgroundColor: '#c2e7ff',
        borderRadius: 36,
        padding: 4,
        marginBottom: 8,
        shadowColor: '#b4d2f7',
        shadowOpacity: 0.18,
        shadowRadius: 10,
        elevation: 4,
    },
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2a2a2a",
    },
    email: {
        fontSize: 12,
        color: "#555",
    },
    menuContainer: {
        flex: 1,
        paddingHorizontal: 2,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#fff',
        marginVertical: 6,
        marginHorizontal: 4,
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowColor: '#c2e7ff',
        shadowOpacity: 0.09,
        shadowRadius: 6,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#e3f1ff',
    },
    menuText: {
        fontSize: 15,
        color: "#2a2a2a",
        fontWeight: '500',
        marginLeft: 10,
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
        borderRadius: 30,
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
        marginHorizontal: 26,
        marginBottom: 16,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    bottomNavBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c2e7ff',
        borderRadius: 18,
        padding: 9,
        marginHorizontal: 8,
        shadowColor: '#b4d2f7',
        shadowOpacity: 0.09,
        shadowRadius: 6,
        elevation: 2,
    },
});
