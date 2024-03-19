import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Platform
} from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import DATA from './Data';




/*________________________________________
    For Better View Use Android or IOS
  ________________________________________
*/

 



const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/115460698?v=4"}}
        style={styles.profilePicture}
      />
      <TextInput style={styles.searchInput} placeholder="Search..." />
      <TouchableOpacity>
        <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const PostItem = ({ item }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={{ uri: item.profilePicture }}
          style={styles.postProfilePicture}
        />
        <Text style={styles.postTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.connectButton}>
          <Text>Connect</Text>
        </TouchableOpacity>
      </View>
      <Text>{item.text}</Text>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="like2" size={24} color="black" />
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="message1" size={24} color="black" />
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Feather name="repeat" size={24} color="black" />
          <Text>Repost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Feather name="send" size={24} color="black" />
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name="home" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name="addusergroup" size={24} color="black" />
        <Text>MyNetwork</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="bag-add-outline" size={24} color="black" />
        <Text>Jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <PostItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 10,
              width: '100%',
            }}></View>
        )}
      />
      <Footer />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: Platform.select({
      android: 23,
      ios: 23,
      default: 0,
    })
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  messageIcon: {
    width: 30,
    height: 30,
  },
  postContainer: {
    marginBottom: 20,
    padding: 1,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postProfilePicture: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  postTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 25,
  },
  connectButton: {
    padding: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    marginTop: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingTop: 10,
  },
  icon: {
    alignItems: 'center',
  }
};

export default App;
