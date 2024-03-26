import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import react, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => loadCount(), []);

  const loadCount = async () => {
    try {
      const value = await AsyncStorage.getItem('count');
      if (value !== null) {
        setCount(parseInt(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const incrementCount = async () => {
    try {
      const newCount = count + 1;
      await AsyncStorage.setItem('count', newCount.toString());
      setCount(newCount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Number of times the app has been opened: {count}
      </Text>
      <Button title="Open App" onPress={incrementCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
