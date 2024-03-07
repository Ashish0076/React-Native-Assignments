import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && currentTime > 0) {
      timer = setInterval(() => {
        setCurrentTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [currentTime, isRunning]);

  const handleToggleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
      setCurrentTime(startTime || 0);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentTime(0);
    setStartTime(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.timer}>{currentTime}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter start time"
        keyboardType="numeric"
        value={startTime?startTime.toString():''}
        onChangeText={text => setStartTime(parseInt(text) || 0)}
        editable={!isRunning} 
      />
      <TouchableOpacity style={styles.button} onPress={handleToggleStartStop}>
        <Text>{isRunning ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
