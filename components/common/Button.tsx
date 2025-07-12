import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    onPress: () => void;
    text: string;
    colour?: string;
    textColor?: string;
    isBackgroundFilled?: boolean;
}

const Button = ({
    onPress,
    text,
    colour = "#3b5bfd",
    textColor = "#fff",
    isBackgroundFilled = true
}: ButtonProps) => {
    const backgroundColor = isBackgroundFilled ? colour : "transparent";
    const shadowColor = isBackgroundFilled ? colour : "transparent";
    const textStyleColor = isBackgroundFilled ? textColor : colour;

    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor, shadowColor, borderColor: colour }
            ]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textStyleColor }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        marginRight: 8,
        shadowOpacity: 0.09,
        shadowRadius: 6,
        elevation: 2,
        borderWidth: 1.5,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 0.3,
    }
});
