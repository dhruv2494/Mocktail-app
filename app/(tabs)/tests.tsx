import { View, Text, StyleSheet } from 'react-native';

export default function TestsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tests Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4faff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
});
