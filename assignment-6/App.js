import { View, FlatList, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import DATA from './Data';
import Header from './components/Header';
import PostItem from './components/PostItem';
import notificationData from './notificationData';
import Notification from './components/Notification';
import CustomDrawer from './components/CustomDrawer';

/*________________________________________
    For Better View Use Android or IOS
  ________________________________________
*/

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <PostItem item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 8,
            width: '100%',
            backgroundColor: '#cdcfd1',
          }}></View>
      )}
    />
  );
};
const Notifications = () => {
  return (
    <FlatList
      data={notificationData}
      renderItem={({ item }) => <Notification item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
const MyNetwork = () => {
  return (
    <Text style={{ textAlign: 'center', marginTop: 80 }}>
      You have no connections right now!
    </Text>
  );
};
const Post = () => {
  return (
    <Text style={{ textAlign: 'center', marginTop: 80 }}>
      You have no post right now!
    </Text>
  );
};
const Jobs = () => {
  return (
    <Text style={{ textAlign: 'center', marginTop: 80 }}>
      We don't have Jobs right now!
    </Text>
  );
};

const mainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <Header />,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="MyNetwork"
        component={MyNetwork}
        options={{
          header: () => <Header />,
          tabBarIcon: () => (
            <AntDesign name="addusergroup" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          header: () => <Header />,
          tabBarIcon: () => (
            <Ionicons name="add-circle-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: () => <Header />,
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          header: () => <Header />,
          tabBarIcon: () => (
            <Ionicons name="bag-add-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mainTabs"
        component={mainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={() => <CustomDrawer />}
        screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="mainStack" component={mainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
};

export default App;
