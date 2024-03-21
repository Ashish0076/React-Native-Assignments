import { View, Text } from 'react-native';

const notification = ({ item }) => (
  <View style={[styles.item, styles[item.type]]}>
    <Text style={styles.title}>Notification {item.id}</Text>
    <Text style={styles.message}>{item.message}</Text>
  </View>
);

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#cdd1ce',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
};

export default notification;
