import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: 'https://avatars.githubusercontent.com/u/115460698?v=4',
        }}
        style={styles.profilePicture}
      />
      <TextInput  style={styles.searchInput} placeholder="Search..." />
      <TouchableOpacity>
        <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: Platform.select({
      android: 30,
      ios: 30,
      default: 0,
    }),
    paddingLeft: 10,
    paddingRight: 10,
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
};

export default Header;
