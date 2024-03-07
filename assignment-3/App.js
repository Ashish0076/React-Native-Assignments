import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setBtn(() => (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDeleteTask}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    ));
    setRefreshing(false);
  };

  const handleAddTask = () => {
    setData((prev) => [{ task: `New Task ${prev.length + 1}` }, ...prev]);
  };

  const handleDeleteTask = () => {
    setData((prev) => prev.slice(1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/*btn*/}
        {
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
              <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDeleteTask}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        }
        {data.map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text>{task.task}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
});
