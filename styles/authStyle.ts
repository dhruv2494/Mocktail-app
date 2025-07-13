
import { StyleSheet } from "react-native";

export const authStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#f0f0f2",
    padding: 20,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    maxHeight: 200,

  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 14,
    color: "#8E8E93",
    marginBottom: 30,
  },
  form: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#8E8E93",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F9F9F9",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    gap: 14,
  },
  otpInput: {
    width: 48,
    height: 54,
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#ddd",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginHorizontal: 4,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#4C5DF4",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  checkboxText: {
    flex: 1,
    marginLeft: 8,
    marginTop: 15,
    color: "#8E8E93",
    fontSize: 16,
  },
  loginText: {
    textAlign: "center",
    color: "#8E8E93",
    fontSize: 16,
  },
  loginLink: {
    color: "#4C5DF4",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  loginTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginTop: 5,
    paddingHorizontal: 20,
    marginBottom: 10,
    
  },
  forgotPasswordText: {
    color: "#4C5DF4",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 6,
    alignItems: 'stretch',
  },
});
