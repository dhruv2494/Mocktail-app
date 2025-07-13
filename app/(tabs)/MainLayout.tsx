import { showToast } from '@/modules/utils';
import { RootState } from '@/store';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '@react-navigation/native';
import { usePathname, useRouter } from "expo-router";
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
import { useSelector } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.8;

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { colors } = useTheme();
    const router = useRouter();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
    const pathname = usePathname();
    const toggleSidebar = () => {
        Animated.timing(sidebarAnim, {
            toValue: sidebarVisible ? -SIDEBAR_WIDTH : 0,
            duration: 250,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
        setSidebarVisible(!sidebarVisible);
    };
    const { showBottomTab, showHeader, headerText } = useSelector((state: RootState) => state.appConfig);
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
        showToast({ type: "success", text1: "Logout successfully!" });
        router.push("/(auth)/login");
    };

    const handleNavigate = (route: string) => {
        if (sidebarVisible) {
            toggleSidebar();
        }
        router.push(route);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

            {!sidebarVisible && <TouchableOpacity onPress={toggleSidebar} style={[styles.sidebarToggle, { backgroundColor: "#fff" }]}>
                <Text style={{ fontSize: 24, color: colors.primary }}>☰</Text>
            </TouchableOpacity>}

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
                <Animated.View style={[styles.sidebar, { left: sidebarAnim, backgroundColor: colors.card }]}>
                    <View style={styles.userProfile}>
                        <View style={{}}>
                            <Image
                                source={{ uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" }} style={styles.userProfileImage}
                            />
                        </View>
                        <Text style={[styles.name]}>John Doe</Text>
                    </View>
                    <Text style={[styles.email, { color: colors.text }]} >john.doe@example.com</Text>
                    <ScrollView style={styles.sidebarContent}>
                        {sideMenuItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.sidebarItem}
                                onPress={() => {
                                    toggleSidebar();
                                    router.push(item.route);
                                }}
                            >
                                <Icon name={item.icon} size={24} color={colors.text} />
                                <Text style={[styles.sidebarText, { color: colors.text }]}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            style={styles.sidebarItem}
                            onPress={() => {
                                logout();
                            }}
                        >
                            <Icon name="log-out" size={20} color={colors.text} />
                            <Text style={[styles.sidebarText, { color: colors.text }]}>Log Out</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Animated.View>

                {/* Main Content */}
                <View style={[styles.mainContent, { backgroundColor: colors.background }]}>
                    {showHeader && <View style={[styles.commonHeader, { backgroundColor: colors.primary }]}>
                        <Text style={[styles.commonHeaderText, { color: colors.card }]}>{headerText||"Hello John"}</Text>
                    </View>}
                    <View style={{ flex: 1 }}>{children}</View>
                </View>
            </View>

            {/* Bottom Navigation */}
            {showBottomTab && <View style={[styles.bottomNav, { backgroundColor: colors.card }]}>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => handleNavigate("/")}>
                    <MaterialIcons size={30} name="house" color={pathname === "/" ? colors.primary : colors.border} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => handleNavigate("/tests")}>
                    <MaterialIcons size={30} name="assignment" color={pathname === "/tests" ? colors.primary : colors.border} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottomNavBtn, styles.bottomNavBtnMain]} onPress={() => handleNavigate("/subscriptions")}>
                    <MaterialCommunityIcons size={34} name="crown" color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => handleNavigate("/pdfs")}>
                    <MaterialIcons size={30} name="picture-as-pdf" color={pathname === "/pdfs" ? colors.primary : colors.border} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomNavBtn} onPress={() => handleNavigate("/combo")}>
                    <MaterialIcons size={30} name="layers" color={pathname === "/combo" ? colors.primary : colors.border} />
                </TouchableOpacity>
            </View>}

        </View>
        // </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    sidebarToggle: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        position: "absolute",
        top: 20,
        left: 0,
        zIndex: 3,
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
    commonHeader: {
        width: "100%",
        height: "20%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: 20,

    },
    commonHeaderText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
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
        backgroundColor: "#FFFFFF",
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
        paddingHorizontal: 10,
        // paddingVertical: 10,
        height: 80,
        position: "relative",

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
    bottomNavBtnMain: {
        backgroundColor: '#3b82f6',
        borderRadius: 80,
        padding: 15,
        zIndex: 1,

    },
});
