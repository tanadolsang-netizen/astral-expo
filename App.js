import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Astral ✨</Text>
      <Text style={styles.subtitle}>Comprehensive Astrology</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05050f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
});
